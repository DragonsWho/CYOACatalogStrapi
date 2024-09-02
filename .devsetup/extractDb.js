const fs = require('fs');
const path = require('path');
const zlib = require('zlib');
const tar = require('tar');
 
const archivePath = path.join(__dirname, 'testdb.tar.gz');
const extractPath = path.join(__dirname, '..');

function extractDatabase() {
  console.log('Extracting test database...');

  const readStream = fs.createReadStream(archivePath);
  const gunzip = zlib.createGunzip();
  const extractor = tar.extract({ cwd: extractPath });

  readStream
    .pipe(gunzip)
    .pipe(extractor)
    .on('finish', () => {
      console.log('Test database extracted successfully.');
    })
    .on('error', (err) => {
      console.error('Extraction failed:', err);
    });
}

extractDatabase();