// const fs = require('fs');
// //fs --> File System
// console.log('=========== readFile() ===========');

// fs.readFile('./sample-file.txt', 'utf8', (error, data)=>{
//     console.log('Reading the contents from the File: sample-file.txt');
//     console.log("====================================");
    
//     if (error) {
//         console.log(error);
//         return;
//     }
//     console.log(data); 
// })

// nodemon start module-fs.js


const fs = require('fs'); // File System module
console.log('=========== readFileSync() ===========');
console.log("============== START ===================");

try {
    // Synchronously reading the file and storing the contents in 'data'
    const data = fs.readFileSync('./sample-file.txt', 'utf8');
    console.log('Reading the contents from the File: sample-file.txt');
    console.log("====================================");
    console.log(data);
} catch (error) {
    console.log('Error:', error);
}

console.log("============== END ===================");
// nodemon start module-fs.js


