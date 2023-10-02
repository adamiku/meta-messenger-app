import clsx from "clsx";
import Image from "next/image";

type Props = {
  message: Message;
};

function MessageComponent({ message }: Props) {
  const isUser = true;
  return (
    <div className={clsx("flex w-fit", isUser && "ml-auto")}>
      <div className={clsx("shrink-0", isUser && "order-2")}>
        <Image
          src={message.profilePic}
          className="rounded-full mx-2"
          height={50}
          width={50}
          alt="Profile Picture"
        />
      </div>
      <div>
        <p
          className={clsx(
            "text-[0.65rem] px-[2px] pb-[2px]",
            isUser ? "text-blue-400 text-right" : "text-red-400 text-left"
          )}
        >
          {message.username}
        </p>
        <div className="flex items-end">
          <div
            className={clsx(
              "px-3 py-2 rounded-lg w-fit text-white",
              isUser ? "bg-blue-400 ml-auto order-2" : "bg-red-400"
            )}
          >
            <p>{message.message}</p>
          </div>
          <p
            className={clsx(
              "text-[0.65rem] italic px-2 text-gray-300",
              isUser && "text-right"
            )}
          >
            {new Date(message.created_at).toDateString()}
          </p>
        </div>
      </div>
    </div>
  );
}

export default MessageComponent;
