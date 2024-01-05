import * as fs from 'fs';
import * as path from 'path';

export function modifyStartScript(projectPath: string, ucliCommand = 'ucli server') {
  const packageJsonPath = path.join(projectPath, 'package.json');

  if (!fs.existsSync(packageJsonPath)) {
    throw new Error('package.json not found');
  }

  const packageJson = JSON.parse(fs.readFileSync(packageJsonPath, 'utf8'));

  const existingStartScript = packageJson.scripts && packageJson.scripts.start ? packageJson.scripts.start : '';

  // Modify the start script to run ucli server in the background
  if (!existingStartScript.includes(ucliCommand)) {
    packageJson.scripts = packageJson.scripts || {};
    packageJson.scripts.start = `concurrently --kill-others "${ucliCommand}" "${existingStartScript}"`;
  }

  fs.writeFileSync(packageJsonPath, JSON.stringify(packageJson, null, 2));
}
