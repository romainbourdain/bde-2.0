import { PropsWithChildren } from "react";

export default async function RouteLayout({ children }: PropsWithChildren) {
  return (
    <div className="pt-[66px] min-h-screen h-full">
      <main className="w-full h-full py-12 flex justify-center">
        {children}
      </main>
    </div>
  );
}
