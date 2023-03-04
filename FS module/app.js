const { readFileSync, writeFileSync, readFile, writeFile } = require("fs");

//sync approch
//reading the content of files
const first = readFileSync("./files/first.txt", "utf8");
const second = readFileSync("./files/second.txt", "utf8");

console.log(first, second);

//writing or creating files
writeFileSync(
  "./files/created-file.txt",
  `here is the content ${first} ${second}`
);

//async approch
readFile("./files/first.txt", "utf8", (err, result) => {
  if (err) {
    console.log(err);
    return;
  }
  const first = result;
  readFile("./files/second.txt", "utf8", (err, result) => {
    if (err) {
      console.log(err);
      return;
    }
    const second = result;
    writeFile(
      "./files/created-file-async.txt",
      `here is the content: ${first} ${second}`,
      (err, result) => {
        if (err) {
          console.log(err);
          return;
        }
        console.log(result);
      }
    );
  });
});
