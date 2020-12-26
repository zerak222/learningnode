const fs = require('fs');
const dataBuffer = fs.readFileSync('sampleJSON.json');
const user = JSON.parse(dataBuffer.toString());

user.name     ="Rakesh Nagapuri";
user.location ="Hyderabad";

const userJSON = JSON.stringify(user);
fs.writeFileSync('sampleJSON.json',userJSON);

