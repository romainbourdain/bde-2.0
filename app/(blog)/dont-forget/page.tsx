import { TypewriterEffect } from "@/components/ui/typewriter-effect";
import {
  courseItems,
  dailyItems,
  integrationItems,
} from "@/content/dont-forget/items";
import {
  courseSection,
  dailySection,
  headSection,
  integrationSection,
} from "@/content/dont-forget/sections";
import { DontForgetGrid } from "@/features/dont-forget/dont-forget-grid";
import type { PageParams } from "@/types/next";
import Image from "next/image";

export default async function DontForgetPage(props: PageParams<{}>) {
  return (
    <div className="max-w-[1200px] w-full flex flex-col gap-20 items-center py-20 px-6 sm:px-10">
      <section className="flex flex-col gap-10 max-w-[1000px] mb-32">
        <div className="flex gap-20 items-center flex-col md:flex-row">
          <Image
            src="/images/dont-forget/hero.png"
            alt="hero image"
            width={350}
            height={350}
            className="order-2 md:order-1"
          />
          <div className="flex flex-col gap-10 order-1 md:order-2">
            <TypewriterEffect
              words={headSection.title}
              cursorClassName="bg-foreground h-8 sm:h-10"
              className="text-4xl sm:text-5xl"
            />
            <p className="text-base sm:text-lg md:text-xl">
              {headSection.description}
            </p>
          </div>
        </div>
      </section>
      <section className="flex flex-col gap-10">
        <h1>{dailySection.title}</h1>
        <DontForgetGrid items={dailyItems} />
      </section>
      <section className="flex flex-col gap-10">
        <h1>{courseSection.title}</h1>
        <DontForgetGrid items={courseItems} />
      </section>
      <section className="flex flex-col gap-10">
        <h1>{integrationSection.title}</h1>
        <DontForgetGrid items={integrationItems} />
      </section>
    </div>
  );
}
