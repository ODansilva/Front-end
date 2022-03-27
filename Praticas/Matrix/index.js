const agua = ["M","A","T","R","I","X","日","ﾊ","ﾐ","ﾋ","ｰ","ｳ","ｼ","ﾅ","ﾓ","ﾆ","ｻ","ﾜ","ﾂ","ｵ","ﾘ","ｱ","ﾎ","ﾃ","ﾏ","ｹ","ﾒ","ｴ","ｶ","ｷ","ﾑ","ﾕ","ﾗ","ｾ","ﾈ","ｽ","ﾀ","ﾇ","ﾍ",":","・",".","=","*","+","-","<",">","¦","｜","ﾘ"];
const codigo = ["M","A","T","R","I","X"]

const tela = document.getElementById('matrix')
const ctx = tela.getContext('2d')

tela.width = innerWidth
tela.height = innerHeight

const tFont = 12
let colunas = Math.floor(tela.width / tFont)

const nuvem = new Array(colunas).fill(1)

function temporal() {

    ctx.fillStyle = "rgba(0, 0, 0, 0.05)"
    ctx.fillRect(0, 0, tela.width, tela.height)

    ctx.fillStyle = "#00F000"
    ctx.font = `${tFont}px Lato`

    for(let x = 0; x < nuvem.length; x++) {
        
        let randons = Math.floor(Math.random() * agua.length)
        const gota = agua[randons]

        let positionX = x * tFont 
        let positionY = nuvem[x] * tFont

        ctx.fillText(gota, positionX, positionY)

        if (gota == codigo[x]) {
            ctx.fillStyle = "#FFF"
            ctx.font = `60px lato`
            posicao = 60 * x
            ctx.fillText(codigo[x], tela.width / 2.5 + posicao, tela.height / 2)

            ctx.fillStyle = "#00F000"
            ctx.font = `${tFont}px Lato`
        }
        
        nuvem[x]++

        if(positionY > tela.height && Math.random() > 0.98) {
            nuvem[x] = 0
        }
    }
    
    window.requestAnimationFrame(temporal)
}
temporal()

