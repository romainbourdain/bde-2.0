import {
  ImageCenterSection,
  ImageSideSection,
} from "@/components/structure/image-section";
import {
  tpsApiSection,
  tpsFouailleSection,
  tpsHeroSection,
  tpsStuffSection,
} from "@/content/tps/sections";
import { TpsCard } from "@/features/tps/tps-card";
import type { PageParams } from "@/types/next";

export default async function TPSPage(props: PageParams<{}>) {
  return (
    <div className="page">
      <ImageSideSection
        src="/images/tps/hero.jpg"
        title={tpsHeroSection.title}
        imageClassName="w-[500px] object-contain rounded-sm"
        side="right"
      >
        <p className="text-xl">{tpsHeroSection.description}</p>
      </ImageSideSection>
      <div className="w-full bg-secondary/30 curve after:bg-secondary/30 mb-24 before:bg-background pt-24">
        <ImageCenterSection
          src="/images/tps/map.jpg"
          imageClassName="h-[600px] object-contain w-auto rounded-lg"
          title={tpsApiSection.title}
        ></ImageCenterSection>
      </div>
      <ImageSideSection
        src="/images/tps/fouaille.jpg"
        title={tpsFouailleSection.title}
        imageClassName="w-[500px] object-contain rounded-sm"
        side="right"
      >
        <p className="text-xl">{tpsFouailleSection.description}</p>
      </ImageSideSection>
      <div className="w-full bg-primary/20 border-t border-b">
        <section className="max-w-screen-lg">
          <h1 className="mb-10 text-center">{tpsStuffSection.title}</h1>
          <div className="card-grid lg:grid-cols-3">
            {tpsStuffSection.items.map((item, index) => (
              <TpsCard key={index} {...item} delay={index * 0.2} />
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}
