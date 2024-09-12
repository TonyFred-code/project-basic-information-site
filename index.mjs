import { createServer } from 'http';
import { readFile } from 'fs';
import { join, dirname } from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const server = createServer((req, res) => {
  let filePath = '';
  let contentType = 'text/html';

  // Determine which file to serve based on the URL
  switch (req.url) {
    case '/':
      filePath = 'index.html';
      break;
    case '/about':
      filePath = 'about.html';
      break;
    case '/contact-me':
      filePath = 'contact-me.html';
      break;
    default:
      filePath = '404.html';
      res.statusCode = 404;
      break;
  }

  // Resolve the full path
  const fullPath = join(__dirname, filePath);

  // Read and serve the file content
  readFile(fullPath, (err, data) => {
    if (err) {
      res.statusCode = 500;
      res.end('Server Error');
    } else {
      res.writeHead(res.statusCode, { 'Content-Type': contentType });
      res.end(data);
    }
  });
});

const PORT = 8080;
server.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}/`);
});
