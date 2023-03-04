const os = require("os");

//info about current user
const user = os.userInfo();
console.log(user);

//info about system up-time
console.log(`system up-time is ${os.uptime()}`);

//OS type
const osType = {
  osName: os.type(),
  release: os.release(),
  totalMemory: os.totalmem(),
  freeMemory: os.freemem(),
};

console.log(osType);
