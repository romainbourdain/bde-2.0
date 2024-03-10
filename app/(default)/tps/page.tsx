import { scaleAnimation } from "@/animations/scale";
import { AnimatedFrame } from "@/components/animated-frame";
import {
  ImageCenterSection,
  ImageSideSection,
} from "@/components/structure/image-section";
import { Card, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import type { PageParams } from "@/types/next";
import {
  Beer,
  CircleDot,
  Dumbbell,
  LucideIcon,
  Music,
  WashingMachine,
} from "lucide-react";
import { IconType } from "react-icons";
import { FaFutbol } from "react-icons/fa";

export default async function TPSPage(props: PageParams<{}>) {
  return (
    <div className="page">
      <ImageSideSection
        src="/images/tps/hero.jpg"
        title="Vivre à TPS"
        imageClassName="w-[500px] object-contain rounded-sm"
        side="right"
      >
        <p className="text-xl">
          Télécom Physique Strasbourg est situé en plein coeur du campus de
          Illkirch-Graffenstaden au pôle API (Application et Promotion de
          l'Innovation). Les locaux sont partagés avec plusieurs laboratoires de
          recherche et avec une autre école d'ingénieur : ESBS avec qui nous
          partageons une partie de la vie associative notamment le fouaille
          (foyer étudiant).
        </p>
      </ImageSideSection>
      <div className="w-full bg-secondary/30 curve after:bg-secondary/30 mb-24 before:bg-background pt-24">
        <ImageCenterSection
          src="/images/tps/map.jpg"
          imageClassName="h-[600px] object-contain w-auto rounded-lg"
          title="Plan du pôle API"
        ></ImageCenterSection>
      </div>
      <ImageSideSection
        src="/images/tps/fouaille.jpg"
        title="Le fouaille"
        imageClassName="w-[500px] object-contain rounded-sm"
        side="right"
      >
        <p className="text-xl">
          Le fouaille (foyer étudiant) est l'endroit réservé aux étudiants.
          C'est l'endroit où se déroulent les soirées notamment grâce à son bar.
          Il a aussi tout ce qu'il faut pour manger, se reposer, faire du sport.
          Il y a aussi un baby foot et deux billards !
        </p>
      </ImageSideSection>
      <div className="w-full bg-primary/20 border-t border-b">
        <section className="max-w-screen-lg">
          <h1 className="mb-10 text-center">Equipements Disponibles</h1>
          <div className="card-grid lg:grid-cols-3">
            <TpsCard icon={Beer} title="Bar" delay={0} />
            <TpsCard icon={Dumbbell} title="Salle de sport" delay={0.3} />
            <TpsCard icon={WashingMachine} title="Laverie" delay={0.6} />
            <TpsCard icon={Music} title="Salle musique" delay={0.9} />
            <TpsCard icon={FaFutbol} title="Babyfoot" delay={1.2} />
            <TpsCard icon={CircleDot} title="Billard" delay={1.5} />
          </div>
        </section>
      </div>
    </div>
  );
}

type TpsCardProps = {
  title: string;
  icon: LucideIcon | IconType;
  delay: number;
};

const TpsCard = ({ title, icon: Icon, delay }: TpsCardProps) => {
  return (
    <AnimatedFrame
      variants={{
        ...scaleAnimation,
        visible: {
          ...scaleAnimation.visible,
          transition: { ...scaleAnimation.visible.transition, delay: delay },
        },
      }}
    >
      <Card className="flex flex-col items-center text-center h-full">
        <CardHeader>
          <Icon size={80} />
        </CardHeader>
        <CardFooter>
          <CardTitle className="text-xl sm:text-2xl md:text-3xl">
            {title}
          </CardTitle>
        </CardFooter>
      </Card>
    </AnimatedFrame>
  );
};
