const elements = Array.from(document.querySelectorAll("body > div > div"));

function add(element) {
  element.addEventListener("click", anim_toggle);
  element.classList.toggle("paused");
}

elements.forEach((element) => {
  add(element);
});

function anim_toggle() {
  elements.forEach((element) => {
    element.classList.toggle("paused");
    element.removeEventListener("click", anim_toggle);
    setTimeout(add, 3000, element);
  });
}
