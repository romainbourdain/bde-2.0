import { Card, CardContent, CardFooter } from "@/components/ui/card";

export type DontForgetCardProps = {
  icon: string;
  description: string;
};

export const DontForgetCard = ({ icon, description }: DontForgetCardProps) => {
  return (
    <Card>
      <CardContent className="w-full flex justify-center">
        <span className="text-8xl sm:text-9xl leading-relaxed mt-6">
          {icon}
        </span>
      </CardContent>
      <CardFooter>
        <p className="text-sm sm:text-base">{description}</p>
      </CardFooter>
    </Card>
  );
};
