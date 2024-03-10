import { WorkingPage } from "@/features/pages/working";
import type { PageParams } from "@/types/next";

export default async function TPSPage(props: PageParams<{}>) {
  return <WorkingPage />;
}
