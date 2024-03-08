import { footerInformations, footerLegal } from "@/content/footer/footer-legal";
import {
  footerContact,
  footerInsidePSBS,
  footerLinks,
} from "@/content/footer/footer-links";
import Image from "next/image";
import Link from "next/link";
import { Author } from "../footer/author";

export const Footer = () => {
  return (
    <footer className="text-lg">
      <div className="w-full bg-secondary/30 border-y py-10">
        <div className="flex justify-between max-w-[1200px] px-7 w-full m-auto">
          {footerLinks.map((section, i) => (
            <div key={i} className="flex flex-col gap-5">
              <h3>{section.title}</h3>
              <div className="flex flex-col gap-2">
                {section.linkList.map((link, j) => (
                  <Link
                    key={j}
                    href={link.url}
                    className="text-muted-foreground hover:underline"
                  >
                    {link.name}
                  </Link>
                ))}
              </div>
            </div>
          ))}
          <div className="flex flex-col gap-5">
            <h3>{footerContact.title}</h3>
            <div className="flex gap-5 items-center">
              {footerContact.links.map(({ icon: Icon, ...link }, i) => (
                <div key={i}>
                  <Link
                    key={i}
                    href={link.url}
                    className="text-muted-foreground hover:text-foreground"
                  >
                    <Icon className="w-7 h-7" />
                  </Link>
                </div>
              ))}
            </div>
            <h3>{footerInsidePSBS.title}</h3>
            <div className="flex gap-5 items-center">
              {footerInsidePSBS.links.map((link, i) => (
                <div key={i}>
                  <Link
                    key={i}
                    href={link.url}
                    className="text-muted-foreground hover:text-foreground"
                  >
                    <Image
                      src={link.image}
                      alt={link.name}
                      width={100}
                      height={50}
                    />
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      <div className="w-full bg-secondary/50 py-10">
        <div className="flex justify-between max-w-[1000px] w-full m-auto">
          <div className="flex flex-col gap-5">
            <div className="flex flex-col">
              <h3>{footerInformations.title}</h3>
              <span className="text-muted-foreground">
                {footerInformations.subtitle}
              </span>
            </div>
            <Author />
            <span className="text-muted-foreground italic text-base">
              {footerInformations.copyrights}
            </span>
          </div>
          <div className="flex flex-col gap-5">
            <h3>{footerLegal.title}</h3>
            {footerLegal.links.map((link, i) => (
              <Link
                key={i}
                href={link.url}
                className="text-muted-foreground text-base hover:underline"
              >
                {link.name}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};
