import { scaleAnimation } from "@/animations/scale";
import {
  translateLeftAnimation,
  translateRightAnimation,
} from "@/animations/translate";
import { cn } from "@/lib/utils";
import Image from "next/image";
import { PropsWithChildren } from "react";
import { AnimatedFrame } from "../animated-frame";

export type ImageSideSectionProps = PropsWithChildren<{
  src: string;
  side?: "left" | "right";
  order?: "first" | "last";
  title?: string;
  className?: string;
  imageClassName?: string;
}>;

export const ImageSideSection = ({
  children,
  className,
  imageClassName,
  src,
  order = "first",
  side = "left",
  title,
}: ImageSideSectionProps) => {
  return (
    <section
      className={cn("flex flex-col lg:flex-row items-center gap-20", className)}
    >
      <AnimatedFrame
        variants={
          side === "left" ? translateRightAnimation : translateLeftAnimation
        }
        className="lg:hidden"
      >
        <h1>{title}</h1>
      </AnimatedFrame>
      <AnimatedFrame
        variants={
          side === "left" ? translateLeftAnimation : translateRightAnimation
        }
        className={cn(
          side === "right" ? "lg:order-last" : "lg:order-first",
          order === "last" && "order-last"
        )}
      >
        <Image
          src={src}
          alt={`${title} image`}
          width={1080}
          height={720}
          className={cn(imageClassName)}
        />
      </AnimatedFrame>
      <div className="flex-1">
        <AnimatedFrame
          variants={
            side === "left" ? translateRightAnimation : translateLeftAnimation
          }
          className="hidden lg:block"
        >
          <h1 className="mb-10">{title}</h1>
        </AnimatedFrame>
        <AnimatedFrame
          variants={
            side === "left" ? translateRightAnimation : translateLeftAnimation
          }
        >
          {children}
        </AnimatedFrame>
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
      <AnimatedFrame variants={scaleAnimation}>
        <h1 className="text-center">{title}</h1>
      </AnimatedFrame>
      <AnimatedFrame variants={scaleAnimation}>
        <Image
          src={src}
          alt={`${title} image`}
          width={1080}
          height={720}
          className={imageClassName}
        />
      </AnimatedFrame>
      {children}
    </section>
  );
};
