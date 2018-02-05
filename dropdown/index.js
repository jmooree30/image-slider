clicked = 1;
document.querySelector("div").addEventListener("click", function() {
  hidden = document.querySelectorAll(".hidden");
  hidden.forEach(function(el) {
    if (clicked % 2) {
      el.style.opacity = "1";
    } else {
      el.style.opacity = "0";
    }
  });
  clicked += 1;
});
