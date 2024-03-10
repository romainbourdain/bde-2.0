import { useAnimation } from "framer-motion";
import { useEffect } from "react";
import { useInView } from "react-intersection-observer";

export const useAnimateInView = () => {
  const controls = useAnimation();
  const [ref, inView] = useInView({ threshold: 0.8 });

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [controls, inView]);

  return { ref, controls };
};
