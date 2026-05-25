"use client";
import { useState } from "react";

interface CounterProps {
  initialCount?: number;
}

export default function Counter({ initialCount = 0 }: CounterProps) {
  const [count, setCount] = useState(initialCount);
  return (
    <div className="counter">
      <p className="counter-value">Count: {count}</p>
      <button className="counter-button" onClick={() => setCount(count + 1)}>
        Increment
      </button>
    </div>
  );
}
