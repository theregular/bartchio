import TypedASCII from "../components/TypedASCII";
import TypedText from "../components/TypedText";

export default function About() {
  return (
    <div>
      <div className="text-[0.5rem] sm:text-sm">
        <TypedASCII ascii="question" speed={10} />
      </div>
      <div className="px-5 sm:px-30">
        <TypedText
          text="bartchie (Ben Kartchner) is a software engineer, computer ethusiast,
        producer, and DJ."
          speed={10}
        />
      </div>
    </div>
  );
}
