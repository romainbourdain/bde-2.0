import { PropsWithChildren } from "react";

export default async function RouteLayout({ children }: PropsWithChildren) {
  return (
    <div className="flex justify-center w-full h-full">
      <main className="max-w-[1200px] w-full min-h-screen h-full mt-[66px] p-4">
        {children}
      </main>
    </div>
  );
}
