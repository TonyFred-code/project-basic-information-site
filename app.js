import express from 'express';
import { readFile } from 'fs';
import { join, dirname } from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const contentType = 'text/html';

const app = express();

app.get('/', (req, res) => {
  readFile(join(__dirname, 'public', 'index.html'), (err, data) => {
    if (err) {
      res.statusCode = 500;
      res.end('Server Error');
    } else {
      res.writeHead(res.statusCode, { 'Content-Type': contentType });
      res.end(data);
    }
  });
});

app.get('/about', (req, res) => {
  readFile(join(__dirname, 'public', 'about.html'), (err, data) => {
    if (err) {
      res.statusCode = 500;
      res.end('Server Error');
    } else {
      res.writeHead(res.statusCode, { 'Content-Type': contentType });
      res.end(data);
    }
  });
});

app.get('/contact-me', (req, res) => {
  readFile(join(__dirname, 'public', 'contact-me.html'), (err, data) => {
    if (err) {
      res.statusCode = 500;
      res.end('Server Error');
    } else {
      res.writeHead(res.statusCode, { 'Content-Type': contentType });
      res.end(data);
    }
  });
});

app.get('*', (req, res) => {
  readFile(join(__dirname, 'public', '404.html'), (err, data) => {
    if (err) {
      res.statusCode = 500;
      res.end('Server Error');
    } else {
      res.writeHead(400, { 'Content-Type': contentType });
      res.end(data);
    }
  });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`My first Express app - listening on port ${PORT}!`);
});
