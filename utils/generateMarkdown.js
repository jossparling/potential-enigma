// TODO: Create a function that returns a license badge based on which license is passed in
import fs from 'fs';

const writeFile = fileContent => {
  return new Promise((resolve, reject) => {
    fs.writeFile('./dist/index.html', fileContent, err => {
      if (err) {
        reject(err);
        return;
      }
      resolve({
        ok: true,
        message: 'File created!'
      });
    });
  });
};

// TODO: Create a function to generate markdown for README
const copyFile = fileContent => {
  return new Promise((resolve, reject) => {
    fs.copyFile('./index.js', fileContent, err => {
      if (err) {
        reject(err);
        return;
      }
      resolve({
        ok: true,
        message: 'File copied!'
      });
    });
  });
};

export default { writeFile, copyFile };
