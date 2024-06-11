const lists = document.querySelectorAll('.list')

function activelink(){
    lists.forEach((item) =>{
        item.classList.remove('active')
    })
    this.classList.add('active')
}

lists.forEach((item) =>{
    item.addEventListener('click',activelink)
})