let noteContainer = document.querySelector(".note-container");
let btn = document.querySelector(".btn");
let notes = document.querySelectorAll(".input-box");

function Show() {
  noteContainer.innerHTML = localStorage.getItem("Notes");
}
Show();

function UpdateStorage() {
  localStorage.setItem("Notes", noteContainer.innerHTML);
}

btn.addEventListener("click", () => {
  let inputBox = document.createElement("p");
  let img = document.createElement("img");

  inputBox.className = "input-box";
  inputBox.setAttribute("contenteditable", "true");
  img.src = "delete.png";
  noteContainer.appendChild(inputBox).appendChild(img);
  UpdateStorage();
});

noteContainer.addEventListener("click", function (e) {
  if (e.target.tagName === "IMG") {
    e.target.parentElement.remove();
    UpdateStorage();
  } else if (e.target.tagName === "P") {
    let notes = document.querySelectorAll(".input-box");
    notes.forEach((nt) => {
      nt.onkeyup = function () {
        UpdateStorage();
      };
    });
  }
});

document.addEventListener("keydown", (event) => {
  if (event.key === "Enter") {
    document.execCommand("insertLineBreak");
    event.preventDefault();
  }
});
