import { Beer, CircleDot, Dumbbell, Music, WashingMachine } from "lucide-react";
import { FaFutbol } from "react-icons/fa";

export const tpsHeroSection = {
  title: "Vivre à TPS",
  description:
    "Télécom Physique Strasbourg est situé en plein coeur du campus de Illkirch-Graffenstaden au pôle API (Application et Promotion de l'Innovation). Les locaux sont partagés avec plusieurs laboratoires de recherche et avec une autre école d'ingénieur : ESBS avec qui nous partageons une partie de la vie associative notamment le fouaille (foyer étudiant).",
};

export const tpsApiSection = {
  title: "Le pôle API",
};

export const tpsFouailleSection = {
  title: "Le Fouaille",
  description:
    "Le fouaille (foyer étudiant) est l'endroit réservé aux étudiants. C'est l'endroit où se déroulent les soirées notamment grâce à son bar. Il a aussi tout ce qu'il faut pour manger, se reposer, faire du sport. Il y a aussi un baby foot et deux billards !",
};

export const tpsStuffSection = {
  title: "Équipements disponibles",
  items: [
    {
      title: "Bar",
      icon: Beer,
    },
    {
      title: "Salle de sport",
      icon: Dumbbell,
    },
    {
      title: "Laverie",
      icon: WashingMachine,
    },
    {
      title: "Salle musique",
      icon: Music,
    },
    {
      title: "Babyfoot",
      icon: FaFutbol,
    },
    {
      title: "Billard",
      icon: CircleDot,
    },
  ],
};
