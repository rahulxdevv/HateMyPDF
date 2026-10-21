const sharp = require('sharp');
const fs = require('fs');
const path = require('path');
const sizes = [480, 768, 1200, 1920];
const input = path.join(__dirname, '..', 'public', 'images', 'hero-bg.webp');
const outdir = path.join(__dirname, '..', 'public', 'images');

if (!fs.existsSync(input)) {
  console.error('Missing input file:', input);
  process.exit(1);
}

Promise.all(
  sizes.map((w) =>
    sharp(input)
      .resize({ width: w, fit: 'cover' })
      .webp({ quality: 80 })
      .toFile(path.join(outdir, `hero-bg-${w}.webp`))
  )
)
  .then(() => {
    console.log('Generated hero image variants:', sizes.join(', '));
  })
  .catch((err) => {
    console.error(err);
    process.exit(1);
  });
