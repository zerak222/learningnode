const fs = require('fs');
const chalk = require('chalk');
function getNotes(){
    return "Your notes...";
}

const addNote = function addNote(title, body){
    // load notes
    const notes = loadNotes();
    const duplicates = notes.filter(function(note){
        return note.title===title;
    });   
    if(duplicates.length===0){
        notes.push({
            title: title,
            body: body
        });
        console.log("new note added")
    }else{
        console.log("Title already in use")
    }
    saveNotes(notes);    
}

const removeNote = function removeNote(title){
    const notes = loadNotes();
    const newNotes = notes.filter(fNote=>fNote.title!==title);
    if(notes.length>newNotes.length){        
        console.log(chalk.bgGreen('Removed a note'));
        saveNotes(newNotes);
    }else{
        console.log(chalk.bgRed('No note found'));
    }
    
}

const listNotes = function listNotes(){
    const notes = loadNotes();
    console.log(notes);
}

const saveNotes = function(notes){
    fs.writeFileSync('notes.json',JSON.stringify(notes));
}
const loadNotes = function(){
    try{
        const dataBuffer = fs.readFileSync('notes.json');
        const dataJSON = dataBuffer.toString();
        return JSON.parse(dataJSON);
    }catch(e){
        return [];
    }
}
module.exports = {
    getNotes : getNotes,
    addNote : addNote,
    remove  : removeNote,
    list : listNotes
}