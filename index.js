const os = require('os');

console.log('My first app');
console.log(`Global: ${global}`);
console.log(`Console: ${console}`);
console.log(`Process: {process}`);
console.log(`File Name: ${__filename}`);
console.log(`Directory Name: ${__dirname}`);
console.log(`Module: ${module}`);



console.log("=============== Built in Module - OS =======================");
console.log(`Arch: ${os.arch()}`);
console.log(`Cpus: ${os.cpus()}`);
console.log(`Freemem: ${os.freemem()}`);
console.log(`Totalmem: ${os.totalmem()}`);
console.log(`Hostname: ${os.hostname()}`);
console.log(`Platform: ${os.platform()}`);
console.log(`Release: ${os.release()}`);
console.log(`Type: ${os.type()}`);
console.log(`Uptime: ${os.uptime()}`);
console.log(`UserInfo: ${os.userInfo()}`);

