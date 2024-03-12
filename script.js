const slider = document.getElementById("percentSlider");
const valueDisplay = document.getElementById("sliderValue");

slider.addEventListener("change", function() {
    console.log(slider.value)
  valueDisplay.textContent = `${slider.value} %` ;
});

document.addEventListener("DOMContentLoaded", function() {
    document.getElementById("burger").addEventListener("click", function() {
        document.querySelector("header").classList.toggle("open")
    })
})
