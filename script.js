/*****************************************Navigation Bar******************************************/

const toggleBtn = document.querySelector(".toggle_btn");
const toggleBtnIcon = document.querySelector(".toggle btn i");
const dropDownMenu = document.querySelector(".dropdown_menu");
const toggleBtnIconClose = document.querySelector(".toggle_btn i .close");

toggleBtn.onclick = function () {
  dropDownMenu.classList.toggle("open");
  const isOpen = dropDownMenu.classList.contains("open");
};

/*****************************************Search Filter******************************************/

const optionMenu = document.querySelector(".select-menu"),
  selectBtn = optionMenu.querySelector(".select-btn"),
  options = optionMenu.querySelectorAll(".option"),
  sBtn_text = optionMenu.querySelector(".sBtn-text");

selectBtn.addEventListener("click", () =>
  optionMenu.classList.toggle("active")
);

/*****************************************Featured******************************************/

document.getElementById("next-featured").onclick = function () {
  const widthItem = document.querySelector(".item-featured").offsetWidth;
  document.getElementById("formList-featured").scrollLeft += widthItem + 20;
};
document.getElementById("prev-featured").onclick = function () {
  const widthItem = document.querySelector(".item-featured").offsetWidth;
  document.getElementById("formList-featured").scrollLeft -= widthItem + 20;
};

/*****************************************Newly******************************************/

document.getElementById("next-newly").onclick = function () {
  const widthItem = document.querySelector(".item-newly").offsetWidth;
  document.getElementById("formList-newly").scrollLeft += widthItem + 20;
};
document.getElementById("prev-newly").onclick = function () {
  const widthItem = document.querySelector(".item-newly").offsetWidth;
  document.getElementById("formList-newly").scrollLeft -= widthItem + 20;
};

/*****************************************Exclusive******************************************/

document.getElementById("next-exclusive").onclick = function () {
  const widthItem = document.querySelector(".item-exclusive").offsetWidth;
  document.getElementById("formList-exclusive").scrollLeft += widthItem + 20;
};
document.getElementById("prev-exclusive").onclick = function () {
  const widthItem = document.querySelector(".item-exclusive").offsetWidth;
  document.getElementById("formList-exclusive").scrollLeft -= widthItem + 20;
};

/*****************************************Handpicked******************************************/

document.getElementById("next-handpicked").onclick = function () {
  const widthItem = document.querySelector(".item-handpicked").offsetWidth;
  document.getElementById("formList-handpicked").scrollLeft += widthItem + 20;
};
document.getElementById("prev-handpicked").onclick = function () {
  const widthItem = document.querySelector(".item-handpicked").offsetWidth;
  document.getElementById("formList-handpicked").scrollLeft -= widthItem + 20;
};

/*****************************************Demand******************************************/

document.getElementById("next-demand").onclick = function () {
  const widthItem = document.querySelector(".item-demand").offsetWidth;
  document.getElementById("formList-demand").scrollLeft += widthItem + 20;
};
document.getElementById("prev-demand").onclick = function () {
  const widthItem = document.querySelector(".item-demand").offsetWidth;
  document.getElementById("formList-demand").scrollLeft -= widthItem + 20;
};

/*****************************************Commercial******************************************/

document.getElementById("next-commercial").onclick = function () {
  const widthItem = document.querySelector(".item-commercial").offsetWidth;
  document.getElementById("formList-commercial").scrollLeft += widthItem + 20;
};
document.getElementById("prev-commercial").onclick = function () {
  const widthItem = document.querySelector(".item-commercial").offsetWidth;
  document.getElementById("formList-commercial").scrollLeft -= widthItem + 20;
};

/*****************************************Scroll To Top******************************************/

var scrollToTopBtn = document.querySelector(".scrollToTopBtn");
var scrollToSearch = document.querySelector(".scrollToSearch");
var rootElement = document.documentElement;

function handleScroll() {
  // Do something on scroll
  var scrollTotal = rootElement.scrollHeight - rootElement.clientHeight;
  if (rootElement.scrollTop / scrollTotal > 0.1) {
    // Show button
    scrollToTopBtn.classList.add("showBtn");
    scrollToSearch.classList.add("showBtn");
  } else {
    // Hide button
    scrollToTopBtn.classList.remove("showBtn");
    scrollToSearch.classList.remove("showBtn");
  }
}

function scrollToTop() {
  // Scroll to top logic
  rootElement.scrollTo({
    top: 0,
    behavior: "smooth",
  });
}
scrollToTopBtn.addEventListener("click", scrollToTop);
document.addEventListener("scroll", handleScroll);
