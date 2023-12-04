// HIGH CONTRAST BUTTONS

document.addEventListener("DOMContentLoaded", function () {
  const highContrastBtn = document.getElementById("highContrastButton");
  const resetContrastBtn = document.getElementById("resetContrastButton");

  highContrastBtn.addEventListener("click", function () {
    this.classList.add("active");
  });

  resetContrastBtn.addEventListener("click", function () {
    highContrastBtn.classList.remove("active");
  });
});
