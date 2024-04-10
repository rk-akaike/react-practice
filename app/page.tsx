"use client";

import { useState } from "react";

const Home = () => {
  const [count, setCount] = useState(0);

  const increment = () => {
    setCount(count + 1);
  };

  const decrement = async () => {
    const response = await fetch("/api/decrement");
    if (!response.ok) {
      throw new Error("API request failed");
    }
    setCount(count - 1);
  };

  return (
    <div>
      Home
      <div>Count: {count}</div>
      <button onClick={increment}>Increment</button>
      <button onClick={decrement}>Decrement</button>
    </div>
  );
};

export default Home;
