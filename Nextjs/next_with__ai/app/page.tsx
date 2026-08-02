"use client";
import Image from "next/image";
import { generateTextAction } from "@/app/actions/aiActions";
import { useState } from "react";
export default function Home() {
  const [prompt, setPrompt] = useState<string>("");
  const [output, setOutput] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(false);
  const handleSendPrompt = async () => {
     setLoading(true);
     setOutput("");
     const res = await generateTextAction(prompt);
     setOutput(res);
     setLoading(false);
   };
  return (
    <main className="flex flex-1 w-screen h-screen flex-col items-center justify-between py-6 px-16 bg-white dark:bg-black sm:items-start">

{
  output && (
    <div>
      <h1 className="text-2xl text-white bg-red-500">AI Response : </h1>
      {output}
    </div>
  )
}

      <div className="input-area fixed bottom-6 px-24 py-2 flex items-center justify-between w-full bg-blue-400 border border-gray-300 rounded-2xl shadow-md">
        <input
        className=" border p-2 w-[80%]"
        type="text"
        value={prompt}
        onChange={(e) => setPrompt(e.target.value)}
      />
         <button onClick={loading ? undefined : handleSendPrompt} className="bg-neutral-700 p-2 rounded-2xl cursor-pointer disabled:opacity-50">
           {loading ? "Loading..." : "Send"}
         </button>
      </div>
    </main>
  );
}
