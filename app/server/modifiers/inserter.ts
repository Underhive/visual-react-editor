import { parse } from '@babel/parser';
import traverse from '@babel/traverse';
import generate from '@babel/generator';
import * as t from '@babel/types';
import * as fs from 'fs';
import prettier from 'prettier';
import { default as parseHtml } from 'html-react-parser';
import React from 'react';

export async function insertChildrenIntoElement(
  filePath: string,
  lineNumber: number,
  columnNumber: number,
  childrenHtmlString: string
): Promise<string> {
  const code = fs.readFileSync(filePath, 'utf8');
  const ast = parse(code, {
    sourceType: 'module',
    plugins: ['jsx', 'typescript']
  });

  const childrenElements = convertHtmlToJsxElements(childrenHtmlString);

  let inserted = false;

  traverse(ast, {
    JSXElement(path) {
      const { start } = path.node.loc ?? { start: { line: -1, column: -1 } };
      if (start.line === lineNumber && start.column === columnNumber - 1) {
        if (path.node.children) {
          path.node.children.push(...childrenElements);
          inserted = true;
        }
      }
    }
  });

  if (!inserted) {
    console.warn('No insertion made. Target position might be incorrect.');
    return;
  }

  const generatedCode = generate(ast, { retainLines: true }).code;
  const options = await prettier.resolveConfig(filePath);
  const formattedCode = await prettier.format(generatedCode, { parser: "babel-ts", ...options });
  return formattedCode
}

export async function insertElement(
  filePath: string,
  lineNumber: number,
  columnNumber: number,
  htmlString: string,
  insertAfter: boolean = true
): Promise<string> {
  const code = fs.readFileSync(filePath, 'utf8');
  const ast = parse(code, {
    sourceType: 'module',
    plugins: ['jsx', 'typescript']
  });

  const jsxElement = convertHtmlToJsx(htmlString);

  let inserted = false;

  traverse(ast, {
    JSXElement(path) {
      if (!inserted) {
        const { start, end } = path.node.loc;
        
        if (start.line === lineNumber && start.column === columnNumber - 1) {
          console.log("Insertion point found, inserting element.");
          if(insertAfter) 
            path.insertAfter(jsxElement);
          else 
            path.insertBefore(jsxElement);
          inserted = true;
          console.log(`Inserted at line ${start.line}, column ${start.column}`);
        }
      }
    }
  });

  if (!inserted) {
    console.warn('No insertion made. Target position might be incorrect.');
  }

  const generatedCode = generate(ast, { retainLines: true }).code;
  const options = await prettier.resolveConfig(filePath);
  const formattedCode = await prettier.format(generatedCode, { parser: "babel-ts", ...options });
  return formattedCode
}


function convertHtmlToJsx(htmlString: string): t.JSXElement {
  const reactElement = parseHtml(htmlString);
  console.log("Parsed HTML:", JSON.stringify(reactElement, null, 2));
  return convertReactElementToJsxElement(reactElement);
}

function convertReactElementToJsxElement(reactElement): t.JSXElement {
  console.log(typeof reactElement)
  if (typeof reactElement === 'string') {
    return t.jsxElement(
      t.jsxOpeningElement(t.jsxIdentifier('div'), [], false),
      t.jsxClosingElement(t.jsxIdentifier('div')),
      [t.jsxText(reactElement)],
      false
    );
  }

  // Remove children from props :: there is a better way to do this
  const propsWithoutChildren = { ...reactElement.props };
  delete propsWithoutChildren.children;

  const openingElement = t.jsxOpeningElement(
    t.jsxIdentifier(reactElement.type as string),
    reactElement.props ? convertPropsToJsxAttributes(propsWithoutChildren) : [],
    false
  );
  const closingElement = t.jsxClosingElement(t.jsxIdentifier(reactElement.type as string));
  const children = reactElement.props.children
    ? convertChildrenToJsxElements(reactElement.props.children)
    : [];

  return t.jsxElement(openingElement, closingElement, children, false);
}

function convertPropsToJsxAttributes(props: { [key: string]: any }): t.JSXAttribute[] {
  return Object.entries(props).map(([key, value]) => {
    if (key === 'className' || key === 'class') {
      key = 'className';
    } else if (key === 'style') {
      value = t.jsxExpressionContainer(t.objectExpression(
        Object.entries(value).map(([key, value]) => {
          return t.objectProperty(t.identifier(key), t.stringLiteral(value as string));
        })
      ));
    } else if (key.startsWith('on')) {
      value = t.jsxExpressionContainer(t.arrowFunctionExpression(
        [],
        t.blockStatement([
          t.expressionStatement(
            t.callExpression(
              t.memberExpression(
                t.memberExpression(
                  t.thisExpression(),
                  t.identifier('props')
                ),
                t.identifier(key)
              ),
              [t.identifier('event')]
            )
          )
        ])
      ));
    } else if (typeof value === 'object') {
      value = t.jsxExpressionContainer(t.objectExpression(
        Object.entries(value).map(([key, value]) => {
          return t.objectProperty(t.identifier(key), t.stringLiteral(value as string));
        })
      ));
    } else {
      value = t.stringLiteral(value as string);
    }
    console.log("Converted prop:", key, value);
    return t.jsxAttribute(t.jsxIdentifier(key), !t.isStringLiteral(value) && typeof value != 'object' ? t.stringLiteral(value as string) : value);
  });
}

function convertChildrenToJsxElements(children): t.JSXElement[] {
  if (!Array.isArray(children)) {
    children = [children];
  }
  return children.map(child => {
    if (typeof child === 'string') {
      return t.jsxText(child);
    } else if (React.isValidElement(child)) {
      return convertReactElementToJsxElement(child);
    } else {
      return t.jsxText('');
    }
  });
}

function convertHtmlToJsxElements(htmlString: string): t.JSXElement[] {
  const reactElements = parseHtml(htmlString);

  // Check if the parsed result is a single element or an array of elements
  if (Array.isArray(reactElements)) {
    return reactElements.map(element => convertReactElementToJsxElement(element));
  } else {
    return [convertReactElementToJsxElement(reactElements)];
  }
}