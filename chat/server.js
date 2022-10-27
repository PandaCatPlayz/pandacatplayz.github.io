const express = require('express');
const path = require('path');
const http=require('http'); 
const socketio=require('socket.io');
const app = express();
const PORT = 3000 || process.env.PORT;
const formatMessage=require('./utils/messages');
const { format } = require('path');
const  {userJoin,getCurrentUser, getRoomUsers, userLeave}=require('./utils/users');
const server=http.createServer(app);
const io=socketio(server);

app.use(express.static(path.join(__dirname,'public')));

const admin = 'admin';

// Run when a client connects
io.on('connection', (socket)=>{

    socket.on('joinRoom',({username,room})=>{

        //to join a room
        const user=userJoin(socket.id,username,room);
        socket.join(user.room);

        socket.emit('message', formatMessage(admin,'welcome to the chat'));

        socket.broadcast.to(user.room).emit('message', formatMessage(admin,`${user.username} has joined the chat!`));

        // Send users and room info
        io.to(user.room).emit('roomUsers',{
            room:user.room,
            users:getRoomUsers(user.room)
        });
    });



    // Listen for the chat message 
    socket.on('chatMessage', (msg)=>{
        const user=getCurrentUser(socket.id);
        io.to(user.room).emit('message',formatMessage(user.username,msg));
    });

    // User disconnects
    socket.on('disconnect',()=>{

        const user=userLeave(socket.id);

        if(user){
            io.to(user.room).emit('message', formatMessage(admin,`${user.username} has left the chat`));

            io.to(user.room).emit('roomUsers',{
                room:user.room,
                users:getRoomUsers(user.room)
            });
        }

        
    });


});

server.listen(PORT, () =>{
    console.log(`Server running on ${PORT}..`);
});