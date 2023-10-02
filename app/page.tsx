import ChatInput from "@/components/ChatInput";
import MessageList from "@/components/MessageList";

function HomePage() {
  return (
    <main>
      <MessageList />
      <ChatInput />
    </main>
  );
}

export default HomePage;
