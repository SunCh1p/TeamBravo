import express from 'express';
import { createServer } from 'node:http';
import { Server } from 'socket.io';
import bodyParser from "body-parser";


const port = 3000
const app = express();
const server = createServer(app);
const io = new Server(server);

let users = 0;

app.set('view engine', 'ejs');

app.use(express.static('public'));
app.use(bodyParser.urlencoded({ extended: true }));


app.get('/', (req, res) => {
    res.render("index.ejs", {num: users});
})

io.on('connection', (socket) => {
    users++;
    console.log('a user connected', users);
    //broadcast usercount to all clients
    io.emit('user count', users);
    socket.on('chat message', (msg) => {
        io.emit('chat message', msg);
        console.log('message: ' + msg);
    })
    socket.on('disconnect', () => {
        console.log('a user disconnected', users)
        users--;
        io.emit('user count', users);
    })
})


server.listen(port, '0.0.0.0', () => {
    console.log(`server running at port ${port}`);
})