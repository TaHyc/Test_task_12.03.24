const slider = document.getElementById("percentSlider");
const valueDisplay = document.getElementById("sliderValue");
let scrollTopButton = document.getElementById("scrollBtn");

slider.addEventListener("change", function() {
    console.log(slider.value)
  valueDisplay.textContent = `${slider.value} %` ;
});

window.addEventListener("scroll", function () {
  if (window.scrollY > 100) {
    scrollTopButton.classList.add("show");
    scrollTopButton.addEventListener("click", function () {
      window.scrollTo({top: 0,behavior: "smooth"});
    })
  } else {
    scrollTopButton.classList.remove("show");
  }
});
