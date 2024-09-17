const os = require('os');

console.log('My first app');
console.log(`File Name: ${__filename}`);
console.log(`Directory Name: ${__dirname}`);

console.log("=============== Built in Module - OS =======================");
console.log(`Arch: ${os.arch()}`);

