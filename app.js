const worksArea = document.querySelector(".worksArea")



let arr = [
    {
        name: "animationScroll",
        href: "./works/animation-scroll/index.html"
    },
    {
        name: "CrazyCarusel",
        href: "./works/crazyCarusel/index.html"
    },
    // {
    //     name: "Header",
    //     href: "./works/header/index.html"
    // },
    {
        name: "ImgChange",
        href: "./works/imgChange/index.html"
    },
    {
        name: "NavBar",
        href: "./works/navBar/index.html"
    },
    {
        name: "RWDnavBar",
        href: "./works/RWDnavBar/index.html"
    }
]

const ul = document.createElement("ul")
arr.forEach((item) => {
    const a = document.createElement("a")
    a.innerText = item.name
    a.href = item.href
    const li = document.createElement("li")
    li.appendChild(a)
    ul.appendChild(li)
})

worksArea.appendChild(ul)

const home = document.querySelector("#home")
const works = document.querySelector("#works")
const homeArea = document.querySelector(".homeArea")

home.addEventListener("click" ,() =>{
    homeArea.style.display = "flex";
    worksArea.style.display = "none";
})


works.addEventListener("click", () =>{
    homeArea.style.display = "none";
    worksArea.style.display = "flex";
})

