import { scaleAnimation } from "@/animations/scale";
import { AnimatedFrame } from "@/components/animated-frame";
import { Card, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { LucideIcon } from "lucide-react";
import { IconType } from "react-icons";

export type TpsCardProps = {
  title: string;
  icon: LucideIcon | IconType;
  delay: number;
};

export const TpsCard = ({ title, icon: Icon, delay }: TpsCardProps) => {
  return (
    <AnimatedFrame
      variants={{
        ...scaleAnimation,
        visible: {
          ...scaleAnimation.visible,
          transition: { ...scaleAnimation.visible.transition, delay: delay },
        },
      }}
    >
      <Card className="flex flex-col items-center text-center h-full">
        <CardHeader>
          <Icon size={80} />
        </CardHeader>
        <CardFooter>
          <CardTitle className="text-xl sm:text-2xl md:text-3xl">
            {title}
          </CardTitle>
        </CardFooter>
      </Card>
    </AnimatedFrame>
  );
};
