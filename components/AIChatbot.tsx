
import { useState } from "react";
import axios from "axios";

interface Message {
  sender: "user" | "bot";
  text: string;
}

export default function AIChatbot() {

  const [message, setMessage] = useState<string>("");
  const [chat, setChat] = useState<Message[]>([]);
  const [open, setOpen] = useState<boolean>(false);

  const sendMessage = async (): Promise<void> => {

    if (!message.trim()) return;

    const userMessage: Message = {
      sender: "user",
      text: message
    };

    setChat((prev) => [...prev, userMessage]);

    try {

      const res = await axios.post(
        "http://127.0.0.1:8000/chat",
        {
          message: message
        }
      );

      const botMessage: Message = {
        sender: "bot",
        text: res.data.reply
      };

      setChat((prev) => [...prev, botMessage]);

    } catch (error) {

      console.log(error);

      const errorMessage: Message = {
        sender: "bot",
        text: "Backend server error"
      };

      setChat((prev) => [
        ...prev,
        errorMessage
      ]);
    }

    setMessage("");
  };

  return (
    <>

      {/* Floating AI Button */}
      {!open && (

        <button
          onClick={() => setOpen(true)}
          className="
          fixed
          bottom-24
          right-5
          z-50
          bg-yellow-400
          text-black
          px-4
          py-3
          rounded-full
          shadow-2xl
          font-semibold
          "
        >
          🤖 Ask AI
        </button>

      )}

      {/* Chatbot Panel */}
      {open && (

        <div
          className="
          fixed
          bottom-0
          left-0
          w-full
          h-[75vh]
          bg-black/80
          backdrop-blur-xl
          border-t
          border-yellow-400/20
          rounded-t-3xl
          z-50
          flex
          flex-col
          shadow-2xl
          "
        >

          {/* Header */}
          <div
            className="
            flex
            justify-between
            items-center
            p-4
            border-b
            border-yellow-400/10
            "
          >

            <h1 className="text-yellow-400 font-bold text-lg">
              AutoRoute-K AI
            </h1>

            <button
              onClick={() => setOpen(false)}
              className="
              text-white
              text-2xl
              "
            >
              ✕
            </button>

          </div>

          {/* Chat Area */}
          <div
            className="
            flex-1
            overflow-y-auto
            p-4
            space-y-3
            "
          >

            {chat.map((msg, index) => (

              <div
                key={index}
                className={`
flex
                  ${
  msg.sender === "user"
    ? "justify-end"
    : "justify-start"
}
`}
              >

                <div
                  className={`
max - w - [80 %]
px - 4
py - 3
rounded - 2xl
text - sm
shadow - lg
                  ${
  msg.sender === "user"
    ? "bg-yellow-400 text-black"
    : "bg-zinc-800 text-white"
}
`}
                >
                  {msg.text}
                </div>

              </div>

            ))}

          </div>

          {/* Input Area */}
          <div
            className="
            p-4
            border-t
            border-yellow-400/10
            flex
            gap-2
            "
          >

            <input
              type="text"
              placeholder="Ask your route..."
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              className="
              flex-1
              bg-zinc-900
              text-white
              border
              border-zinc-700
              rounded-xl
              px-4
              py-3
              outline-none
              "
            />

            <button
              onClick={sendMessage}
              className="
              bg-yellow-400
              text-black
              px-5
              rounded-xl
              font-semibold
              "
            >
              Send
            </button>

          </div>

        </div>

      )}

    </>
  );
}

