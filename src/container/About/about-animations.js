const h2 = {
  hidden: {
    opacity: 0,
    y: -100,
  },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
    },
  },
};

const appProfiles = {
  hidden: {
    opacity: 0,
    y: 100,
  },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      type: "tween",
    },
  },
};
const hover = {
  scale: 1.05,
  transition: {
    duration: 0.5,
    type: "spring",
  },
};
export { appProfiles, hover, h2 };
