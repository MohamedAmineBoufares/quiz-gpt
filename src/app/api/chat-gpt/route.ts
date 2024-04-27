import { NextResponse } from "next/server";
import OpenAI from "openai";
const API_KEY = process.env.GTP_API_KEY;

const openai = new OpenAI({
  apiKey: API_KEY,
});

export async function POST(request: Request) {
  try {
    const { content } = await request.json();

    const { choices: data } = await openai.chat.completions.create({
      model: "gpt-3.5-turbo",
      frequency_penalty: 0,
      presence_penalty: 0,
      max_tokens: 1024,
      temperature: 0,
      top_p: 1,
      messages: [{ role: "user", content }],
    });

    return NextResponse.json(data.map(({ message }) => ({ ...message })));
  } catch (error) {
    console.error(error);
    throw new Error();
  }
}
