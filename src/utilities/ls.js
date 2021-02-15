const fs = require('fs');

async function ls(path) {
  const files = [];
  const dir = await fs.promises.opendir(path);
  for await (const dirent of dir) {
    if (dirent.isDirectory()) {
      files.push(...await ls(`${path}${dirent.name}/`));
    } else {
      files.push(`${path}${dirent.name}`);
    }
  }
  return files;
}

module.exports = ls;