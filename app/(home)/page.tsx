import { WorkingPage } from "@/features/pages/working";
import type { PageParams } from "@/types/next";

export default async function HomePage(props: PageParams<{}>) {
  return (
    <div className="min-h-screen h-full">
      <WorkingPage />
    </div>
  );
}
