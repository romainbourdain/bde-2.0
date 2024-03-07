"use client";

import { useAnimateInView } from "@/hooks/useAnimateInView";
import { Variants, motion } from "framer-motion";
import { PropsWithChildren } from "react";

export const AnimatedFrame = ({
  children,
  variants,
  className,
}: PropsWithChildren<{ variants: Variants; className?: string }>) => {
  const { ref, controls } = useAnimateInView();

  return (
    <motion.div
      ref={ref}
      animate={controls}
      variants={variants}
      initial="hidden"
      className={className}
    >
      {children}
    </motion.div>
  );
};
