'use client'
import { useState } from "react";

export default function CounterAction() {
  const [count, setCount] = useState(0);
  const [action, setAction] = useState("");
  const incrementer = () => {
  setCount(prev => prev + 1);
  setAction("Incremented");
}
const decrementer = () => {
  setCount(prev=> prev- 1);
  setAction("Decremented"); 
}

  return (
    <div className="container text-center h-full flex 
    flex-col gap-3 h-3/4">
      <h1 className="text-3xl font-bold mt-20">
         <strong>Day 1 Next JS buildup Counter app</strong>
      </h1>
      <div className="items-center flex flex-col gap-3 mt-15 bg-slate-200
      p-10 rounded-lg w-1/2 mx-auto">
      <h2 className="text-xl flex gap-2">Current Counter: <div className="bg-yellow-300 px-4 rounded">{count} </div></h2>

       {action !== "" && 
            <div className="h-10 bg-slate-300 px-4 items-center flex justify-center rounded">
                <h2 className="text-2xl italic flex gap-4">Last action: 
                    <div className={` px-4 rounded
                        ${action === "Incremented" ? 'bg-green-300' : 'bg-red-600 text-white'}`}>
                        {action}
                    </div>
                    
                    </h2>

            </div>
        }

      <div className="flex gap-3">
        <button className="bg-blue-500 text-white p-2 rounded hover:bg-blue-800" onClick={() => incrementer()}>Increment</button>
        <button className="bg-red-500 text-white p-2 rounded hover:bg-red-800" onClick={() => decrementer()}>Decrement</button>
      </div>
      </div>
    </div>
  );
}
