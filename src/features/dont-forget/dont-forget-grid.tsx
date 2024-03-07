"use client";

import { useAnimateInView } from "@/hooks/useAnimateInView";
import { motion } from "framer-motion";
import { DontForgetCard, DontForgetCardProps } from "./dont-forget-card";

export type DontForgetGridProps = {
  items: DontForgetCardProps[];
};

const variants = {
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 1 },
  },
  hidden: { opacity: 0, y: -100 },
};

export const DontForgetGrid = ({ items }: DontForgetGridProps) => {
  const { ref, controls } = useAnimateInView();

  return (
    <motion.div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
      {items.map((item, index) => (
        <DontForgetCard key={index} {...item} />
      ))}
    </motion.div>
  );
};
