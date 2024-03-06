import lottieLoader from "@/../public/lottie/loader.json";
import Lottie from "lottie-react";

export const Loader = () => {
  return (
    <Lottie
      animationData={lottieLoader}
      loop
      autoPlay
      className="w-[500px] m-auto"
    />
  );
};
