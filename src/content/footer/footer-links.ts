import { Mail } from "lucide-react";
import { FaFacebook, FaInstagram } from "react-icons/fa";

export const footerLinks = [
  {
    title: "Liens Utiles",
    linkList: [
      {
        name: "Site Web TPS",
        url: "https://telecom-physique.fr/",
      },
      {
        name: "Site Web Unistra",
        url: "https://www.unistra.fr/",
      },
      {
        name: "Intranet Etudiant",
        url: "https://etu.telecom-ps.unistra.fr/doku.php?id=start",
      },
      {
        name: "Moodle",
        url: "https://moodle.unistra.fr/",
      },
      {
        name: "Ernest",
        url: "https://ernest.unistra.fr/",
      },
      {
        name: "Partage",
        url: "https://partage.unistra.fr/",
      },
      {
        name: "Emploi du temps",
        url: "https://monemploidutemps.unistra.fr/",
      },
    ],
  },
  {
    title: "Vie à l'école",
    linkList: [
      {
        name: "Planning Conférences",
        url: "https://docs.google.com/spreadsheets/d/1Bk8WIDgYPn1yftwp7IWiqCXXRmJXkz8VoSkNOiaQhqY/edit#gid=135374961",
      },
      {
        name: "Fablab",
        url: "http://fablab.telecom-ps.unistra.fr/doku.php",
      },
      {
        name: "FabManager",
        url: "http://fablab.telecom-ps.unistra.fr/doku.php?id=intranet:chartes",
      },
    ],
  },
  {
    title: "Documents utiles",
    linkList: [
      {
        name: "Annales",
        url: "https://drive.google.com/drive/folders/1cb2h4_nhgk7v3w4haKxOGevHWSa9lCsF?usp=sharing",
      },
      {
        name: "Dossier Etudiant",
        url: "https://dossieretu.unistra.fr/mdw/#!notesView",
      },
      {
        name: "Certificat de Scolarité",
        url: "https://lise.unistra.fr/",
      },
      {
        name: "VPN de l'école",
        url: "https://documentation.unistra.fr/Catalogue/Infrastructures-reseau/osiris/VPN/co/guide.html",
      },
    ],
  },
  {
    title: "Stage",
    linkList: [
      {
        name: "JobTeaser",
        url: "https://telecom-physique.jobteaser.com/",
      },
      {
        name: "Chronos",
        url: "https://chronos.telecom-ps.unistra.fr/",
      },
      {
        name: "Comment trouver un stage",
        url: "https://intra-etu.telecom-ps.unistra.fr/doku.php?id=stages:procedure",
      },
    ],
  },
];

export const footerContact = {
  title: "Contactez-nous !",
  links: [
    {
      icon: FaFacebook,
      url: "https://www.facebook.com/bde.telecomps/",
    },
    {
      icon: FaInstagram,
      url: "https://www.instagram.com/bdetps2023",
    },
    {
      icon: Mail,
      url: "mailto:bdetps@gmail.com",
    },
  ],
};

export const footerInsidePSBS = {
  title: "Inside PSBS",
  links: [
    {
      name: "Google Play",
      image: "/images/google-play.png",
      url: "https://play.google.com/store/apps/details?id=com.ITS.InsidePSBS&pcampaignid=pcampaignidMKT-Other-global-all-co-prtnr-py-PartBadge-Mar2515-1",
    },
    {
      name: "App Store",
      image: "/images/app-store.svg",
      url: "https://apps.apple.com/fr/",
    },
  ],
};
