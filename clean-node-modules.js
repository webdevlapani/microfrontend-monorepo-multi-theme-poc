const fs = require('fs');
const path = require('path');

function removeNodeModules(dir) {
  fs.readdirSync(dir).forEach(file => {
    const filePath = path.join(dir, file);
    if (fs.statSync(filePath).isDirectory()) {
      if (file === 'node_modules') {
        console.log(`Removing node_modules in ${filePath}`);
        fs.rmdirSync(filePath, { recursive: true });
      } else {
        removeNodeModules(filePath);
      }
    }
  });
}

const projectDir = process.cwd();
removeNodeModules(projectDir);
