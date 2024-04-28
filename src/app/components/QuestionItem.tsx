import { Checkbox } from "@/components/ui/checkbox";
import React from "react";

type Props = {
  question: string;
  options: string[];
};

function QuestionItem({ question, options }: Props) {
  return (
    <div className="text-white">
      <p className="text-xl my-5">{question}</p>

      <div className="flex flex-col gap-5">
        {options.map((option, idx) => (
          <div
            className="flex items-start space-x-2"
            key={`options-${idx + 1}`}
          >
            <Checkbox id={`option-${idx + 1}`} />
            <label
              htmlFor={`option-${idx + 1}`}
              className="text-lg font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
            >
              {option}
            </label>
          </div>
        ))}
      </div>
    </div>
  );
}

export default QuestionItem;
