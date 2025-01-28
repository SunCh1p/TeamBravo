import express from 'express';
import { createServer } from 'node:http';
import { Server } from 'socket.io';

const port = 3000
const app = express();
const server = createServer(app);
const io = new Server(server);

app.use(express.static('public'));

app.get('/', (req, res) => {
    res.sendFile('index.html');
})

io.on('connection', (socket) => {
    console.log('a user connected');
    socket.on('chat message', (msg) => {
        io.emit('chat message', msg);
        console.log('message: ' + msg);
    })
})

server.listen(port, '0.0.0.0', () => {
    console.log('server running at http://localhost:3000');
})