let clicked = 1;
const mq = window.matchMedia("(max-width: 500px)");
const mz = window.matchMedia("(min-width: 500px)");

document.querySelector("div").addEventListener("click", function() {
  hidden = document.querySelectorAll(".hidden");
  if (mq.matches) {
    hidden.forEach(function(el) {
      if (clicked % 2) {
        el.style.opacity = "1";
      } else {
        el.style.opacity = "0";
      }
    });
    clicked += 1;
  }
});

window.addEventListener("resize", function() {
  if (mq.matches) {
    document.querySelectorAll(".hidden").forEach(function(el) {
      el.style.opacity = "0";
      clicked = 1;
    });
  }
});

window.addEventListener("resize", function() {
  if (mz.matches) {
    document.querySelectorAll(".hidden").forEach(function(el) {
      el.style.opacity = "1";
    });
  }
});
