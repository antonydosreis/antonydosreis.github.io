function goto(url) {
  document.querySelector(".load-out").classList.add("active");
  setTimeout(() => {
    location.href = url;
  }, 250);
}
