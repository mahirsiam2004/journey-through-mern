import { useState } from "react";

export default function Count() {
  const [count, setCount] = useState(0);

  const handleAdd = () => {
    const newCount = count + 1;
    setCount(newCount);
  };

  return (
    <>
      <div className="btn">
        <h3>count: {count} </h3>
        <button onClick={handleAdd}>add</button>
      </div>
    </>
  );
}

