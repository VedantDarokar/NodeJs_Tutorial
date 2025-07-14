import http from 'http';

const server = http.createServer((req, res) => {
//     console.log(req.url)
//   res.end('<h1>Your server is running</h1>');
if (req.url === '/wdm') {
    res.end('<h1>Welcome to the Home Page</h1>');
  }
else if (req.url === '/srk') {
    res.end('<h1>Welcome to the About Page</h1>');
  }
else{
    res.end('<h1>404 Not Found</h1>');
}
});

const PORT = 1000;
server.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});  