const $ = document.querySelector.bind(document);
const $$ = document.querySelectorAll.bind(document);

const headerTopNavs = $$(".header-top__nav-item");

const headerTopNavActive = $(".header-top__nav-item.active");
const line = $(".header-top__nav-list .line");

line.style.left = headerTopNavActive.offsetLeft + "px";
line.style.width = headerTopNavActive.offsetWidth + "px";

headerTopNavs.forEach((tab) => {
    tab.onclick = function () {
        headerTopNavActive.classList.remove("active");

        line.style.left = this.offsetLeft + "px";
        line.style.width = this.offsetWidth + "px";

        this.classList.add("active");
    };
});

const slider = document.querySelector('.slider');
const sliderMain = document.querySelector('.slider-main');
const sliderItems = document.querySelectorAll('.slider-item');
const nextBtn = document.querySelector('.slider-next');
const prevBtn = document.querySelector('.slider-prev');
const dotItems = document.querySelectorAll('.slider-dot-item');
const sliderItemWidth = sliderItems[0].offsetWidth;
const sliderLength = sliderItems.length;
let positionX = 0;
let index = 0;

nextBtn.addEventListener('click', function(){
    handleChangeSlider(1);
});
prevBtn.addEventListener('click', function(){
    handleChangeSlider(-1);
});

[...dotItems].forEach((item) => item.addEventListener('click', function(e) {
    [...dotItems].forEach(el => el.classList.remove("active"));
    e.target.classList.add("active");
    const sliderIndex = parseInt(e.target.dataset.index);
    index = sliderIndex;
    positionX = -1 * index * sliderItemWidth;
    sliderMain.style = `transform: translateX(${positionX}px)`
}));

function handleChangeSlider(dir) {
    if (dir === 1) {
        if (index >= sliderLength - 1) {
            index = sliderLength -1;
            return;
        }
        positionX = positionX - sliderItemWidth;
        sliderMain.style = `transform: translateX(${positionX}px)`
        index++;
    } else if (dir === -1) {
        if (index <= 0) {
            index = 0;
            return;
        }
        positionX = positionX + sliderItemWidth;
        sliderMain.style = `transform: translateX(${positionX}px)`
        index--;
    }
};
