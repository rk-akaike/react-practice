import express from "express";
import { WebSocketServer } from "ws";

const app = express();
const port = 8080;

const server = app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});

const ws = new WebSocketServer({ server });

ws.on("connection", (socket) => {
  console.log("Client connected");
  socket.on("close", () => console.log("Client disconnected"));
  socket.on("message", (message) => {
    console.log("Received: " + message);
    let count = 0;
    const intervalId = setInterval(() => {
      if (count >= 5) {
        clearInterval(intervalId);
      } else {
        socket.send(`${message} Message number ${++count}`);
      }
    }, 2000);
  });
});
