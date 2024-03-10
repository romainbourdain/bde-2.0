import { NotFoundPage } from "@/features/pages/Error404";
import type { PageParams } from "@/types/next";

export default async function ErrorPage(props: PageParams<{}>) {
  return (
    <div className="min-h-screen h-full">
      <NotFoundPage />
    </div>
  );
}
