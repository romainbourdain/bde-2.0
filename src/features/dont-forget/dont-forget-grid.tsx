"use client";

import { motion, useAnimation } from "framer-motion";
import { useEffect } from "react";
import { useInView } from "react-intersection-observer";
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
  const controls = useAnimation();
  const [ref, inView] = useInView();

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [controls, inView]);

  return (
    <motion.div
      className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4"
      animate={controls}
      initial="hidden"
      variants={variants}
      ref={ref}
    >
      {items.map((item, index) => (
        <DontForgetCard key={index} {...item} />
      ))}
    </motion.div>
  );
};
