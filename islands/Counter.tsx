import { useState } from "preact/hooks";

export default function Counter() {
  const [count, setCount] = useState<number>(0);

  return (
    <div>
      Counter is at {count}.{" "}
      <button onClick={() => setCount(count + 1)}>+</button>
    </div>
  );
}
