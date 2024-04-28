import { ResponseBody } from "@/types";
import { Avatar, AvatarImage } from "@/components/ui/avatar";
import CopyTextButton from "./CopyTextButton";
import DotsLoader from "@/components/ui/dots-loader";

const humanAvatar =
  "https://avataaars.io/?avatarStyle=Circle&topType=ShortHairShortFlat&accessoriesType=Prescription01&hairColor=SilverGray&facialHairType=BeardLight&facialHairColor=Red&clotheType=Overall&clotheColor=Blue02&eyeType=Happy&eyebrowType=DefaultNatural&mouthType=Disbelief&skinColor=Tanned";

function MessageBox({ content, role, id }: ResponseBody & { id: number }) {
  const isGpt = role === "assistant";
  const isLoading = content === "loading";

  return (
    <div
      className={`flex items-start m-3 gap-2 ${
        isGpt ? "flex-row-reverse" : ""
      }`}
    >
      <div>
        <Avatar className="h-8 w-8 bg-white" title="Chat GPT">
          <AvatarImage src={isGpt ? "https://robohash.org/gpt" : humanAvatar} />
        </Avatar>
      </div>

      <div className="flex flex-col">
        <div
          style={{ whiteSpace: "pre-line" }}
          className={`text-white rounded-md p-2 ${
            isGpt ? "bg-purple-600 " : "bg-blue-500"
          }`}
        >
          <p>{isLoading ? <DotsLoader /> : content}</p>
        </div>

        {isGpt && !isLoading && <CopyTextButton payload={{ id, content }} />}
      </div>
    </div>
  );
}

export default MessageBox;
