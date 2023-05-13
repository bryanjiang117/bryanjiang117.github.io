var root = document.querySelector(":root");
var styles = getComputedStyle(root);
var darkNavy = styles.getPropertyValue("--d-navy");
var aqua = styles.getPropertyValue("--aqua");
var gray = styles.getPropertyValue("--gray");

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

function moveCard() {
  
  var cards = document.querySelectorAll('.card');
  for (let i = 0; i < 3; i++) {
    const card = cards[i];
    const classList = card.classList;
    if (classList.contains("card-back")) {
      classList.remove("card-back");
      classList.add("card-forward");
    } else if (classList.contains("card-forward")) {
      classList.remove("card-forward");
      classList.add("card-front");
    } else if (classList.contains("card-front")) {
      classList.remove("card-front");
      classList.add("card-back");
    } else if (card.id == "card1") {
      classList.add("card-back");
    } else if (card.id == "card2") {
      classList.add("card-front");
    } else if (card.id == "card3") {
      classList.add("card-forward");
    } else {
      alert("error");
    }
  }
}

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
