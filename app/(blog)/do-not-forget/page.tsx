import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { TypewriterEffect } from "@/components/ui/typewriter-effect";
import type { PageParams } from "@/types/next";

export default async function RoutePage(props: PageParams<{}>) {
  return (
    <div className="max-w-[1200px] w-full flex flex-col gap-20 items-center py-20">
      <section className="flex flex-col gap-10 max-w-[800px] mb-32">
        <TypewriterEffect
          words={[{ text: "Ne" }, { text: "Pas" }, { text: "Oublier" }]}
          cursorClassName="bg-foreground h-8 sm:h-10"
          className="text-4xl sm:text-5xl text-center"
        />
        <div className="flex gap-7 items-center">
          <span className="text-9xl">🧳</span>
          <p className="text-base sm:text-lg md:text-xl">
            Tu penses être paré pour la rentrée ? Es-tu sûr de n&apos;avoir rien
            oublié ? Nous t&apos;avons concoté une petite liste pour te préparer
            au mieux à la vie à Strasbourg et dans l&apos;école !
          </p>
        </div>
      </section>
      <section className="flex flex-col gap-10">
        <h1>Pour le quotidien</h1>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          <InfoCard
            icon="🧣"
            description="Des vêtements chauds (doudoune, grosses chaussures, gants, bonnet... il paraît qu'il fait froid en hiver... mais c'est peut être la neige)"
          />
          <InfoCard
            icon="🚑"
            description="Ta carte vitale et un certificat médical pour le sport (possibilité de l'obtenir auprès du SUMPS)"
          />
          <InfoCard
            icon="🪪"
            description="Ton numéro social étudiant (disponible sur ta carte étudiante)"
          />
          <InfoCard
            icon="😃"
            description="Le plus important, n'oublie pas ton sourire et ta bonne humeur !"
          />
        </div>
      </section>
      <section className="flex flex-col gap-10">
        <h1>Pour les cours</h1>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          <InfoCard
            icon="🥼"
            description="Une blouse pour les TP de physique"
          />
          <InfoCard
            icon="📒"
            description="Des feuilles, cahiers, cours de prépa, fiches de révision... (qui sait, tu t'en servira peut être)"
          />
        </div>
      </section>
      <section className="flex flex-col gap-10">
        <h1>Pour l&apos;intégration</h1>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          <InfoCard
            icon="⛺"
            description="Pour le WEI (Weekend d'intégration), il faut un sac de couchage, une paire de chaussures de sport et des vêtements de rechange salissables (pour rester au sec)"
          />
          <InfoCard
            icon="🏉"
            description="Des affaires de sport (pour les activités du Bureau des Sports) et quelques habits auxquels tu ne tiens pas"
          />
          <InfoCard
            icon="🩳"
            description="Un maillot de bain (pour le lac de Baggersee)"
          />
          <InfoCard
            icon="🥨"
            description="Un mets de ta région, une spécialité locale (pour partager ta culture avec les autres lors de la soirée inter-région...)"
          />
          <InfoCard
            icon="🚐"
            description="Tes meilleures lunettes de hippie pour dompter le soleil Strasbourgeois !"
          />
          <InfoCard
            icon="🎭"
            description="Et si tu as encore plein de place dans tes affaires, n'hésite pas à amener des déguisements en tout genre !"
          />
        </div>
      </section>
    </div>
  );
}

const InfoCard = ({
  icon,
  description,
}: {
  icon: string;
  description: string;
}) => (
  <Card>
    <CardContent className="w-full flex justify-center">
      <span className="text-8xl sm:text-9xl leading-relaxed mt-6">{icon}</span>
    </CardContent>
    <CardFooter>
      <p className="text-sm sm:text-base">{description}</p>
    </CardFooter>
  </Card>
);
