const http = require('http');
const express = require('express');
const cors = require('cors');
const socketIo = require('socket.io');
const cron = require("node-cron");

const rootRouter = require("./Routes/index");
const checkWeatherAndNotify = require("./notification");

const app = express();
const server = http.createServer(app);
const io = socketIo(server, {
  cors: {
    origin: 'http://localhost:5173', // Replace with your frontend's URL
    methods: ['GET', 'POST']
  }
});

app.use(cors());
app.use(express.json());
app.use("/api/v1", rootRouter);

// Cron job to check weather and notify every minute
cron.schedule('* * * * *', async () => {
  await checkWeatherAndNotify();
  console.log("Weather check completed");
});

// Socket.io connection handling
io.on('connection', (socket) => {
  console.log('A user connected');
  // Your socket.io event handlers
});

// Start the server on port 5000
server.listen(5000, () => {
  console.log('Server is running on port 5000');
});
