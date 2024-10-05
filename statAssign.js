const fs = require('fs');

const filePath = 'output.txt';
fs.stat(filePath, (err, stats) => {
    if (err) {
        console.error(err);
        return;
    }
    // Access the properties of the stats object 
    console.log('File size:', stats.size+ 'bytes');
    console.log('Is a file:', stats.isFile());
    console.log('Is a directory:', stats.isDirectory());
    console.log('File birthtime (creation time):', stats.birthtime);
    console.log('File modification time:', stats.mtime);
    
});

