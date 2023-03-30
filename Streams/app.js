const { createReadStream } = require("fs");
const stream = createReadStream("./files/big.txt");

// //reading large stream data in small manageable chunks.
stream.on("data", (result) => {
  console.log(result);
});

// //handeling error event
stream.on("error", (err) => {
  console.log(err);
});

//creating big txt file
// const { writeFileSync } = require("fs");
// for (let i = 0; i < 10000; i++) {
//   writeFileSync("./files/big.txt", `hello samyaksukhdeve ${i}\n`, {
//     flag: "a",
//   });
// }
