// command line arguments-----------------------------------------Yargs
// Command : node app.js Name --FirstName="Rakesh" --LastName="Nagapuri"
const myYargs = require('yargs');
console.log(process.argv[2]);
console.log(myYargs.argv);

module.exports = myYargs;