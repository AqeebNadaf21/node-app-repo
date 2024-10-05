const fs = require('fs');
const filePath = 'sample-file.txt';
// Delete the file asynchronously 
fs.unlink(filePath, (err) => {
    if (err) {
        console.error(err);
        return;
    }
    console.log(('File has been deleted.')); 
});


// const fs = require('fs');
// const filePath = 'C:/ANGULAR/Repository/node-app-repo/sample.txt';

// // Check if the file exists before attempting to delete it
// fs.stat(filePath, (err, stats) => {
//     if (err) {
//         console.error('File does not exist:', err);
//         return;
//     }

//     // Delete the file asynchronously
//     fs.unlink(filePath, (err) => {
//         if (err) {
//             console.error(err);
//             return;
//         }
//         console.log('File has been deleted.');
//     });
// });



// nodemon start fsUnlinkAssign.js