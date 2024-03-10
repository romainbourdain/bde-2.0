import { NotFound } from "@/features/pages/not-found";
import type { PageParams } from "@/types/next";

export default async function ErrorPage(props: PageParams<{}>) {
  return (
    <div className="min-h-screen h-full">
      <NotFound />
    </div>
  );
}
