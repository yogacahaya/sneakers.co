let menuToggle= document.querySelector('.menuToggle');
let sidebar= document.querySelector('.sidebar');
menuToggle.onclick = function(){
    menuToggle.classList.toggle('active');
    sidebar.classList.toggle('active');
}

let menulist = document.querySelectorAll('.menulist li');
function activeLink(){
    menulist.forEach ((item) =>
    item.classList.remove('active'));
    this.classList.add('active')
}
menulist.forEach((item)=>
item.addEventListener('click', activeLink));

function imgSlider(anything){
    document.querySelector ('.jordan').src= anything;
}

function changeCircleColor(color){
    const circle = document.querySelector('.circle');
    circle.style.background = color;
}

    var swiper = new Swiper(".mySwiper", {
      slidesPerView: 1,
      spaceBetween: 10,
      pagination: {
        el: ".swiper-pagination",
        clickable: true,
      },
      breakpoints: {
        "@0.00": {
          slidesPerView: 1,
          spaceBetween: 10,
        },
        "@0.75": {
          slidesPerView: 2,
          spaceBetween: 20,
        },
        "@1.00": {
          slidesPerView: 3,
          spaceBetween: 40,
        },
        "@1.50": {
          slidesPerView: 4,
          spaceBetween: 50,
        },
      },
    });