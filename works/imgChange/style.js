const radio = document.querySelectorAll("input[type='radio']")
console.dir(radio)

let num = 0;
setInterval(()=>{
    if(num >= radio.length){
        num = 0;
    }
        radio[num].checked = true;
        num++;
    
    
}, 3000)

