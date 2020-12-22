
const chalk = require('chalk');
console.log(chalk.red.cyanBright('Success:'));

// validator example
//const validator =  require('validator');
//console.log(validator.isURL('https://www.google.com/'));

const getNotes = require('./notes.js');
console.log(getNotes());


// const fs = require('fs');
// fs.writeFileSync('notes.txt','This is Rakesh and this file is created using node.js');
// fs.appendFileSync('notes.txt','.This is the appended line using appendFileSync');