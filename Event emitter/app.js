const EventEmitter = require("events");

const customEmitter = new EventEmitter();

//eventEmitter with arguments
customEmitter.on("response", (name) => {
  console.log(`hi my name is ${name}`);
});

customEmitter.emit("response", "samyak");
