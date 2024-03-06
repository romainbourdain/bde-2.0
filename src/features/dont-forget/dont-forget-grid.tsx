import { DontForgetCard, DontForgetCardProps } from "./dont-forget-card";

export type DontForgetGridProps = {
  items: DontForgetCardProps[];
};

export const DontForgetGrid = ({ items }: DontForgetGridProps) => {
  return (
    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
      {items.map((item, index) => (
        <DontForgetCard key={index} {...item} />
      ))}
    </div>
  );
};
