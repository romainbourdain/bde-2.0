import { cn } from "@/lib/utils";
import Image from "next/image";
import { PropsWithChildren } from "react";

export type ImageSideSectionProps = PropsWithChildren<{
  src: string;
  side?: "left" | "right";
  title?: string;
  className?: string;
  imageClassName?: string;
}>;

export const ImageSideSection = ({
  children,
  className,
  imageClassName,
  src,
  side = "left",
  title,
}: ImageSideSectionProps) => {
  return (
    <section
      className={cn("flex flex-col lg:flex-row items-center gap-20", className)}
    >
      <h1 className="lg:hidden">{title}</h1>
      <Image
        src={src}
        alt={`${title} image`}
        width={1080}
        height={720}
        className={cn(side === "right" && "lg:order-last", imageClassName)}
      />
      <div className="flex-1">
        <h1 className="hidden lg:block mb-10">{title}</h1>
        {children}
      </div>
    </section>
  );
};

export type ImageCenterSectionProps = PropsWithChildren<{
  src: string;
  title?: string;
  className?: string;
  imageClassName?: string;
}>;

export const ImageCenterSection = ({
  src,
  title,
  className,
  imageClassName,
  children,
}: ImageCenterSectionProps) => {
  return (
    <section className={cn("flex flex-col items-center gap-20", className)}>
      <h1 className="text-center">{title}</h1>
      <Image
        src={src}
        alt={`${title} image`}
        width={1080}
        height={720}
        className={imageClassName}
      />
      {children}
    </section>
  );
};
