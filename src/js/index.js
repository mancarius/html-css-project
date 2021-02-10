import {
  progressRing,
  toggleContacts,
  toggleNav,
  navTo,
  findElementOnScreen
} from "./modules/modules";

window.addEventListener("resize", function () {
  progressRing.init(".progress-ring");
  findElementOnScreen();
});

window.addEventListener("orientationchange", function () {
  progressRing.init(".progress-ring");
});

//////////////////////////////////////////////
// Navigation
//////////////////////////////////////////////

//////////////////////////////////////////////
// Toggle Nav
//////////////////////////////////////////////

// hamburger on click
$(".button-hamburger").on("click", toggleNav);

// menu items on click
$("a[data-target]").on("click", (e) => {
  e.preventDefault();
  // disable scroll event listener
  const el = e.target;
  const target = "#" + el.dataset.target;
  navTo(target);
});

// close on background/anchor tap

$("#main-menu").on("click", toggleNav);

//////////////////////////////////////////////
// Highlight Active Menu Item Based On Scroll
//////////////////////////////////////////////

window.addEventListener(
  "scroll",
  (e) => {
    findElementOnScreen();
  },
  {
    passive: true
  }
);

/////////////////////
// Page Loader Frame
/////////////////////

$(".loading-frame .ball")
  .addClass("expand")
  .parent()
  .delay(1000)
  .fadeOut(() => {
    // don't show scrollbar if contacts frame is open
    if (window.location.hash !== "#contacts")
      $("body").removeClass("no-scroll");
    else $("body").addClass("no-scroll");
  });

//open contacts frame if hash point on #contacts
if (window.location.hash === "#contacts") {
  toggleContacts();
}
