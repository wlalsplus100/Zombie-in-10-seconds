import { Cursor, useTypewriter } from "react-simple-typewriter";

export default function App() {
  const [text] = useTypewriter({
    words: ["hi", "hello", "my name is jimin"],
    loop: 0,
  });

  return (
    <div className="text-2xl font-bold">
      {text}
      <Cursor cursorStyle="|" />
    </div>
  );
}
