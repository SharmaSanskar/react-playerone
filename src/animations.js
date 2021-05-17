// Frame motion animation variants

export const fadeIn = {
  hidden: {
    opacity: 0,
  },
  show: {
    opacity: 1,
    transition: {
      duration: 0.75,
    },
  },
};

export const popup = {
  hidden: {
    opacity: 0,
    scale: 0.8,
  },
  show: {
    opacity: 1,
    scale: 1,
    transition: { ease: 'easeOut', duration: 0.75 },
  },
};

export const loaderAnimation = {
  bounce: {
    x: [-20, 20],
    y: [0, -30],
    transition: {
      x: {
        repeat: Infinity,
        repeatType: 'mirror',
        duration: 0.5,
      },
      y: {
        repeat: Infinity,
        repeatType: 'mirror',
        duration: 0.25,
        ease: 'easeOut',
      },
    },
  },
};
