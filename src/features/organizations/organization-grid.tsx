import { PropsWithChildren } from "react";

export type OrganizationGridProps = PropsWithChildren<{}>;

export const OrganizationGrid = ({ children }: OrganizationGridProps) => {
  return (
    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
      {children}
    </div>
  );
};
