import styles from '@/styles/Carousel.module.scss';
import React, { useState } from 'react';
import { AiOutlineArrowRight, AiOutlineArrowLeft } from 'react-icons/ai';
import { useSwipeable } from 'react-swipeable';
import { useScroll } from '../../animations/useScroll';
import {
  projectTitle,
  buttonContainerAnimation,
  button1Animation,
  button2Animation,
} from '../../animations/offersAnimations';
import { motion } from 'framer-motion';
export const CarouselItem = ({ children, width }) => {
  return (
    <div className={styles.carouselItem} style={{ width: width }}>
      {children}
    </div>
  );
};

const Carousel = ({ children }) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [element, controls] = useScroll(0.55);

  const updateIndex = (newIndex) => {
    if (newIndex < 0) {
      newIndex = 0;
    } else if (newIndex >= React.Children.count(children)) {
      newIndex = React.Children.count(children) - 1;
    }

    setActiveIndex(newIndex);
  };

  const handlers = useSwipeable({
    onSwipedLeft: () => updateIndex(activeIndex + 1),
    onSwipedRight: () => updateIndex(activeIndex - 1),
  });
  return (
    <div className={styles.carousel} {...handlers} ref={element}>
      <div
        className={styles.inner}
        style={{ transform: `translateX(-${activeIndex * 100}%)` }}
      >
        {React.Children.map(children, (child, index) => {
          return React.cloneElement(child, { width: '100%' });
        })}
      </div>

      <motion.div
        className={styles.indicators}
        initial="hidden"
        animate={controls}
        variants={buttonContainerAnimation}
      >
        <motion.button
          onClick={() => {
            updateIndex(activeIndex - 1);
          }}
          variants={button1Animation}
        >
          <AiOutlineArrowLeft /> prev
        </motion.button>

        <motion.button
          variants={button2Animation}
          onClick={() => {
            updateIndex(activeIndex + 1);
          }}
        >
          Next <AiOutlineArrowRight />
        </motion.button>
      </motion.div>
    </div>
  );
};

export default Carousel;
