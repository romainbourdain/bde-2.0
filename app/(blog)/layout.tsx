import { PropsWithChildren } from "react";

export default async function RouteLayout({ children }: PropsWithChildren) {
  return (
    <main className="min-h-screen h-full w-full mt-[66px] px-6 sm:px-10 py-12 flex justify-center">
      {children}
    </main>
  );
}
