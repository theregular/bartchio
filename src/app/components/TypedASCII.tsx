"use client";

import { useEffect, useState } from "react";
import TypedText from "./TypedText";
import { AsciiArtType } from "../other/types";

type TypedASCIIProps = {
  ascii: AsciiArtType;
  className?: string;
  speed?: number;
};

export default function TypedASCII(props: TypedASCIIProps) {
  const [art, setArt] = useState("");
  useEffect(() => {
    fetch(`/ascii/${props.ascii}.txt`)
      .then((res) => res.text())
      .then((text) => setArt(text));
  }, [props.ascii]);

  return (
    <div className={`text-center mb-10 sm:mb-15 ${props.className}`}>
      {art.split("\n").map((line, index) => (
        <span key={index}>
          {" "}
          <TypedText text={line} speed={props.speed} ascii />
        </span>
      ))}
    </div>
  );
}
