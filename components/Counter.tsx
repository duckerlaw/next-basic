"use client";
import { useState } from "react";

const Counter = () => {    
  const [count, setCount] = useState(0);
  return (
    <div className="text-7xl">
      <button className="cursor-pointer" onClick={() => setCount(count - 1)}>
        -
      </button>
      {count}
      <button className="cursor-pointer" onClick={() => setCount(count + 1)}>
        +
      </button>
    </div>
  );
};
export default Counter;
