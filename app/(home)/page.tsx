import { Working } from "@/features/working";
import type { PageParams } from "@/types/next";

export default async function HomePage(props: PageParams<{}>) {
  return (
    <div className="min-h-screen h-full">
      <Working />
    </div>
  );
}
