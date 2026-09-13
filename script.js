const printButton = document.querySelector("#printButton");

if (printButton) {
  printButton.addEventListener("click", () => window.print());
}
