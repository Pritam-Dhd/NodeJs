const data=require('./Data');
const http = require('http');

const PORT = 4000;
const hostname = 'localhost';

http.createServer((req, res)=> {
    res.writeHead(200,{'Content-type':'application\json'});
    res.write(JSON.stringify(data))
    res.end()
})


.listen(PORT, hostname, ()=> {
    console.log(`Server is running on http://${hostname}:${PORT}`);
})