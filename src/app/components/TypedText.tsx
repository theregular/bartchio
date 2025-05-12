"use client";

import { useEffect, useState, useRef } from "react";

type TypedTextProps = {
  text: string;
  speed?: number;
  className?: string;
  showCursor?: boolean;
  ascii?: boolean;
};

export default function TypedText({
  text,
  className,
  speed = 70,
  showCursor = false,
  ascii = false,
}: TypedTextProps) {
  const [displayedText, setDisplayedText] = useState("");
  const [typingDone, setTypingDone] = useState(false);

  const timerRef = useRef<number>(0);
  const indexRef = useRef(0);

  useEffect(() => {
    // 1) clear any old interval
    if (timerRef.current) {
      clearInterval(timerRef.current);
    }
    // 2) reset state + index
    setDisplayedText("");
    setTypingDone(false);
    indexRef.current = 0;

    // 3) start typing
    timerRef.current = window.setInterval(() => {
      const i = indexRef.current;

      // only type if we're still in bounds
      if (i < text.length) {
        setDisplayedText((prev) => prev + text[i]);
        indexRef.current = i + 1;
      } else {
        // done
        clearInterval(timerRef.current);
        setTypingDone(true);
      }
    }, speed);

    // cleanup on unmount or before next effect
    return () => {
      if (timerRef.current) {
        clearInterval(timerRef.current);
      }
    };
  }, [text]);

  return (
    <>
      {ascii ? (
        <pre className={`${className}`}>
          {displayedText}
          {showCursor && (
            <span
              className={
                typingDone
                  ? "blink-cursor"
                  : "inline-block w-[0.6ch] h-[1em] bg-current ml-[1px] align-bottom"
              }
            />
          )}
        </pre>
      ) : (
        <div className={`${className}`}>
          {displayedText}
          {showCursor && (
            <span
              className={
                typingDone
                  ? "blink-cursor"
                  : "inline-block w-[0.6ch] h-[1em] bg-current ml-[1px] align-bottom"
              }
            />
          )}
        </div>
      )}
    </>
  );
}
