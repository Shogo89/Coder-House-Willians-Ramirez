document.querySelector(".btn").addEventListener("click", () => {
  let x = document.getElementById("menu");
  x.style.visibility === "" || x.style.visibility === "hidden"
    ? (x.style.visibility = "visible")
    : (x.style.visibility = "hidden");
});
