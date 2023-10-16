import redis from "@/redis";
import { NextResponse } from "next/server";

type ResponseData = {
  messages: Message[];
};

type ErrorData = {
  body: string;
};

export const dynamic = "force-dynamic";

export async function GET(): Promise<NextResponse<ResponseData | ErrorData>> {
  try {
    const messagesResponse = await redis.hvals("messages");

    const messages: Message[] = messagesResponse
      .map((message) => JSON.parse(message))
      .sort((a, b) => b.created_at - a.created_at);

    // get messages from upstash

    return NextResponse.json({ messages }, { status: 200 });
  } catch (error) {
    return NextResponse.json({ body: "Something went wrong" });
  }
}
