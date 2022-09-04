//create local server

const http = require("http");

http.createServer((req,res)=>{
    res.write("Create server in local system!");
    res.end();
}).listen(4500);