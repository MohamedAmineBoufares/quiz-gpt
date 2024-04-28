import { Toggle } from "@/components/ui/toggle";
import { Sparkles } from "lucide-react";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { useStore } from "@/store";
import { Payload } from "@/types";

function CopyTextButton({ payload }: { payload: Payload }) {
  const storeContent = useStore((state) => state.storeContent);

  return (
    <div className="flex justify-end">
      <TooltipProvider>
        <Tooltip delayDuration={100}>
          <TooltipTrigger>
            <Toggle
              aria-label="Toggle bold"
              className="text-white hover:text-yellow-400 p-0 m-0 data-[state=on]:text-white"
              onClick={() => storeContent(payload)}
            >
              <Sparkles size="18px" />
            </Toggle>
          </TooltipTrigger>
          <TooltipContent className="bg-black text-white">
            <p>Generate Quiz</p>
          </TooltipContent>
        </Tooltip>
      </TooltipProvider>
    </div>
  );
}

export default CopyTextButton;
