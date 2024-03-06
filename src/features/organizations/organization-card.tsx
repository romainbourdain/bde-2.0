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
    <OrganizationDialog id={id}>
      <Card className="cursor-pointer">
        <CardHeader>
          <CardTitle className="break-words">{short_name || name}</CardTitle>
          <CardDescription>{short_name && name}</CardDescription>
        </CardHeader>
        <CardContent>
          <Avatar className="m-auto w-[80px] h-[80px] sm:w-[150px] sm:h-[150px]">
            <AvatarImage
              src={logo_url}
              alt={name}
              className="bg-white object-contain"
            />
            <AvatarFallback className="text-5xl">
              {name.split(" ", 2).map((word) => word[0].toUpperCase())}
            </AvatarFallback>
          </Avatar>
        </CardContent>
      </Card>
    </OrganizationDialog>
  );
};
