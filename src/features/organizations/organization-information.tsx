import { Avatar, AvatarImage } from "@/components/ui/avatar";
import { buttonVariants } from "@/components/ui/button";
import { Skeleton } from "@/components/ui/skeleton";
import { DetailedOrganization } from "@/types/organization";
import { Globe, LucideIcon, Mail } from "lucide-react";
import Link from "next/link";
import { IconType } from "react-icons";
import { FaDiscord, FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";
import { toast } from "sonner";
import useSWR, { Fetcher } from "swr";

const fetcher: Fetcher<DetailedOrganization, string> = async (...args) =>
  fetch(...args)
    .then((res) => res.json())
    .then((data) => data.data);

export const OrganizationInformation = ({ id }: { id: number }) => {
  const { data, isLoading, error } = useSWR(
    `https://fouaille.bde-tps.fr/api/organization/${id}`,
    fetcher
  );

  if (isLoading) return <OrganizationLoader />;

  if (error || !data) {
    toast.error("Une erreur est survenue. Veuillez réessayer.");
    return <OrganizationLoader />;
  }
  return (
    <div className="flex flex-col gap-5">
      <div className="flex justify-between">
        <div>
          <h2>{data.short_name || data.name}</h2>
          <span className="text-muted-foreground">
            {data.short_name && data.name}
          </span>
        </div>
        <Avatar className="w-[80px] h-[80px]">
          <AvatarImage
            src={data.logo_url}
            alt={data.name}
            className="bg-white object-contain"
          />
        </Avatar>
      </div>
      <div className="flex gap-2">
        <OrganizationLink icon={Globe} href={data.website_link} />
        <OrganizationLink
          icon={Mail}
          href={data.email && `mailto:${data.email}`}
        />
        <OrganizationLink icon={FaInstagram} href={data.instagram_link} />
        <OrganizationLink icon={FaFacebook} href={data.facebook_link} />
        <OrganizationLink icon={FaDiscord} href={data.discord_link} />
        <OrganizationLink icon={FaTwitter} href={data.twitter_link} />
      </div>
      <p>{data.description}</p>
    </div>
  );
};

const OrganizationLink = ({
  icon: Icon,
  href,
}: {
  icon: LucideIcon | IconType;
  href?: string;
}) => {
  if (!href) return null;
  return (
    <Link
      className={buttonVariants({ variant: "outline", size: "iconLg" })}
      href={href}
    >
      <Icon size={20} />
    </Link>
  );
};

const OrganizationLoader = () => {
  return (
    <div className="flex flex-col gap-5">
      <div className="flex justify-between gap-5">
        <div className="flex flex-col gap-2 flex-1">
          <Skeleton className="w-full h-8 rounded-xl" />
          <Skeleton className="w-full h-4 rounded-xl" />
        </div>
        <Skeleton className="w-[80px] h-[80px] rounded-full" />
      </div>
      <div className="flex gap-2">
        {Array.from({ length: 6 }).map((_, i) => (
          <Skeleton className="w-12 h-12" key={i} />
        ))}
      </div>
      <Skeleton className="h-[150px] w-full rounded-xl" />
    </div>
  );
};
