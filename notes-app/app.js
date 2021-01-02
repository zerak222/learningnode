const yargs = require('yargs');
const notes = require('./notes.js');
yargs.command({
    // node app.js add --title="t4" --body="abc"
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
    // node app.js remove --title="t3"
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
yargs.command({
    // node app.js list
    command : 'list',
    describe: 'List the notes',    
    handler : function(){
        notes.list();
    }
});

yargs.parse();