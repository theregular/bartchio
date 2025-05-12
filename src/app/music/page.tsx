import TypedASCII from "../components/TypedASCII";

export default function Music() {
  return (
    <div className="flex flex-col items-center h-full">
      <div className="text-sm sm:text-lg">
        <TypedASCII ascii="vinyl" />
      </div>
      <br />
      music goes here
    </div>
  );
}
