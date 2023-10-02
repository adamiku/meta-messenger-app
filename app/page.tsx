import ChatInput from "@/components/ChatInput";
import MessageList from "@/components/MessageList";

async function HomePage() {
  const data = await fetch(
    `${process.env.VERCEL_URL ?? "http://localhost:3000"}/api/getMessages`
  ).then((res) => res.json());

  const messages: Message[] = data.messages;

  return (
    <main>
      <MessageList initialMessages={messages} />
      <ChatInput />
    </main>
  );
}

export default HomePage;
