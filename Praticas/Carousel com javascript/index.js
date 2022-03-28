const cl = document.getElementsByClassName('slide')
const bLeft = document.querySelector(".left")
const bRight = document.querySelector(".right")

bLeft.addEventListener("click", function(){
    carousel('left')
})
bRight.addEventListener("click", function(){
    carousel('right')
})

setInterval(() => {
    carousel('right')
}, 5000)

let slideI = 0
function carousel (direct) {
    const x = document.getElementsByClassName("slide");
    for(const i in x) {
        vis = 'vis'
        for(vis in x[i]) {
            x[i].classList.remove('vis')
        }
    }
    if (direct == 'left') {
        if(slideI > 0 ){
            slideI -= 1
        }else {
            slideI = x.length-1
        }
        x[slideI].classList.add('vis')
    }
    if (direct == 'right') {
        if(slideI < x.length){
            slideI += 1 
        }if(slideI == x.length) {
            slideI = 0
        }
        x[slideI].classList.add('vis') 
    }   
}