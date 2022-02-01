//Header
export const titleAnimation = {
  initial: {
    opacity: 0,
    x: -200,
  },
  animate: {
    x: 0,
    opacity: 1,
  },
  transition: {
    type: 'spring',
    stiffness: 100,
  },
};

export const linksAnimation = {
  initial: {
    opacity: 0,
    x: 200,
  },
  animate: {
    x: 0,
    opacity: 1,
  },
  transition: {
    type: 'spring',
    stiffness: 100,
  },
};
