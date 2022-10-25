const item = document.querySelector(".item"),
  placeholder = document.querySelectorAll(".placeholder");

item.addEventListener("dragstart", dragstart);
item.addEventListener("dragend", dragend);

placeholder.forEach((item) => {
  item.addEventListener("dragover", dragover);
  item.addEventListener("dragenter", dragenter);
  item.addEventListener("dragleave", dragleave);
  item.addEventListener("drop", dragdrop);
});

function dragstart(el) {
  el.target.classList.add("hold");
  setTimeout(() => {
    el.target.classList.add("hide");
  }, 0);
}
function dragend(el) {
  el.target.className = "item";
}

function dragover(el) {
  el.preventDefault();
}
function dragenter(el) {
  el.target.classList.add("enteritem");
}
function dragleave(el) {
  el.target.classList.remove("enteritem");
}
function dragdrop(el) {
  el.target.append(item);
  el.target.classList.remove("enteritem");
}
