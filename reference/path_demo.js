const path = require("path");

// Base file name
console.log("Basename:", path.basename(__filename))

// Directory name
console.log("Directory name:", path.dirname(__filename))

// File extension
console.log("Extension:", path.extname(__filename))

// Create path object
console.log(path.parse(__filename))

// Concatenate
console.log(path.join(__dirname, "test", 'hello.html'))