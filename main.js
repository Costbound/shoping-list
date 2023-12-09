const list = document.querySelector(".list");

list.addEventListener("click", (e) => {
  if (e.target.nodeName === "BUTTON" && e.target.textContent === "Done") {
    e.target.classList.add("done");
    e.target.style.backgroundColor = "red";
    e.target.textContent = "Undone";
  } else if (e.target.nodeName === "BUTTON" && e.target.textContent === "Undone") {
      e.target.classList.remove("done");
    e.target.style.backgroundColor = "";
    e.target.textContent = "Done";
  }
})
