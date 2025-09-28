"use client";

import { useState } from "react";

export default function GPTCounter() {
  const [count, setCount] = useState(0);
  const [action, setAction] = useState("");

  const incrementer = () => {
    setCount((prev) => prev + 1);
    setAction("Incremented");
  };

  const decrementer = () => {
    setCount((prev) => {
      if (prev === 0) return prev;
      setAction("Decremented");
      return prev - 1;
    });
  };

  const reset = () => {
    setCount(0);
    setAction("Reset");
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-br from-gray-100 to-gray-300 px-4">
      <h1 className="text-4xl font-bold text-gray-800 mb-8">
        Day 1: Next.js Counter App
      </h1>

      <div className="bg-white shadow-lg rounded-xl p-8 w-full max-w-md flex flex-col items-center gap-6">
        {/* Counter display */}
        <h2 className="text-2xl font-semibold text-gray-700 flex items-center gap-2">
          Current Counter:
          <span className="bg-yellow-300 px-5 py-1 rounded-lg font-mono text-gray-900">
            {count}
          </span>
        </h2>

        {/* Last action display */}
        {action && (
          <div className="w-full bg-gray-100 py-3 px-4 rounded-md text-center">
            <span className="text-lg font-medium text-gray-600">Last action:</span>{" "}
            <span
              className={`px-4 py-1 rounded-md font-semibold ${
                action === "Incremented"
                  ? "bg-green-300 text-green-900"
                  : action === "Decremented"
                  ? "bg-red-500 text-white"
                  : "bg-gray-400 text-white"
              }`}
            >
              {action}
            </span>
          </div>
        )}

        {/* Buttons */}
        <div className="flex gap-4">
          <button
            onClick={incrementer}
            className="px-5 py-2 bg-blue-500 text-white font-medium rounded-md hover:bg-blue-700 transition"
          >
            Increment
          </button>
          <button
            onClick={decrementer}
            className="px-5 py-2 bg-red-500 text-white font-medium rounded-md hover:bg-red-700 transition disabled:opacity-50"
            disabled={count === 0}
          >
            Decrement
          </button>
          <button
            onClick={reset}
            className="px-5 py-2 bg-gray-600 text-white font-medium rounded-md hover:bg-gray-800 transition"
          >
            Reset
          </button>
        </div>
      </div>
    </div>
  );
}
