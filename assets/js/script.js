/***********************************/
/* VARIABLES */
/***********************************/
const header = document.querySelector(".header");
const logoImg = document.querySelector(".header__logo-img");
const nav = document.querySelector(".nav");
const sections = document.querySelectorAll("section[id]");
const hero = document.querySelector(".hero");
const faq = document.querySelectorAll(".faq");
const year = document.querySelector(".year");
const scrollTopBtn = document.querySelector(".scroll-top-btn");
const newsletter = document.querySelector(".popup-wrapper");
const popupCloseBtnOne = document.querySelector(".popup__icon");
const popupCloseBtnTwo = document.querySelector(".popup__close-text");
const preloader = document.querySelector(".preloader");
logoImg.src = "assets/images/logo-white.svg";
/****** onScroll Function ******/
const onScroll = function (e) {
  if (window.scrollY > 80) {
    /* Adding active class on header */
    header.classList.add("active");
    /* Changing logo on scroll */
    logoImg.src = "assets/images/logo.svg";
    /* Showing the Navigation */
    nav.classList.add("active");
    /* Showing Scroll To Top Button */
    scrollTopBtn.classList.add("active");
  } else {
    /* Removing active class on header */
    header.classList.remove("active");
    /* Changing logo on scroll */
    logoImg.src = "assets/images/logo-white.svg";
    /* Hiding the Navigation */
    nav.classList.remove("active");
    /* Hiding Scroll To Top Button */
    scrollTopBtn.classList.remove("active");
  }
};
/****** Adding Scroll Event ******/
window.addEventListener("scroll", onScroll);

// Add an event listener listening for scroll
window.addEventListener("scroll", navHighlighter);

function navHighlighter() {
  // Get current scroll position
  let scrollY = window.pageYOffset;

  // Now we loop through sections to get height, top and ID values for each
  sections.forEach((current) => {
    const sectionHeight = current.offsetHeight;
    const sectionTop = current.offsetTop - 65;
    sectionId = current.getAttribute("id");

    if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
      document
        .querySelector(".nav a[href*=" + sectionId + "]")
        .classList.add("active");
    } else {
      document
        .querySelector(".nav a[href*=" + sectionId + "]")
        .classList.remove("active");
    }
  });
}

/****** FAQ TOGGLE ******/
for (let item of faq) {
  item.addEventListener("click", () => {
    item.classList.toggle("active");
  });
}

/****** SET THE YEAR ******/
year.innerText = new Date().getFullYear() + " .";

/****** SCROLL TO TOP BUTTON ******/
const scrollTop = function (e) {
  // Prevent the default behavior
  e.preventDefault();
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
};
scrollTopBtn.addEventListener("click", scrollTop);

/****** SHOW NEWSLETTER ******/
const showNewsletter = function () {
  newsletter.classList.remove("hidden");
};
setTimeout(showNewsletter, 20000);

/****** HIDE NEWSLETTER ******/
const hideNewsletter = function () {
  newsletter.classList.add("hidden");
};
popupCloseBtnOne.addEventListener("click", hideNewsletter);
popupCloseBtnTwo.addEventListener("click", hideNewsletter);

/****** HIDING PRELOADER ******/
const hidePreloader = function () {
  preloader.classList.add("hidden");
  hero.classList.add("active");
};
window.addEventListener("load", hidePreloader);
