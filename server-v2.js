const http = require("http");
const path = require("path");
const fs = require("fs");

const server = http.createServer((req, resp) => {
    const filePath = path.join(__dirname, "public", req.url === "/" ? "index.html" : req.url)

    // Extension of the path
    const extension = path.extname(filePath);
    // Content type
    let contentType = "text/html";
    switch (extension) {
        case ".js":
            contentType = "text/javascript";
            break;
        case ".css":
            contentType = "text/css";
            break;
        case ".json":
            contentType = "application/json";
            break;
        case ".png":
            contentType = "image/png";
            break;
        case ".jpg":
            contentType = "image/jpg";
            break;
    }

    // Read file
    fs.readFile(filePath, (err, content) => {
        if (err) {
            if (err.code === "ENOENT") {
                // Page not found
                fs.readFile(path.join(__dirname, "public", "404.html"), (err, content) => {
                    resp.writeHead(404, { "Content-Type": "text/html" });
                    resp.end(content, "utf8");
                });
            } else {
                // Some server error
                resp.writeHead(500);
                resp.end(`Server Error: ${err.code}`);
            }
        } else {
            // Success
            resp.writeHead(200, {
                "Content-Type": contentType
            });
            resp.end(content, "utf8");
        }
    });
});

const PORT = process.env.PORT || 5000;

server.listen(PORT, () => console.log(`Server is running on port ${PORT}`));