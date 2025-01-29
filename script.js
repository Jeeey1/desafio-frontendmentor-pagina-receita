function initNavMenu() {
  const menuNav = document.querySelectorAll('.menu a[href^="#"]');

  function addScrollSmooth(e) {
    e.preventDefault();
    const href = this.getAttribute("href");
    const section = document.querySelector(href);
    const topo = section.offsetTop;
    console.log(topo);
    
    window.scrollTo({
      top: topo - 90,
      behavior: "smooth",
    })
  }

  menuNav.forEach((item) => {
    item.addEventListener("click", addScrollSmooth);
  });
}
initNavMenu();

window.addEventListener("scroll", () => {
  const menu = document.querySelector(".menu-items");
  const scrollTop = window.scrollY;

  if (scrollTop >= 90) {
      menu.classList.add("fixed-menu");
  } else{
      menu.classList.remove("fixed-menu");
  }
});
