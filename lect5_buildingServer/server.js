import http from 'http'

const server = http.createServer((req,res)=>{
     res.end("your server is running");
});

const port = 1000;
server.listen(port, () => console.log(`Server is running on port ${port}`))