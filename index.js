const http = require('http');
const fs = require('fs');
const path = require('path');

const server = http.createServer((req, res) => {
    // ১. হোমপেজ লোড
    if (req.url === '/') {
        fs.readFile(path.join(__dirname, 'index.html'), (err, data) => {
            res.writeHead(200, {'Content-Type': 'text/html'});
            res.end(data);
        });
    } 
    // ২. ইমেজ লোড
    else if (req.url === '/images/hero-bg.jpg') {
        fs.readFile(path.join(__dirname, 'images', 'hero-bg.jpg'), (err, data) => {
            if (err) {
                res.writeHead(404);
                res.end();
            } else {
                res.writeHead(200, {'Content-Type': 'image/jpeg'});
                res.end(data);
            }
        });
    } 
    // ৩. ভুল URL হলে
    else {
        res.writeHead(404);
        res.end('Not Found');
    }
});

server.listen(3000, () => {
    console.log('Server is running at http://localhost:3000');
});