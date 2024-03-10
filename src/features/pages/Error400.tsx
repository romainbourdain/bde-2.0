import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";

export const ErrorPage = () => {
  return (
    <div className="page-center">
      <div>
        <Image src="/images/error.png" alt="error" width={300} height={300} />
        <h1 className="mb-1">Erreur</h1>
        <p className="text-xl text-muted-foreground">
          Quelque chose ne s&apos;est pas passé comme prévu {":("}
          <br />
          Si le problème persiste contactez un administrateur.
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
