import { useInView } from 'react-intersection-observer';
import { useAnimation } from 'framer-motion';
export const useScroll = (num) => {
  num = num || 0.5;
  const controls = useAnimation();
  const [element, view] = useInView({ threshold: num });
  if (view) {
    controls.start('show');
  }
  return [element, controls];
};
