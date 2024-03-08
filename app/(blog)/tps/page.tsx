import { Working } from "@/features/working";
import type { PageParams } from "@/types/next";

export default async function RoutePage(props: PageParams<{}>) {
  return <Working />;
}
