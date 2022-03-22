canvas.width = window.innerWidth
canvas.height = window.innerHeight

corta = () => {

    let sx = 0
    let sy = 0
    let dx = 0
    let dy = 0

    const canvas = document.querySelector('canvas')
    const ctx = canvas.getContext('2d')

    let image = new Image();
    image.src = "./img/tw3.jpg"

    dy = -100

    for (let z = 0; z < 20; z++) {
        setTimeout(function(){

            sx = 0
            dx = -100

            sy += 100
            dy += 100

            for (let i = 0; i < 40; i++) {
                setTimeout(function(){

                    const canvas = document.querySelector('canvas')
                    const ctx = canvas.getContext('2d')

                    let image = new Image();
                    image.src = "./img/tw3.jpg"

                    image.onload = () => {
                        ctx.drawImage(image, sx, sy, 100, 100, dx, dy, 100, 100);
                    }
                    sx = sx + 100
                    dx = dx + 100
                },50*i)
            }

        },2000*z)
    }
        
}

time = () => {}
