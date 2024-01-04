const findHeaderHeight = () => {
  let header = document.getElementById("header-sticky");
  let headerHeight = getComputedStyle(header).height.slice(0, -2);
  setTimeout(() => {
    window.scrollTo({
      top: window.scrollY - headerHeight,
      behavior: "smooth",
    });
  }, 10);
  return getComputedStyle(header).height;
};

export default findHeaderHeight;
