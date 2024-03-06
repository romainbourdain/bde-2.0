import {
  Briefcase,
  CircleDollarSign,
  GraduationCap,
  Home,
  LucideIcon,
  Users,
  Waves,
} from "lucide-react";
import { navbarText } from "./navbar";

type NavbarLink = {
  label: string;
  href: string;
  icon?: LucideIcon;
};

type NavbarLinkGroup = {
  label?: string;
  links: NavbarLink[];
  icon?: LucideIcon;
};

export const navbarLinks: NavbarLinkGroup[] = [
  {
    links: [
      {
        icon: Home,
        label: navbarText.links.home,
        href: "/",
      },
    ],
  },
  {
    links: [
      {
        icon: Users,
        label: navbarText.links.organizations,
        href: "/organizations",
      },
    ],
  },
  {
    label: navbarText.links.informations,
    links: [
      {
        icon: Briefcase,
        label: navbarText.links.dontForget,
        href: "/dont-forget",
      },
      {
        icon: Waves,
        label: navbarText.links.strasbourg,
        href: "/strasbourg",
      },
      {
        icon: GraduationCap,
        label: navbarText.links.tps,
        href: "/tps",
      },
    ],
  },
  {
    links: [
      {
        icon: CircleDollarSign,
        label: navbarText.links.sponsors,
        href: "/sponsors",
      },
    ],
  },
];
