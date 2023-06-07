function setTitle(element) {
  const text = element.innerText;

  document.title = `${text} | TriTravel`;
}

function toggleMenuButton() {
  document.getElementById("menu-list").classList.toggle("show");
}

function getStartButton() {
  const bannerHeight = document.getElementById("hero").clientHeight;
  const headerHeight = document.getElementsByClassName("header")[0].clientHeight;

  window.scrollBy(0, bannerHeight - headerHeight);
}
