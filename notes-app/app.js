
// command line arguments-----------------------------------------Yargs
// Command : node app.js Name --FirstName="Rakesh" --LastName="Nagapuri"
//const yargs = require('yargs');
//console.log(process.argv[2]);
//yargs.version('1.0.1');
//console.log(yargs.argv);

const myYargs = require('./custompackages/myYargs.js');

// chalk example (decorating text) -------------------------------Chalk
//const chalk = require('chalk');
//console.log(chalk.red.cyanBright('Success:'));

// validator example   -------------------------------------------Validator
//const validator =  require('validator');
//console.log(validator.isURL('https://www.google.com/'));

// Custom package ------------------------------------------------Custom package
//const getNotes = require('./notes.js');
//console.log(getNotes());

// Basic file operations------------------------------------------Basic file operations
// const fs = require('fs');
// fs.writeFileSync('notes.txt','This is Rakesh and this file is created using node.js');
// fs.appendFileSync('notes.txt','.This is the appended line using appendFileSync');