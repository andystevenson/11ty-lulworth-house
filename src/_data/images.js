const ls = require('../utilities/ls');

async function images() {
  return await ls('./src/images/');
}

module.exports = images;