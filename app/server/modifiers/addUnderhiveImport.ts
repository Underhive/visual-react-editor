import * as fs from 'fs';
import { parse } from '@babel/parser';
import traverse from '@babel/traverse';
import * as path from 'path';
import ignore from 'ignore';

function readFilesRecursively(dir: string, filelist: string[] = []): string[] {
  const files = fs.readdirSync(dir, { withFileTypes: true });
  files.forEach((file) => {
    if (file.isDirectory()) {
      filelist = readFilesRecursively(path.join(dir, file.name), filelist);
    } else {
      filelist.push(path.join(dir, file.name));
    }
  });
  return filelist;
}

function detectMainLanguage(projectPath: string): 'js' | 'ts' {
  console.log(`Detecting main language in ${projectPath}`);
  const gitignorePath = path.join(projectPath, '.gitignore');
  const ig = ignore();
  ig.add(['node_modules']); // Default ignore

  if (fs.existsSync(gitignorePath)) {
    const gitignore = fs.readFileSync(gitignorePath, 'utf8');
    ig.add(gitignore);
  }

  const allFiles = readFilesRecursively(projectPath);
  const relevantFiles = allFiles.filter(file => 
    (file.endsWith('.js') || file.endsWith('.ts') || file.endsWith('.jsx') || file.endsWith('.tsx')) &&
    !ig.ignores(path.relative(projectPath, file))
  );

  const fileExtensions = relevantFiles.map(file => file.split('.').pop()!);
  const tsFilesCount = fileExtensions.filter(ext => ext === 'ts' || ext === 'tsx').length;
  return tsFilesCount > fileExtensions.length / 2 ? 'ts' : 'js';
}

function findEntrypoint(projectPath, mainLanguage) {
  console.log(`Finding entrypoint in ${projectPath}`);
  const packageJsonPath = `${projectPath}/package.json`;
  if (!fs.existsSync(packageJsonPath)) {
    throw new Error('package.json not found');
  }

  const entryPoints = {
    js: ['src/index.js', 'src/index.jsx', 'src/main.js', 'src/main.jsx', 'app/index.js', 'app/index.jsx'],
    ts: ['src/index.ts', 'src/index.tsx', 'src/main.js', 'src/main.jsx', 'app/index.ts', 'app/index.tsx']
  }

  let entrypoint
  for (const candidate of entryPoints[mainLanguage]) {
    if (fs.existsSync(`${projectPath}/${candidate}`)) {
      entrypoint = candidate;
      break;
    }
  }

  return entrypoint;
}

export function addImportToEntrypoint(projectPath, importStatement) {
  const mainLanguage = detectMainLanguage(projectPath);
  console.log(`Detected main language: ${mainLanguage}`);
  const entrypoint = findEntrypoint(projectPath, mainLanguage);
  console.log(`Entrypoint: ./${entrypoint}`);
  const entrypointPath = `${projectPath}/${entrypoint}`;

  if (!fs.existsSync(entrypointPath)) {
    throw new Error('Entrypoint file not found');
  }

  console.log(`Adding import: ${importStatement}`);
  let code = fs.readFileSync(entrypointPath, 'utf8');
  const ast = parse(code, {
    sourceType: 'module',
    plugins: mainLanguage === 'ts' ? ['typescript', 'jsx'] : ['jsx']
  });

  let firstImportLastLine = 0;
  traverse(ast, {
    ImportDeclaration(path) {
      firstImportLastLine = path.node.loc.end.line;
    }
  });

  const lines = code.split('\n');
  lines.splice(firstImportLastLine, 0, importStatement);
  fs.writeFileSync(entrypointPath, lines.join('\n'));

  return {
    language: mainLanguage,
    entrypoint
  };
}
