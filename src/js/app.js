const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      console.log(entry);
      if (entry.isIntersecting) {
        entry.target.classList.add("show");
      } else {
        entry.target.classList.remove("show");
      }
    });
  },
  {
    threshold: 0.99,
  }
);
const hiddenElements = document.querySelectorAll(
  ".hidden-left, .hidden-left-sm, .hidden-right, .hidden-right-sm"
);
hiddenElements.forEach((el) => observer.observe(el));

// const navbar = document.getElementById("navbar");
// window.addEventListener(
//   "scroll",
//   function () {
//     var scroll = self.pageYOffset;
//     var height = $(window).height();
//     if (scroll < height) {
//       navbar.style.backgroundColor = darkNavy;
//     } else {
//       navbar.style.backgroundColor = gray;
//     }
//   },
//   true
// );
