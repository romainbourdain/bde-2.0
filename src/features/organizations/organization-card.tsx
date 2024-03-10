import { scaleAnimation } from "@/animations/scale";
import { AnimatedFrame } from "@/components/animated-frame";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Organization } from "@/types/organization";
import { OrganizationDialog } from "./organization-dialog";
import { OrganizationIcon } from "./organization-icon";

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
            <OrganizationIcon
              src={logo_url}
              name={name}
              className="m-auto group-hover:scale-110 transition-transform duration-300 ease-in-out"
            />
          </CardContent>
        </Card>
      </OrganizationDialog>
    </AnimatedFrame>
  );
};
