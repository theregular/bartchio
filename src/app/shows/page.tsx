import TypedASCII from "../components/TypedASCII";

export default function Shows() {
  return (
    <div className="flex flex-col items-center h-full">
      <div className="text-[0.5rem] sm:text-xs">
        <TypedASCII ascii="dj" />
      </div>
      <br />
      shows goes here
    </div>
  );
}
