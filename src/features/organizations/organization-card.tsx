import { scaleAnimation } from "@/animations/scale";
import { AnimatedFrame } from "@/components/animated-frame";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Organization } from "@/types/organization";
import { OrganizationDialog } from "./organization-dialog";

export type OrganizationCardProps = {} & Organization;

export const OrganizationCard = ({
  short_name,
  name,
  logo_url,
  id,
}: OrganizationCardProps) => {
  return (
    <AnimatedFrame variants={scaleAnimation}>
      <OrganizationDialog id={id}>
        <Card className="cursor-pointer group hover:border-primary/20 h-full">
          <CardHeader>
            <CardTitle className="break-words">{short_name || name}</CardTitle>
            <CardDescription>{short_name && name}</CardDescription>
          </CardHeader>
          <CardContent>
            <Avatar className="m-auto w-[80px] h-[80px] sm:w-[150px] sm:h-[150px] group-hover:scale-110 transition-transform duration-300 ease-in-out">
              <AvatarImage
                src={logo_url}
                alt={name}
                className="bg-white object-contain p-1"
              />
              <AvatarFallback className="text-5xl">
                {name.split(" ", 2).map((word) => word[0].toUpperCase())}
              </AvatarFallback>
            </Avatar>
          </CardContent>
        </Card>
      </OrganizationDialog>
    </AnimatedFrame>
  );
};
