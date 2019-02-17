const http = require("http");
const path = require("path");
const fs = require("fs");

const server = http.createServer((req, resp) => {
    if (req.url === '/') {
        fs.readFile(path.join(__dirname, "public", "index.html"), (err, content) => {
            if (err) throw err;
            resp.writeHead(200, {
                "Content-Type": "text/html"
            });
            resp.end(content);
        });      
    }
    if (req.url === '/about') {
        fs.readFile(path.join(__dirname, "public", "about.html"), (err, content) => {
            if (err) throw err;
            resp.writeHead(200, {
                "Content-Type": "text/html"
            });
            resp.end(content);
        });      
    }
    if (req.url === '/api/users') {
        const users = [
            {
                name: "John Doe",
                age: 39
            },
            {
                name: "Jane Doe",
                age: 23
            }
        ];
        resp.writeHead(200, {
            "Content-Type": "application/json"
        });
        resp.end(JSON.stringify(users));
    }
});

const PORT = process.env.PORT || 5000;

server.listen(PORT, () => console.log(`Server is running on port ${PORT}`));