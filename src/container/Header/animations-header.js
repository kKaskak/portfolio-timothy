const scaleVariants = {
  hidden: { opacity: 0, scale: 0 },
  show: {
    opacity: 1,
    scale: 1,
    transition: {
      delayChildren: 1.1,
      staggerChildren: 0.6,
    },
  },
};
const scaleVariants1 = {
  hidden: { opacity: 0, x: -200 },
  show: {
    x: 0,
    opacity: 1,
    transition: {
      duration: 0.5,
      staggerChildren: 0.5,
    },
  },
};
const scaleVariants2 = {
  hidden: { y: -100, opacity: 0 },
  show: {
    y: 0,
    opacity: 1,
    transition: { duration: 0.5, delayChildren: 0.7, delay: 0.7 },
  },
};
const scaleVariants2Children = {
  hidden: { x: -100, scale: 0 },
  show: {
    x: 0,
    scale: 1,
    transition: { duration: 1, ease: "easeInOut" },
  },
};

const item = {
  hidden: { opacity: 0, scale: 0 },
  show: { opacity: 1, scale: 1 },
};
const opacity = {
  hidden: { opacity: 0, x: -100 },
  show: { opacity: 1, x: 0 },
};

export {
  opacity,
  item,
  scaleVariants,
  scaleVariants1,
  scaleVariants2,
  scaleVariants2Children,
};
