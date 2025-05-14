import TypedASCII from "../components/TypedASCII";

export default function Dev() {
  return (
    <div className="flex flex-col items-center h-full">
      <div className="text-[0.65rem] sm:text-xs">
        <TypedASCII ascii="computer" speed={8} />
      </div>
      <br />
      dev goes here
    </div>
  );
}
