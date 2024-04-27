"use client";

import { useStore } from "@/store";
import React from "react";

function GPTResponse() {
  const storedContent = useStore((state) => state.storedContent);

  if (!storedContent) {
    return (
      <div className="flex justify-center items-center text-white h-full border border-white rounded-md">
        <h1 className="text-2xl text-center">
          Ask the GPT, Click on the magic button ✨ <br /> and see the MAGIC!
        </h1>
      </div>
    );
  }

  return <div className="text-yellow-200">{storedContent?.content}</div>;
}

export default GPTResponse;
