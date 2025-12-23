"use client";
import { useEffect, useState } from "react";

export default function Loading() {
  const dots = ["Loading.", "Loading..", "Loading..."];
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % dots.length);
    }, 500);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="bg-green-400 h-screen flex justify-center items-center text-center">
      <div className="bg-pink-100 h-[100px] w-[100px] flex items-center justify-center">
        <div>{dots[index]}</div>
      </div>
    </div>
  );
}
