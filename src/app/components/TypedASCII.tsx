"use client";

import { useEffect, useState } from "react";
import TypedText from "./TypedText";
import { AsciiArtType } from "../other/types";

type TypedASCIIProps = {
  ascii: AsciiArtType;
  className?: string;
};

export default function TypedASCII(props: TypedASCIIProps) {
  const [art, setArt] = useState("");
  useEffect(() => {
    fetch(`/ascii/${props.ascii}.txt`)
      .then((res) => res.text())
      .then((text) => setArt(text));
  }, []);

  return (
    <div className={`text-center mb-10 sm:mb-20 ${props.className}`}>
      {art.split("\n").map((line, index) => (
        <span key={index}>
          {" "}
          <TypedText text={line} speed={5} ascii />
        </span>
      ))}
    </div>
  );
}
