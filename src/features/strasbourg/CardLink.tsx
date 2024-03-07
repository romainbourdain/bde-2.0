import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Image from "next/image";
import Link from "next/link";
import { PropsWithChildren } from "react";

export const CardLink = ({
  href,
  imageSrc,
  alt,
  children,
}: PropsWithChildren<{
  href: string;
  imageSrc: string;
  alt: string;
}>) => {
  return (
    <Link href={href} className="block h-full">
      <Card className="flex flex-col items-center text-center">
        <CardHeader>
          <CardTitle>
            <Image
              src={imageSrc}
              alt={alt}
              width={100}
              height={100}
              className="h-[100px] object-contain"
            />
          </CardTitle>
        </CardHeader>
        <CardContent>
          <CardDescription>{children}</CardDescription>
        </CardContent>
      </Card>
    </Link>
  );
};
