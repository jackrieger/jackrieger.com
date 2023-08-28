const topButton = document.querySelector(".js-top-button");

topButton.addEventListener("click", function () {
  window.scrollTo({
    behavior: "smooth",
    top: 0,
  });
});
