import express from "express";
import https from "https";
import fs from "fs";
import {Server} from "socket.io";

import cors from "cors";
import path from "path";
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

//initialize express and socket.io and apply cors middleware
const app = express();
app.use(cors());

//initialize https server
const server = https.createServer({
  key: fs.readFileSync('key.pem'),
  cert: fs.readFileSync('cert.pem')
},app);

//set port
const PORT = 3000;

//initialize socket.io
const io = new Server(server, {
  cors: {
    origin: "http://localhost:5173",
    methods: ["GET", "POST"],
  },
});

//serve static files
app.use(express.static(path.join(__dirname, '../client/build')));

let users =[];

//handle socket.io connections
io.on("connection", (socket) => {
  let Username = "Anonymous";

  socket.on("register_name", (username) => {
    const user = {
      username,
      id: socket.id,
    }
    users.push(user);
    io.emit("new_user", users);
  });

  socket.on("join_room", (roomName, cb) => {
    socket.join(roomName);
    cb(messages[roomName]);
  });

  console.log(`Client Connected: ${socket.id}`);

  socket.on("send_message", (data) => {
    console.log(data);
    socket.broadcast.emit("receive_message", data);
  });

  socket.on('disconnect', () => {
    console.log(`Client Disconnected: ${socket.id}`);
  })
})

//handle routes
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '../client/dist/index.html'));
});

//start server
server.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
}) 