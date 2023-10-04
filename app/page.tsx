import ChatInput from "@/components/ChatInput";
import MessageList from "@/components/MessageList";
import { getServerSession } from "next-auth";

export const dynamic = "force-dynamic";

async function HomePage() {
  const data = await fetch(
    `${process.env.VERCEL_URL ?? "http://localhost:3000"}/api/getMessages`
  ).then((res) => res.json());

  const messages: Message[] = data.messages;
  const session = await getServerSession();

  return (
    <main>
      <MessageList initialMessages={messages} />
      <ChatInput session={session} />
    </main>
  );
}

export default HomePage;
