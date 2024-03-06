import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Organization } from "@/types/organization";

export type OrganizationCardProps = {} & Organization;

export const OrganizationCard = ({
  short_name,
  name,
  logo_url,
}: OrganizationCardProps) => {
  return (
    <Card>
      <CardHeader>
        <CardTitle>{short_name || name}</CardTitle>
        <CardDescription>{short_name && name}</CardDescription>
      </CardHeader>
      <CardContent>
        <Avatar className="m-auto w-[150px] h-[150px]">
          <AvatarImage src={logo_url} alt={name} className="bg-white" />
          <AvatarFallback className="text-5xl">
            {name.split(" ", 2).map((word) => word[0].toUpperCase())}
          </AvatarFallback>
        </Avatar>
      </CardContent>
    </Card>
  );
};
