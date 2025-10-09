const buttons = document.querySelectorAll(".accordion-btn");

buttons.forEach(btn => {
  btn.addEventListener("click", () => {
    const content = btn.nextElementSibling;

    btn.classList.toggle("active");

    if (btn.classList.contains("active")) {
      content.style.maxHeight = content.scrollHeight + "px";
      content.style.padding = "20px";
    } else {
      content.style.maxHeight = "0";
      content.style.padding = "0 20px";
    }
  });
});
