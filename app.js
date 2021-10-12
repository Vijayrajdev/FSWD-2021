const fs = require("fs");

// fs.readFile("./test.txt", "UTF-8", (error, data) => {
//   if (error) console.log(error);
//   else console.log(data);
// });

// console.log(fs.readFileSync("./test.txt", "UTF-8"));

// console.log("Random log");

fs.appendFile('./test.txt', 'I\'m another new para...', (error) => {
    if (error) console.log(error);
})