//Header
export const projectTitle = {
  hidden: { opacity: 0, x: -100, y: 100 },
  show: {
    opacity: 1,
    y: 0,
    x: 0,
    transition: { duration: 0.5, ease: 'easeOut' },
  },
};

export const buttonContainerAnimation = {
  hidden: {
    opacity: 0,
  },
  show: {
    opacity: 1,

    transition: { duration: 0.5, staggerChildren: 0.2 },
  },
};
export const button1Animation = {
  hidden: {
    x: -100,
    opacity: 0,
  },
  show: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.8, type: 'spring', bounce: 0.65 },
  },
};
export const button2Animation = {
  hidden: {
    x: 100,
    opacity: 0,
  },
  show: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.8, type: 'spring', bounce: 0.65 },
  },
};
