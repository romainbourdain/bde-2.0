"use client";

import { scaleAnimation } from "@/animations/scale";
import { AnimatedFrame } from "@/components/animated-frame";
import { DontForgetCard, DontForgetCardProps } from "./dont-forget-card";

export type DontForgetGridProps = {
  items: DontForgetCardProps[];
};

export const DontForgetGrid = ({ items }: DontForgetGridProps) => {
  return (
    <AnimatedFrame variants={scaleAnimation}>
      <div className="card-grid">
        {items.map((item, index) => (
          <DontForgetCard key={index} {...item} />
        ))}
      </div>
    </AnimatedFrame>
  );
};
