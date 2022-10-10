const ls = require('../utilities/ls')

async function images() {
  const imgs = await ls('./public/images/')
  return imgs.map((img) => img.replace('./public', ''))
}

module.exports = images
