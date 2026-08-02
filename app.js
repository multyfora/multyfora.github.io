const themeToggle = document.querySelector(".sun-container");

const savedTheme = localStorage.getItem("theme");
if (
  savedTheme === "dark" ||
  (savedTheme === null && window.matchMedia("(prefers-color-scheme: dark)").matches)
) {
  document.body.classList.add("dark");
}

themeToggle.addEventListener("click", () => {
  const dark = document.body.classList.toggle("dark");
  localStorage.setItem("theme", dark ? "dark" : "light");
});

document.querySelectorAll("[data-link]").forEach((el) => {
  el.addEventListener("click", () => {
    window.location.href = el.dataset.link;
  });
});