export const footerTitleFade = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { duration: 2.2, ease: 'easeOut' },
  },
};
export const footerImageAnimation = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { duration: 0.8, ease: 'easeIn' },
  },
};
export const colAnimation = {
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
export const footerButtonAnimation = {
  hidden: {
    x: -100,
    opacity: 0,
  },
  show: {
    opacity: 1,
    x: 0,
    transition: { duration: 1.8, type: 'spring', bounce: 0.65 },
  },
};
export const footerTitleAnimation = {
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
