// console.log('Welcome to Node Tutorial')
// const amount = 12;

// if (amount < 10) {
//     console.log("small number");
// } else {
//     console.log("large number");
// }
// console.log(`hey, its my first node app!!`);

///////////////////////////////
// npm - global command, comes with Node
// npm --version

// local dependency - use it only in this particular project
// npm i <packageName>

// global dependency - use it in any project
// npm install -g <packageName>
// sudo install -g <packageName> (mac)

// package.json - manifest file (stores important info about project/package)
// manual approach (create package.json in the root, create properties etc.)
// npm init (step by step, press enter to skip)
// npm init -y (everything default)

const _ = require('lodash');

const items = [1, [2, [3, [4]]]];
const newItems = _.flattenDeep(items);

console.log(newItems);