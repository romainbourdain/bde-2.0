import { scaleAnimation } from "@/animations/scale";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { useAnimateInView } from "@/hooks/useAnimateInView";
import { motion } from "framer-motion";

export type DontForgetCardProps = {
  icon: string;
  description: string;
};

export const DontForgetCard = ({ icon, description }: DontForgetCardProps) => {
  const { ref, controls } = useAnimateInView();
  return (
    <motion.div
      initial="hidden"
      variants={scaleAnimation}
      ref={ref}
      animate={controls}
    >
      <Card className="h-full">
        <CardContent className="w-full flex justify-center">
          <span className="text-8xl sm:text-9xl leading-relaxed mt-6">
            {icon}
          </span>
        </CardContent>
        <CardFooter>
          <p className="text-sm sm:text-base">{description}</p>
        </CardFooter>
      </Card>
    </motion.div>
  );
};
