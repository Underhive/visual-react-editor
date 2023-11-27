import { parse } from '@babel/parser';
import traverse from '@babel/traverse';
import generate from '@babel/generator';
import * as fs from 'fs';
import prettier from 'prettier';

export async function removeElement(
  filePath: string,
  lineNumber: number,
  columnNumber: number,
  mainLanguage: 'js' | 'ts'
): Promise<string> {
  const code = fs.readFileSync(filePath, 'utf8');
  const ast = parse(code, {
    sourceType: 'module',
    plugins: ['jsx', 'typescript']
  });

  let removed = false;

  traverse(ast, {
    JSXElement(path) {
      const { start } = path.node.loc;
      if (start.line === lineNumber && start.column === columnNumber - 1) {
        path.remove();
        removed = true;
      }
    }
  });

  if (!removed) {
    console.warn('No removal made. Target position might be incorrect.');
    return;
  }

  const generatedCode = generate(ast, { retainLines: true }).code;
  const options = await prettier.resolveConfig(filePath);
  const formattedCode = await prettier.format(generatedCode, { parser: mainLanguage === 'ts' ? "babel-ts" : "babel", ...options });
  return formattedCode
}
