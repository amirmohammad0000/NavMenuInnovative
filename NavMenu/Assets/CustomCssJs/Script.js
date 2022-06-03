"use strict";

let SectionNavMenu = document.querySelector(".section_nav_menu");
let SectionInnerNavMenuOne = document.querySelector(
  ".section_inner_nav_menu_one"
);
let SectionInnerNavMenuTwo = document.querySelector(
  ".section_inner_nav_menu_two"
);
let SectionInnerNavMenuThree = document.querySelector(
  ".section_inner_nav_menu_three"
);
let SectionInnerNavMenuFour = document.querySelector(
  ".section_inner_nav_menu_four"
);
let SectionInnerNavMenuFive = document.querySelector(
  ".section_inner_nav_menu_five"
);
let StatusNavMenu = true;

SectionNavMenu.addEventListener("click", () => {
  if (StatusNavMenu) {
    SectionInnerNavMenuOne.style.opacity = "1";
    SectionInnerNavMenuOne.style.top = "-65px";
    SectionInnerNavMenuOne.style.right = "-14px";

    SectionInnerNavMenuTwo.style.opacity = "1";
    SectionInnerNavMenuTwo.style.top = "-15px";
    SectionInnerNavMenuTwo.style.right = "-64px";

    SectionInnerNavMenuThree.style.opacity = "1";
    SectionInnerNavMenuThree.style.top = "35.5px";
    SectionInnerNavMenuThree.style.right = "-114px";

    SectionInnerNavMenuFour.style.opacity = "1";
    SectionInnerNavMenuFour.style.top = "86px";
    SectionInnerNavMenuFour.style.right = "-64px";

    SectionInnerNavMenuFive.style.opacity = "1";
    SectionInnerNavMenuFive.style.top = "136px";
    SectionInnerNavMenuFive.style.right = "-14px";

    StatusNavMenu = false;
  } else {
    SectionInnerNavMenuOne.style.opacity = "0";
    SectionInnerNavMenuOne.style.top = "";
    SectionInnerNavMenuOne.style.right = "";

    SectionInnerNavMenuTwo.style.opacity = "0";
    SectionInnerNavMenuTwo.style.top = "";
    SectionInnerNavMenuTwo.style.right = "";

    SectionInnerNavMenuThree.style.opacity = "0";
    SectionInnerNavMenuThree.style.top = "";
    SectionInnerNavMenuThree.style.right = "";

    SectionInnerNavMenuFour.style.opacity = "0";
    SectionInnerNavMenuFour.style.top = "";
    SectionInnerNavMenuFour.style.right = "";

    SectionInnerNavMenuFive.style.opacity = "0";
    SectionInnerNavMenuFive.style.top = "";
    SectionInnerNavMenuFive.style.right = "";

    StatusNavMenu = true;
  }
});
