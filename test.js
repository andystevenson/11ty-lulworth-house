const fs = require('fs');
const util = require('util');

async function ls(path) {
  const files = [];
  const dir = await fs.promises.opendir(path);
  for await (const dirent of dir) {
    if (dirent.isDirectory()) {
      files.push(...await ls(`${path}${dirent.name}/`));
    } else {
      files.push(`${path}${dirent.name}`);
      // console.log('push', { t });
    }
  }
  return files;
}
ls('./src/images/')
  .then((files) => console.log(util.inspect({ files }, true, null)))
  .catch(console.error);