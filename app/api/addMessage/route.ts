import { serverPusher } from "@/pusher";
import redis from "@/redis";
import { NextResponse } from "next/server";

type ResponseData = {
  message: Message;
};

type ErrorData = {
  body: string;
};

export async function POST(
  request: Request
): Promise<NextResponse<ResponseData | ErrorData>> {
  const message = await request.json();

  // replace the timestamp of the user to the timestamp of the server to be consistent, it is required as on the frontend we use optimistic update and shows the time of the client
  const newMessage = {
    ...message,
    created_at: Date.now(),
  };

  // push to upstash
  try {
    await redis.hset("messages", message.id, JSON.stringify(newMessage));
    serverPusher.trigger("messages", "new-message", newMessage);
    return NextResponse.json({ message: newMessage }, { status: 200 });
  } catch (error) {
    return NextResponse.json({ body: "Something went wrong" });
  }
}
