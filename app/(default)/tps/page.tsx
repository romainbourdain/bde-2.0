import { Working } from "@/features/working";
import type { PageParams } from "@/types/next";

export default async function TPSPage(props: PageParams<{}>) {
  return <Working />;
}
