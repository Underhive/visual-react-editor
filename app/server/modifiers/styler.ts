import { parse } from '@babel/parser';
import traverse from '@babel/traverse';
import generate from '@babel/generator';
import * as t from '@babel/types';
import * as fs from 'fs';
import prettier from 'prettier';
import * as path from 'path';

type StyleObject = { [key: string]: string };

async function modifyElementStyleForImported(
  filePath: string,
  styleVariableName: string,
  newStyles: StyleObject
): Promise<boolean> {
  // Read the content of the imported file
  const code = fs.readFileSync(filePath, 'utf8');
  const ast = parse(code, {
    sourceType: 'module',
    plugins: ['jsx', 'typescript']
  });

  let didModify = false;

  // Traverse the AST to find and modify the style object
  traverse(ast, {
    VariableDeclarator(path) {
      if (path.node.id.type === 'Identifier' && path.node.id.name === styleVariableName) {
        if (path.node.init && t.isObjectExpression(path.node.init)) {
          // Modify the style object
          didModify = applyNewStylesToObjectExpression(path.node.init, newStyles);
        }
      }
    }
  });

  // Generate the modified code and format it
  const modifiedCode = generate(ast, { retainLines: true,  }).code;
  const formattedCode = await prettier.format(modifiedCode, { parser: "babel-ts" });

  // Write the modified code back to the file
  fs.writeFileSync(filePath, formattedCode);
  return didModify;
}

export async function modifyElementStyle(
  filePath: string,
  lineNumber: number,
  columnNumber: number,
  newStyles: StyleObject
): Promise<string> {
  const code = fs.readFileSync(filePath, 'utf8');
  const ast = parse(code, {
    sourceType: 'module',
    plugins: ['jsx', 'typescript']
  });

  let styleVariableName: string | null = null;
  let didModify = false;

  // First pass to find the style variable name if styles are not inline
  traverse(ast, {
    JSXOpeningElement(path) {
      const { loc } = path.node;
      if (loc && loc.start.line === lineNumber && loc.start.column === columnNumber - 1) { // Adjusting for 0-based index
        let foundStyle = false
        path.node.attributes.forEach(attribute => {
          if (t.isJSXAttribute(attribute) && attribute.name.name === 'style') {
            foundStyle = true
            if (t.isJSXExpressionContainer(attribute.value) && t.isObjectExpression(attribute.value.expression)) {
              didModify = applyNewStylesToObjectExpression(attribute.value.expression, newStyles);
            } else if (t.isJSXExpressionContainer(attribute.value) && t.isIdentifier(attribute.value.expression)) {
              const expression = attribute.value.expression;
              if (t.isIdentifier(expression)) {
                // Style is referenced by a variable
                styleVariableName = expression.name;
              }
            }
          }
        });

        if (!foundStyle) {
          const styleExpression = t.objectExpression([])
          path.node.attributes.push(
            t.jsxAttribute(
              t.jsxIdentifier('style'),
              t.jsxExpressionContainer(
                styleExpression
              )
            )
          );
          didModify = applyNewStylesToObjectExpression(styleExpression, newStyles);
        }
      }
    }
  });

  // Second pass to modify the style variable
  if (styleVariableName) {
    let isImported = false;
    traverse(ast, {
      ImportDeclaration(path) {
        path.node.specifiers.forEach(async specifier => {
          if (t.isImportSpecifier(specifier) && specifier.imported.type === 'Identifier' && specifier.imported.name === styleVariableName) {
            isImported = true;
            // Resolve the path of the imported file
            const importedFilePath = await resolveImportedFilePath(path.node.source.value, filePath);
            // Modify the style in the imported file
            didModify = await modifyElementStyleForImported(importedFilePath, styleVariableName, newStyles);
          }
        });
      }
    });
  
    if (!isImported) {
      traverse(ast, {
        VariableDeclarator(path) {
          if (path.node.id.type === 'Identifier' && path.node.id.name === styleVariableName) {
            if (path.node.init && t.isObjectExpression(path.node.init)) {
              // Modify the style variable
              didModify = applyNewStylesToObjectExpression(path.node.init, newStyles);
            }
          }
        }
      });
    }
  }

  if(!didModify) {
    throw new Error('Unable to modify style');
  }

  const generatedCode = generate(ast, { retainLines: true }).code;
  const options = await prettier.resolveConfig(filePath);
  return await prettier.format(generatedCode, { 
    parser: "babel-ts",
    ...options
  });
}


async function resolveImportedFilePath(importPath: string, relativeTo: string): Promise<string> {
  let resolvedPath = '';
  if (importPath.startsWith('.')) {
    // Handle relative imports
    resolvedPath = path.resolve(path.dirname(relativeTo), importPath);
  } else {
    // Handle node_modules or other absolute imports
    // This assumes a standard Node.js project structure
    resolvedPath = path.resolve(relativeTo, '..', 'node_modules', importPath);
  }
  // Append '.ts' if it is a TypeScript file and the file exists
  if (!resolvedPath.endsWith('.ts') && fs.existsSync(`${resolvedPath}.ts`)) {
    resolvedPath += '.ts';
  } if (!resolvedPath.endsWith('.tsx') && fs.existsSync(`${resolvedPath}.tsx`)) {
    resolvedPath += '.tsx';
  } else if (!resolvedPath.endsWith('.js') && fs.existsSync(`${resolvedPath}.js`)) {
    // Fallback for JavaScript files
    resolvedPath += '.js';
  }

  return resolvedPath;
}

function applyNewStylesToObjectExpression(objectExpression: t.ObjectExpression, newStyles: StyleObject) {
  let didModify = false
  Object.entries(newStyles).forEach(([key, value]) => {
    const existingProp = objectExpression.properties.find(prop =>
      t.isObjectProperty(prop) && t.isIdentifier(prop.key) && prop.key.name === key
    );

    if (existingProp && t.isObjectProperty(existingProp)) {
      // Update existing property
      existingProp.value = t.stringLiteral(value);
      didModify = true
    } else {
      // Add new property
      objectExpression.properties.push(
        t.objectProperty(t.identifier(key), t.stringLiteral(value))
      );
      didModify = true
    }
  });
  return didModify;
}
