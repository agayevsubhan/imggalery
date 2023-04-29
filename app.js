const divHead = document.querySelector(".divHead img");
const imgs = document.querySelectorAll(".imgs img");

const myPtag = document.querySelector(".myPtag");
myPtag.innerText = imgs[0].alt;

imgs.forEach((event) => {
  event.addEventListener("click", function (parametr) {
    divHead.src = parametr.target.src;
    myPtag.innerText = parametr.target.alt;
  });
});
