
// command line arguments-----------------------------------------Yargs
// Command : node app.js Name --FirstName="Rakesh" --LastName="Nagapuri"
const yargs = require('yargs');
yargs.version('1.0.1');
// Command : node app.js add --title="Developer" --body="Develops app"
yargs.command({
    command : 'add',
    describe: 'Add a new note',
    builder : {
        title : {
            describe : 'Note Title',
            demandOption : true,
            type : 'string'
        },
        body :{
            describe : 'Note body',
            demandOption : true,
            type : 'string'
        }
    }, 
    handler : function(argv){
        console.log('Title : ',argv.title);
        console.log('Body : ',argv.body);
    }
});
yargs.command({
    command : 'remove',
    describe: 'Remove a new note',    
    handler : function(){
        console.log('Removing a new note')
    }
});
yargs.command({
    command : 'list',
    describe: 'List a new note',    
    handler : function(){
        console.log('Listing a new note')
    }
});

yargs.parse();


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