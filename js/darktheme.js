const btn = document.getElementById("darkToggle");
const icon = btn.querySelector("i");

if (localStorage.getItem("tema") === "dark") {
  document.body.classList.add("dark");
  icon.classList.replace("bi-brightness-high-fill", "bi-moon-fill");
}

btn.addEventListener("click", () => {
  document.body.classList.toggle("dark");

  if (document.body.classList.contains("dark")) {
    localStorage.setItem("tema", "dark");
    icon.classList.replace("bi-brightness-high-fill", "bi-moon-fill");
  } else {
    localStorage.setItem("tema", "light");
    icon.classList.replace("bi-moon-fill", "bi-brightness-high-fill");
  }
});