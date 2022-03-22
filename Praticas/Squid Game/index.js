setInterval(function(){
    let music = document.getElementById('music')
    let = temp = music.currentTime
    if(temp >= 15) {
        for(let x = 1;x <= 3;x++){
            let i = document.querySelector(`.forma${x}`)
            i.classList.remove('s_anime')
            i.classList.add('f_anima')
        }
    }if(temp >= 30) {
        for(let x = 1;x <= 3;x++){
            let i = document.querySelector(`.forma${x}`)
            i.classList.remove('f_anime')
            i.classList.add('g_anima')
        }
    }
    if(temp < 14) {
        for(let x = 1;x <= 3;x++){
            let i = document.querySelector(`.forma${x}`)
            i.classList.remove('g_anima')
            i.classList.add('s_anime')
        }
    }
},900)



