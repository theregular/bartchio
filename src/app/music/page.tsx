import Link from "next/link";
import TypedASCII from "../components/TypedASCII";

export default function Music() {
  return (
    <div className="flex flex-col items-center h-full">
      <div className="text-sm sm:text-lg">
        <TypedASCII ascii="vinyl" speed={10} />
      </div>
      <div className="flex flex-row gap-10">
        <Link href={"https://soundcloud.com/bartchie"}>
          {/* <img src="/soundcloud.svg" alt="soundcloud" className="size-20" /> */}
          soundcloud
        </Link>
        <Link href={"https://www.youtube.com/@bartchie"}>
          {/* <img src="/youtube.svg" alt="youtube" className="size-20" /> */}
          youtube
        </Link>
        <Link href={"https://bartchie.bandcamp.com/"}>
          {/* <img src="/bandcamp.svg" alt="bandcamp" className="size-20" /> */}
          bandcamp
        </Link>
      </div>
    </div>
  );
}
