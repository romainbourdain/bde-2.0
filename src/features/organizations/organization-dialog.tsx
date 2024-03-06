"use client";

import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import { PropsWithChildren } from "react";
import { OrganizationInformation } from "./organization-information";

export type OrganizationDialogProps = PropsWithChildren<{
  id: number;
}>;

export const OrganizationDialog = ({
  children,
  id,
}: OrganizationDialogProps) => {
  return (
    <Dialog>
      <DialogTrigger asChild>{children}</DialogTrigger>
      <DialogContent>
        <OrganizationInformation id={id} />
      </DialogContent>
    </Dialog>
  );
};
