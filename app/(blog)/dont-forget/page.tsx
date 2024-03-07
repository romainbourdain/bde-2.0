import { AnimatedFrame } from "@/components/animated-frame";
import { ImageSideSection } from "@/components/structure/image-section";
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

const descriptionAnimation = {
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.3, delay: 1 },
  },
  hidden: { opacity: 0, x: -30 },
};

export default async function DontForgetPage(props: PageParams<{}>) {
  return (
    <div className="max-w-[1200px] w-full flex flex-col gap-20 items-center py-20 px-6 sm:px-10">
      <ImageSideSection
        src="/images/dont-forget/hero.png"
        imageClassName="w-[350px] h-[350px] object-contain"
        order="last"
      >
        <TypewriterEffect
          words={headSection.title}
          cursorClassName="bg-foreground h-8 sm:h-10"
          className="text-4xl sm:text-5xl mb-10"
        />
        <AnimatedFrame variants={descriptionAnimation}>
          <p className="text-xl">{headSection.description}</p>
        </AnimatedFrame>
      </ImageSideSection>
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
