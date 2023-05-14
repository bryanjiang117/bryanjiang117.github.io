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
        if (entry.target.classList.contains("card")) {
          resetCard(entry.target);
        }
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
  const cards = document.querySelectorAll(".card");
  for (let i = 0; i < 3; i++) {
    const classList = cards[i].classList;
    classList.remove("short-delay");
    classList.remove("long-delay");
    classList.add("no-delay");
    if (classList.contains("front-card")) {
      classList.remove("front-card");
      classList.add("back-card");
      classList.remove("show");
      classList.add("hide-card");
    } else if (classList.contains("middle-card")) {
      classList.remove("middle-card");
      classList.add("front-card");
    } else if (classList.contains("back-card")) {
      classList.remove("back-card");
      classList.add("middle-card");
      classList.remove("show");
      classList.add("hide-card");
    }
  }
  setTimeout(spreadCards, 100);
}

function spreadCards() {
  const cards = document.querySelectorAll(".card");
  for (let i = 0; i < 3; i++) {
    const classList = cards[i].classList;
    classList.remove("no-delay");
    if (classList.contains("middle-card")) {
      classList.add("short-delay");
      classList.remove("hide-card");
      classList.add("show");
    } else if (classList.contains("back-card")) {
      classList.add("long-delay");
      classList.remove("hide-card");
      classList.add("show");
    }
  }
}

function resetCard(card) {
  classList = card.classList;
  classList.remove("front-card");
  classList.remove("middle-card");
  classList.remove("back-card");
  classList.remove('short-delay');
  classList.remove('long-delay');
  if (classList.contains("card-1")) {
    classList.add("front-card");
  } else if (classList.contains("card-2")) {
    classList.add("middle-card");
  } else if (classList.contains('card-3')) {
    classList.add("back-card");
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
