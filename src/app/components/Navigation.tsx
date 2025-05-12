"use client";

import { useEffect, useState } from "react";
import TypedText from "./TypedText";
import { HoverLink } from "./HoverLink";
import { usePathname } from "next/navigation";
import Link from "next/link";

export function Navigation() {
  const pathname = usePathname();
  const routeToText = {
    "/": "bartch.io",
    "/music": "music",
    "/shows": "shows",
    "/dev": "dev",
    "/about": "about",
  };

  const text = routeToText[pathname as keyof typeof routeToText] || "bartch.io";

  return (
    <div className="flex flex-col mb-10 sm:mb-15">
      <Link href="/" className="ml-5 mb-8 sm:mb-15">
        <TypedText
          text={text}
          className="font-title text-3xl sm:text-7xl select-none"
          showCursor
        />
      </Link>
      <div className="w-full flex justify-center font-orb text-lg sm:text-2xl">
        <HoverLink text="music" href="/music" />
        <HoverLink text="shows" href="/shows" />
        <HoverLink text="dev" href="/dev" />
        <HoverLink text="about" href="/about" />
      </div>
    </div>
  );
}
