const fs = require('fs');
const chalk = require('chalk');
function getNotes(){
    return "Your notes...";
}
// node app.js add --title="t2" --body="b2"
const addNote = (title, body)=>{
    // load notes
    const notes = loadNotes();
    const duplicates = notes.filter((note)=> note.title===title);
    console.log(duplicates);
    const duplicate = notes.find((note)=> note.title===title);

    if(!duplicate){
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
// node app.js remove --title="t2"
const removeNote = (title)=>{
    const notes = loadNotes();
    const newNotes = notes.filter(fNote=>fNote.title!==title);
    if(notes.length>newNotes.length){        
        console.log(chalk.bgGreen('Removed a note'));
        saveNotes(newNotes);
    }else{
        console.log(chalk.bgRed('No note found'));
    }
    
}
// node app.js list
const listNotes =  ()=>{
    const notes = loadNotes();
    console.log(chalk.inverse("Your notes : "));
    notes.forEach(note => {
        console.log(note.title);
    });
}

// node app.js read --title="t2"
const readNote =  (title)=>{
    const notes = loadNotes();
    const expectedNote = notes.find((note)=> note.title===title);
    if(expectedNote){
        console.log(chalk.inverse(expectedNote.title)+" "+expectedNote.body);
    }else{
        console.log(chalk.red("Note with given title not found"));
    }
}

const saveNotes = (notes)=>{
    fs.writeFileSync('notes.json',JSON.stringify(notes));
}
const loadNotes = ()=>{
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
    list : listNotes,
    readNote : readNote
}