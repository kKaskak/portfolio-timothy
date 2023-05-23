const wrapper = {
  hidden: {
    y: 100,
    opacity: 0,
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

export { wrapper };
