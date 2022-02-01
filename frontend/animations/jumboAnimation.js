//jumbo info section
export const jumboInfoSection = {
  hidden: { opacity: 0, x: -200 },
  show: {
    opacity: 1,
    x: 0,
    transition: { duration: 1.2, ease: 'easeOut', staggerChildren: 0.2 },
  },
};

//picture container div
export const jumboPictureSection = {
  hidden: { opacity: 0, x: 500 },
  show: {
    opacity: 1,
    x: 0,
    transition: { duration: 1.2, ease: 'easeIn', staggerChildren: 0.2 },
  },
};

export const jumboInfoChildren = {
  hidden: { opacity: 0, x: -100 },
  show: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.5, ease: 'easeOut' },
  },
};

export const jumboInfoChildren2 = {
  hidden: { opacity: 0, x: 100 },
  show: {
    opacity: 1,
    x: 0,
    transition: { duration: 1.5, ease: 'easeOut' },
  },
};

export const jumboPictureChildren = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { duration: 1.5, ease: 'easeOut' },
  },
};
