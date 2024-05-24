const http=require("http");//to connect http tp expres
const express= require('express');
const path=require('path');
const{Server}=require ("socket.io");
const app = express();
const server=http.createServer(app);
const io=new Server(server);
//socket.io
//socket is a user
//frontend se connect krne k liyea
io.on('connection',(socket)=>{
//console.log('A new user has connected',socket.id);
socket.on('user-message',(message)=>{
    console.log("A new User Message:",message);
    //jitne b connection h sabko emit krna h 
    io.emit("message",message);
});
});



// all http request will be handled by express:
app.use(express.static(path.resolve('./public')));
app.get('/',(req,resp)=>{
    return resp.sendFile("/public/index.html")
})
server.listen(9000,()=>console.log(`server started at port: 9000`));
