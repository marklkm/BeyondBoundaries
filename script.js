document.addEventListener("DOMContentLoaded", function () {
  const highContrastBtn = document.getElementById("highContrastButton");
  const resetContrastBtn = document.getElementById("resetContrastButton");
  const mainContent = document.querySelector("main");

  if (highContrastBtn && resetContrastBtn && mainContent) {
    highContrastBtn.addEventListener("click", function () {
      mainContent.classList.add("high-contrast");
    });

    resetContrastBtn.addEventListener("click", function () {
      mainContent.classList.remove("high-contrast");
    });
  }
});
