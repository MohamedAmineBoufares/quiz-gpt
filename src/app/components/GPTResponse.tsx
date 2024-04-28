"use client";

import { useStore } from "@/store";
import React, { useMemo } from "react";
import QuestionItem from "./QuestionItem";
import { ScrollArea } from "@/components/ui/scroll-area";

function GPTResponse() {
  const storedContent = useStore((state) => state.storedContent);

  const questions = useMemo(() => {
    if (!storedContent) {
      return [];
    }

    const splitText = storedContent?.content.split("\n\n");

    const questions = splitText.map((text) => {
      const splitQuestion = text.split("\n");
      const question = splitQuestion[0];
      const options = splitQuestion.slice(1);

      const questionItem = {
        question,
        options,
      };

      return questionItem;
    });

    return questions;
  }, [storedContent]);

  if (!questions.length) {
    return (
      <div className="flex justify-center items-center text-white h-full border border-white rounded-md">
        <h1 className="text-2xl text-center">
          Ask the GPT, Click on the magic button ✨ <br /> and see the MAGIC!
        </h1>
      </div>
    );
  }

  console.log("questions", questions);

  return (
    <ScrollArea className="h-[50rem] border border-white rounded-md p-5">
      {questions.map((props, idx) => (
        <QuestionItem key={`question-item-${idx + 1}`} {...props} />
      ))}
    </ScrollArea>
  );
}

export default GPTResponse;
