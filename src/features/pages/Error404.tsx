import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";

export const NotFoundPage = () => {
  return (
    <div className="page-center">
      <div>
        <Image src="/images/error.png" alt="error" width={300} height={300} />
        <h1 className="mb-1">Erreur 404</h1>
        <p className="text-xl text-muted-foreground">
          Oh non ! Cette page n&apos;existe pas.
        </p>
        <Link
          href="/"
          className={cn("mt-5", buttonVariants({ variant: "outline" }))}
        >
          Revenir à la page d&apos;accueil
        </Link>
      </div>
    </div>
  );
};
