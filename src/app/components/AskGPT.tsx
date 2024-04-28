"use client";

import { useRef, useState } from "react";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { ResponseBody } from "../../types";
import Spinner from "@/components/ui/spinner";
import MessageBox from "./MessageBox";
import { ScrollArea } from "@/components/ui/scroll-area";
import NoDiscussion from "./NoDiscussion";

function AskGPT() {
  const inputRef = useRef<HTMLTextAreaElement>(null);

  const [loading, setLoading] = useState(false);
  const [data, setData] = useState<ResponseBody[]>([]);

  const postQuestion = async (content: string) => {
    const response = await fetch("/api/chat-gpt", {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify({ content }),
    });

    const data = await response.json();
    setData((prevState) => [
      ...prevState.filter((item) => item.content !== "loading"),
      ...data,
    ]);
    setLoading(false);
  };

  const handleClick = async () => {
    const value = inputRef.current?.value.trim();
    if (!value) {
      return;
    }

    setLoading(true);

    const newValue: ResponseBody = {
      role: "user",
      content: value,
    };

    const loadingValue: ResponseBody = {
      role: "assistant",
      content: "loading",
    };

    postQuestion(value);
    setData((prevState) => [...prevState, newValue, loadingValue]);
  };

  return (
    <div className="h-full">
      {data.length > 0 ? (
        <ScrollArea className="border border-white rounded-md h-[45rem]">
          {data.map((message, idx) => (
            <MessageBox key={`message-${idx + 10}`} id={idx + 1} {...message} />
          ))}
        </ScrollArea>
      ) : (
        <NoDiscussion />
      )}

      <div className="flex flex-col mt-2 gap-1 items-end">
        <Button
          className="bg-green-500 hover:bg-green-600 h-8 mb-1 w-20"
          onClick={handleClick}
          disabled={loading}
        >
          {loading ? <Spinner /> : "Ask GPT"}
        </Button>

        <Textarea
          className="bg-transparent text-white"
          ref={inputRef}
          placeholder="Ask me what you want..."
        />
      </div>
    </div>
  );
}

export default AskGPT;
