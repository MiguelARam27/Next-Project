export const fadeSpring = {
  hidden: { x: 100, opacity: 0 },
  show: {
    x: 0,
    opacity: 1,
    transition: { type: 'spring', mass: 1.2 },
  },
};

export const mainComponentAnimation = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,

    transition: { duration: 1.2, ease: 'easeOut', staggerChildren: 0.2 },
  },
};

export const childrenmain = {
  hidden: { opacity: 0, x: -200 },
  show: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.8, type: 'spring', stiffness: 100, bounce: 0.4 },
  },
};
export const contactChildren = {
  hidden: { opacity: 0, x: 200 },
  show: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.8, type: 'spring', stiffness: 100, bounce: 0.4 },
  },
};

export const mapAnimation = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { duration: 0.7, ease: 'easeOut' },
  },
};
