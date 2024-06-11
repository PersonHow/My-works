const nextDom = document.querySelector("#next")
const prevDom = document.querySelector("#prev")
const carouselDom = document.querySelector(".carousel")
const listItemDom = document.querySelector(".carousel .list")
const thumbnailDom = document.querySelector(".carousel .thumbnail")

nextDom.addEventListener("click", () =>{
    showSlider('next')
})

prevDom.onclick = () =>{
    showSlider('prev')
}
let timeRunning = 1500;
let timeAutoNext = 4000;
let runTimeOut;
let runAutoRun = setTimeout(() => {
    nextDom.click();
}, timeAutoNext)

function showSlider(type){
    let itemSlider = document.querySelectorAll(".carousel .list .item")
    let itemThumbnail = document.querySelectorAll(".carousel .thumbnail .item")
    
    if(type === 'next'){
        listItemDom.appendChild(itemSlider[0])
        thumbnailDom.appendChild(itemThumbnail[0])
        carouselDom.classList.add('next')
    } else {
        let positionLastItem = itemSlider.length - 1;
        listItemDom.prepend(itemSlider[positionLastItem]);
        thumbnailDom.prepend(itemThumbnail[positionLastItem]);
        carouselDom.classList.add()
    }

    clearTimeout(runTimeOut);
    runTimeOut = setTimeout(() => {
        carouselDom.classList.remove('next');
        carouselDom.classList.remove('prev');
    }, timeRunning)

    clearTimeout(runAutoRun);
    runAutoRun = setTimeout(() =>{
        nextDom.click();
    }, timeAutoNext)
}