import Image from "next/image";
import Link from "next/link";

export const Author = () => {
  return (
    <div className="flex gap-2 px-3 py-2 items-center bg-gradient-to-br from-sky-500/30 to-purple-600/30 self-start rounded-full hover:from-sky-500/40 hover:to-purple-600/40">
      <Image
        src="https://avatars.githubusercontent.com/u/83425069?v=4"
        alt="Romain Bourdain"
        width={50}
        height={50}
        className="rounded-full"
      />
      <div className="flex flex-col justify-between h-full items-start">
        <div className="text-lg font-bold mr-3">
          <span>Fait par</span>{" "}
          <Link
            href="https://github.com/romainbourdain"
            className="text-blue-500 hover:underline"
          >
            Romain Bourdain
          </Link>
        </div>
        <Link
          href="https://github.com/romainbourdain"
          className="text-xs font-semibold text-muted-foreground hover:text-foreground hover:underline"
        >
          Voir le Github
        </Link>
      </div>
    </div>
  );
};
