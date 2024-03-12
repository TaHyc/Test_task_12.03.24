const slider = document.getElementById("percentSlider");
const valueDisplay = document.getElementById("sliderValue");

slider.addEventListener("change", function() {
    console.log(slider.value)
  valueDisplay.textContent = `${slider.value} %` ;
});
