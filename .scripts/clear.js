const fs = require('fs');
const path = './node_modules';

fs.rm(path, { recursive: true, force: true }, (err) => {
  if (err) {
    console.error(`Error deleting ${path}:`, err);
  } else {
    console.log(`${path} and its contents deleted successfully.`);
  }
});
