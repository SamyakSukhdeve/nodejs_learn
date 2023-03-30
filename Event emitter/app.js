const EventEmitter = require("events");

const customEmitter = new EventEmitter();

//eventEmitter with arguments
//listening an event 
customEmitter.on("response", (name) => {
  console.log(`hi my name is ${name}`);
});


//publishing an event
customEmitter.emit("response", "samyak");
