const fs = require("fs");
const path = require("path");
const del = require("del");

// Check whether a folder exists
if (fs.existsSync(path.join(__dirname, "test"))) {
    // Delete a folder
    // fs.rmdir(path.join(__dirname, "test"), err => {
    //     if (err) throw err;
    //     console.log("Folder deleted");
    // });
    del.sync(["reference/test/**"]);
}

// Create a folder
fs.mkdir(path.join(__dirname, "test"), {}, err => {
    if (err) throw err;
    console.log("Folder created");
});

// Create and write to file
fs.writeFile(path.join(__dirname, "test", "hello.txt"), "Hello World\n", err => {
    if (err) throw err;
    console.log("Folder written to...");

    fs.appendFile(path.join(__dirname, "test", "hello.txt"), "I am learning Node.js", err => {
        if (err) throw err;
        console.log("Folder written to...");
    })
});

// Read file
fs.readFile(path.join(__dirname, "test", "hello.txt"), "utf8", (err, data) => {
    if (err) throw err;
    console.log(data);
});

// Rename a file
fs.rename(path.join(__dirname, "test", "hello.txt"), path.join(__dirname, "test", "helloworld.txt"),  (err) => {
    if (err) throw err;
    console.log("File renamed");
});