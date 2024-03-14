let pages = document.querySelectorAll(".page");
let section = document.querySelector("section");
let sectionWidth;
let pageWidth;
let currentPos = 0;

function init() {
  sectionWidth = slider.getBoundingClientRect().width;
  pageWidth = sectionWidth / items.length;
  document.body.style.height = `${
    sectionWidth - (window.innerWidth - window.innerHeight)
  }px`;
}

function setSectionWidth() {
  let totalWidth = 0;
 pages.forEach((page) => {
    totalWidth += page.offsetWidth;
  });

  section.style.width = `${totalWidth}px`;
}

function animate() {
  init();
  setSectionWidth();
  currentPos = window.scrollY;
  section.style.transform = `translateX(${-currentPos}px)`;
  requestAnimationFrame(animate);
}

animate();
