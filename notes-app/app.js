const fs = require('fs');
fs.writeFileSync('notes.txt','This is Rakesh and this file is created using node.js');
fs.appendFileSync('notes.txt','.This is the appended line using appendFileSync');