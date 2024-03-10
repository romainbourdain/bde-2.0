import {
  translateBottomAnimation,
  translateTopAnimation,
} from "@/animations/translate";
import { AnimatedFrame } from "@/components/animated-frame";
import {
  ImageCenterSection,
  ImageSideSection,
} from "@/components/structure/image-section";
import {
  heroSection,
  restaurantSection,
  roomSection,
  transportSection,
} from "@/content/strasbourg/sections";
import { CardLink } from "@/features/strasbourg/CardLink";
import { ColumnParagraph } from "@/features/strasbourg/ColumnParagraph";
import type { PageParams } from "@/types/next";

export default async function StrasbourgPage(props: PageParams<{}>) {
  return (
    <div className="page">
      <ImageSideSection
        src="/images/strasbourg/hero.png"
        imageClassName="w-[400px] h-[400px] object-contain"
        title={heroSection.tilte}
        side="right"
      >
        <p className="text-xl">{heroSection.description}</p>
      </ImageSideSection>
      <div className="w-full bg-secondary/30 curve after:bg-secondary/30 mb-24 before:bg-background pt-24">
        <ImageCenterSection
          src="/images/strasbourg/tram.png"
          imageClassName="w-[800px] h-[600px] object-contain"
          title={transportSection.title}
        >
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-20">
            {transportSection.subsections.map((subsection, index) => (
              <AnimatedFrame
                variants={{
                  ...translateTopAnimation,
                  visible: {
                    ...translateTopAnimation.visible,
                    transition: {
                      ...translateTopAnimation.visible.transition,
                      delay: 0.3 * index,
                    },
                  },
                }}
                key={index}
              >
                <ColumnParagraph icon={subsection.icon}>
                  {subsection.description}
                </ColumnParagraph>
              </AnimatedFrame>
            ))}
          </div>
          <div className="flex justify-center w-full max-w-[800px] gap-3 m-auto pt-20 border-t">
            {transportSection.links.map((link, index) => (
              <AnimatedFrame key={index} variants={translateBottomAnimation}>
                <CardLink
                  href={link.href}
                  alt={link.alt}
                  imageSrc={link.imageSrc}
                >
                  {link.description}
                </CardLink>
              </AnimatedFrame>
            ))}
          </div>
        </ImageCenterSection>
      </div>
      <ImageSideSection
        src="/images/strasbourg/restaurant.png"
        imageClassName="w-[400px] h-[400px] object-contain"
        title={restaurantSection.title}
      >
        <p className="text-xl">{restaurantSection.description}</p>
      </ImageSideSection>
      <div className="w-full bg-secondary/30 border-t border-b">
        <ImageSideSection
          src="/images/strasbourg/room.png"
          imageClassName="w-[450px] h-[450px] object-contain"
          title={roomSection.title}
          side="right"
        >
          <p className="text-xl">{roomSection.description}</p>
        </ImageSideSection>
        <section>
          <h1 className="items-center">⚠️⚠️⚠️ Mettre la carte ici</h1>
        </section>
      </div>
    </div>
  );
}
