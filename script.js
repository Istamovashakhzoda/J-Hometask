document.addEventListener("DOMContentLoaded", function () {
  const counterElement = document.getElementById("counter");
  const incrementBtn = document.getElementById("incrementBtn");
  const decrementBtn = document.getElementById("decrementBtn");
  const resetBtn = document.getElementById("resetBtn");

  let counterValue = 0;

  incrementBtn.addEventListener("click", function () {
    counterValue++;
    counterElement.textContent = counterValue;
  });

  decrementBtn.addEventListener("click", function () {
    counterValue--;
    counterElement.textContent = counterValue;
  });

  resetBtn.addEventListener("click", function () {
    counterValue = 0;
    counterElement.textContent = counterValue;
  });
});
