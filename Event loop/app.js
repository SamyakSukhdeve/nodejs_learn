//here is the example of event loop
//Event loop is an endless loop, which waits for tasks, executes them and then sleeps until it receives more tasks.
console.log("i am first");

setTimeout(() => {
  console.log("i am second");
}, 2000);

console.log("i am third");
