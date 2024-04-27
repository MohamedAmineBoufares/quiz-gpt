export type ResponseBody = {
  role: "user" | "assistant";
  content: string;
};

export type Payload = {
  id: number;
  content: string;
};
