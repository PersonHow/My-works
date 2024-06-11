// .box1 與指定元素窗口交接處
const option = {
    root: document.querySelector(".box1"),
    threshold: [0, 0.1, 0.3, 0.5, 0.7, 0.9, 1]
};

const callBack = function (entries, observe) {
    const ratio = entries[0].intersectionRatio;
    const h2 = document.querySelector("h2")
    h2.textContent = `${Math.floor(parseInt(ratio * 10 ** 6))}`
    entries[0].target.style.background = `#${Math.floor(parseInt(ratio * 10 ** 6))}`;

}
const observer = new IntersectionObserver(callBack, option);
observer.observe(document.querySelector(".observerBox"))


// .box2 無限延伸
const option2 = {
    root:document.querySelector(".box2")
}