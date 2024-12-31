window.addEventListener('load', () =>{
  document.body.style.display = "flex"
})

function anim_toggle() {
  elements.forEach((element) => {
    element.classList.toggle("paused");
    element.removeEventListener("click", anim_toggle);

    setTimeout(add, 1500, element);
  });
}

function add(element) {
  element.addEventListener("click", anim_toggle);
  element.classList.toggle("paused");
}

const elements = Array.from(document.querySelectorAll(".card"));
elements.forEach((element) => {
  add(element);
});
