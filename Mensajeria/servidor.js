const express = require('express');
const http = require('http');
const app = express();
const server = http.createServer(app);
const {Server} = require('socket.io');
const io = new Server(server);


io.on('connection',(socket)=>{
    socket.on('chat',(msg)=>{
        console.log(msg)
    })})


app.get('/',(req,res)=>{

var variable_raiz= __dirname+"\\"+"plantilla_2.html";
res.sendFile(variable_raiz);
})

server.listen(4000,()=>{console.log("SERVER LOADING...")});
 
