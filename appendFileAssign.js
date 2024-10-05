const fs = require('fs');

// Define the file path where you want to write the data.
 // Replace 'output.txt' with the path of your choice.
 // For example: const filePath = '/path/to/your/output.txt';
 // Note: Ensure that the directory path exists before writing to the file.
 // Also, make sure you have write permissions for the directory.
 // If the directory path does not exist, you will need to create it first.
 // Example: fs.mkdirSync('/path/to/your', { recursive: true });
 // You can also use fs.promises.mkdir() for creating directories.
 // fs.promises.appendFile() is used for appending data to a file.
 // fs.promises.writeFile() is used for overwriting data to a file.
 // fs.promises.readFile() is used for reading data from a file.
 // fs.promises.stat() is used for getting file stats.
 // fs.promises.rename() is used for renaming a file.
 // fs.promises.rmdir() is used for deleting a

 const filePath = "output.txt";
const dataToAppend = '\n This data will be append to the file.' 
// Append data to the file asynchronously. 
fs.appendFile(filePath, dataToAppend, (err) => {
    if (err) {
        console.error(err);
        return;
    }
    console.log('Data has been append to the file.');
});


