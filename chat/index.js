const express = require('express');
const app = express();
const http = require('http');
const server = http.createServer(app);
const { Server } = require("socket.io");
const io = new Server(server);
const port = process.env.PORT || 3000;

var path = require('path')
var users = [];
var uids = [];

app.use(express.static(path.join(__dirname, 'public')));

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html');
});

io.on('connection', (socket) => {

    socket.on('new user', username => {
        if(username)
        {
            console.log(`${username} joined`);
            var uid = Math.floor(Math.random()*90000) + 10000;
            while(uids.indexOf(uid)!=-1)
                uid = Math.floor(Math.random()*90000) + 10000;
            uids.push(uid);
            users.push({"username":username, "uid":uid});
            socket.username = username;
            socket.uid = uid;
            socket.emit('user uid', socket.uid);
            io.emit('active user count', uids.length);
            io.emit('active users', users);
        }
    });
    
    socket.on('chat message', msg => {
        if(socket.username)
            io.emit('chat message', msg, socket.username, socket.uid);
    });

    socket.on('typing status', typing_status => {
        if(socket.username)
        {
            if(typing_status == true)
                io.emit('set typing status', `${socket.username} is typing...`, socket.uid);
        }
    });

    socket.on('disconnect', () => {
        if(socket.username)
        {
            console.log(`${socket.username} left`);
            var index = uids.indexOf(socket.uid);
            uids.splice(index, 1);
            users.splice(index, 1);
            io.emit('active user count', uids.length);
            io.emit('active users', users);
        }
    });
});

server.listen(port, () => {
    console.log(`Socket.IO server is running at http://localhost:${port}/`);
});