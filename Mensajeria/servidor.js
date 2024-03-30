const express = require('express');
const http = require('http');
const app = express();
const server = http.createServer(app);

app.get('/',(req,res)=>{

var variable_raiz= __dirname+"\\"+"plantilla.html";
res.sendFile(variable_raiz);
})

server.listen(4000,()=>{console.log("SERVER LOADED")});
 
