let scrlTop = document.querySelector(".scroll-top");

// We Have an old window.onscroll event so we added the code to it to make the two events at the same time

window.onscroll = function () {
  this.scrollY >= 600
    ? scrlTop.classList.add("top-on")
    : scrlTop.classList.remove("top-on");
};

scrlTop.onclick = function () {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
};

// ToolTips in Bootstrap

var tooltipTriggerList = [].slice.call(
  document.querySelectorAll('[data-bs-toggle="tooltip"]')
);
var tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
  return new bootstrap.Tooltip(tooltipTriggerEl);
});
