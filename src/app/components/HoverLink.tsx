import Link from "next/link";

type HoverLinkProps = {
  text: string;
  href: string;
  className?: string;
};

export function HoverLink({ text, href, className }: HoverLinkProps) {
  return (
    <Link
      href={href}
      className={`w-25 sm:w-40 text-center border-2 rounded-4xl border-transparent px-2 py-0 mx-0 sm:mx-3 hover:bg-foreground hover:border-2 hover:text-background hover:border-foreground hover:rounded-4xl transition duration-200 select-none ${className}`}
    >
      {text}
    </Link>
  );
}
