import { PropsWithChildren } from "react";

export const ColumnParagraph = ({
  icon,
  children,
}: PropsWithChildren<{
  icon: string;
}>) => {
  return (
    <div className="flex flex-col gap-5">
      <span className="text-6xl">{icon}</span>
      <p className="text-lg">{children}</p>
    </div>
  );
};
