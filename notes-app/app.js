const yargs = require('yargs');
const notes = require('./notes.js');
yargs.command({
    command : 'add',
    describe : "adding a new note",
    builder : {
        title : {
            describe : 'Note Title',
            demandOption : true,
            type : 'string'
        },
        body  :{
            describe : 'Note body',
            demandOption : true,
            type : 'string'
        } 
    },
    handler : function(argv){
            notes.addNote(argv.title,argv.body);
        
    }
});
yargs.command({
    command : 'remove',
    describe: 'Remove a new note', 
    builder:{
        title:{
            describe : 'Note Title',
            demandOption : true,
            type : 'string'
        },
    },   
    handler : function(argv){
        notes.remove(argv.title);
    }
});

yargs.parse();