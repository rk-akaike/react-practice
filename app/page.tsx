"use client";

const Home = () => {
  let socket: WebSocket | null = null;

  const connectToSocket = async () => {
    socket = new WebSocket("ws://localhost:8080");

    socket.onopen = () => {
      console.log("Connected to WebSocket server");
    };
    socket.onmessage = (event) => {
      console.log("Received:", event.data);
    };
    socket.onclose = () => {
      console.log("Disconnected from WebSocket server");
    };
  };

  const sendData = () => {
    const data = { name: "rk", age: 24 };
    socket?.send(JSON.stringify(data));
  };

  return (
    <div>
      <div>
        <button className="bg-green-600 mr-4" onClick={connectToSocket}>
          Connect to Socket
        </button>
        <button className="bg-red-600" onClick={() => socket?.close()}>
          Close Connection
        </button>
      </div>
      <button onClick={sendData}>Send Data</button>
    </div>
  );
};

export default Home;
