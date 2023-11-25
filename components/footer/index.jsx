import Link from "next/link";

export default function Footer() {
  return (
    <div>
      <div className="h-[0.5px] bg-zinc-700 w-full"></div>
      <div className="py-3 select-none text-sm max-sm:text-xs">
        <h3 className="text-center text-white">
          <Link
            className="font-bold animated-gradient"
            href="https://twitter.com/devcebir"
            target="_blank"
          >
            Mehmet Bardakcı&nbsp;
          </Link>
          ❤️&nbsp;tarafından geliştirildi
        </h3>
      </div>
    </div>
  );
}
