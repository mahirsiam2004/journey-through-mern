import React from "react";

export default function Counter() {
  return (
    <div className="p-4 h-auto flex flex-col items-center justify-center bg-white rounded-2xl shadow  ">
      <div className="flex space-x-3">
        <button className="btn">Increment</button>
        <button className="btn">Decrement</button>
      </div>
    </div>
  );
}
