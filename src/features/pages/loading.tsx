import lottieLoader from "@/../public/lottie/loader.json";
import Lottie from "lottie-react";

export const LoadingPage = () => {
  return (
    <div className="page-center">
      <div className="flex flex-col items-center gap-10">
        <Lottie
          animationData={lottieLoader}
          loop
          autoPlay
          className="w-[250px] m-auto"
        />
        <p className="text-xl text-muted-foreground text-center">
          Chargement ...
        </p>
      </div>
    </div>
  );
};
