"use client";

import { useState } from "react";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";

export default function Home() {
  const [input, setInput] = useState("");
  const [result, setResult] = useState("");
  const [isSqrt, setIsSqrt] = useState(false); 

  const handleButtonClick = (value: string) => {
    if (value === "C") {
      setInput("");
      setResult("");
      setIsSqrt(false);
    } else if (value === "CE") {
      setInput(input.slice(0, -1));
    } else if (value === "=") {
      try {
        if (isSqrt) {
          setResult(Math.sqrt(parseFloat(input)).toString());
          setIsSqrt(false);
        } else {
          setResult(eval(input));
        }
      } catch {
        setResult("Error");
      }
    } else if (value === "√") {
      setIsSqrt(true);
    } else if (value === "%") {
      setResult((parseFloat(input) / 100).toString());
    } else {
      setInput(input + value);
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen p-8">
      <main className="sm:w-[60%] md:w-auto md:max-w-[40%]">
        <Card>
          <CardHeader>
            <CardTitle>
              <div className="bg-blue-500 text-white font-bold p-3 rounded-full text-end w-full">
                {result || input || "0"}
              </div>
            </CardTitle>
          </CardHeader>
          <CardContent className="grid grid-cols-4 gap-2">
            {[
              { label: "%", value: "%", style: "" },
              { label: "√", value: "√", style: "" },
              { label: "CE", value: "CE", style: "" },
              { label: "C", value: "C", style: "bg-slate-950 text-white font-bold" },
              { label: "7", value: "7", style: "" },
              { label: "8", value: "8", style: "" },
              { label: "9", value: "9", style: "" },
              { label: "−", value: "-", style: "bg-red-600 text-white font-bold" },
              { label: "4", value: "4", style: "" },
              { label: "5", value: "5", style: "" },
              { label: "6", value: "6", style: "" },
              { label: "➗", value: "/", style: "bg-blue-500 text-white font-bold" },
              { label: "1", value: "1", style: "" },
              { label: "2", value: "2", style: "" },
              { label: "3", value: "3", style: "" },
              { label: "✕", value: "*", style: "bg-yellow-400 text-black font-bold" },
              { label: ".", value: ".", style: "" },
              { label: "0", value: "0", style: "" },
              { label: "=", value: "=", style: "" },
              { label: "+", value: "+", style: "bg-green-500 text-white font-bold" },
            ].map((btn, index) => (
              <Button
                key={index}
                className={`rounded-full p-6 text-xl hover:opacity-70 ${btn.style}`}
                onClick={() => handleButtonClick(btn.value)}
              >
                {btn.label}
              </Button>
            ))}
          </CardContent>
        </Card>
      </main>
    </div>
  );
}




