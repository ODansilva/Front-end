var altura = 0
var largura = 0
var vidas = 1
var tempo = 15
var tempoMosquito = 1500

/*definindo o nivel*/
var nivel = window.location.search
nivel = nivel.replace('?','')

if(nivel ===  'normal'){
    tempoMosquito = 1500
}else if(nivel === 'dificio'){
    tempoMosquito = 1000
}else if(nivel === 'chucknorris'){
    tempoMosquito = 750
}
console.log(nivel)

/*obtendo o tamanho da area do jogo*/
function areaJogo() {
    altura = window.innerHeight
    largura = window.innerWidth
}

/*chama a função para coleta o tamanho da tela*/ 
areaJogo()

function radomPosicao() {

    /*Remover o mosquito anterior*/
    if(document.getElementById('mosquito')) {
        document.getElementById('mosquito').remove()

        /*Condição de fim de jogo*/
        if(vidas > 3) {
            window.location.href = 'fim_de_jogo.html'
        }
        /*Remover as vidas*/
        document.getElementById('v' + vidas).src = 'img/coracao_vazio.png'
        vidas++
    }

    /*roandomizando a posicão*/
    posicaoY = Math.floor(Math.random() * altura) -90
    posicaoX = Math.floor(Math.random() * largura) -90

    posicaoY = posicaoY < 0 ? 0 : posicaoY
    posicaoX = posicaoX < 0 ? 0 : posicaoX

    /*Criação do elemento Mosquito*/ 
    var mosquito = document.createElement('img')
    mosquito.src = 'img/mosquito.png'
    mosquito.className = tamanho() + ' ' + lado()
    mosquito.style.position = 'absolute'
    mosquito.style.top = posicaoY + 'px'
    mosquito.style.left = posicaoX + 'px'
    document.body.appendChild(mosquito)
    mosquito.id = 'mosquito'
    /*removendo o mosquito no evento click*/
    mosquito.onclick = function(){
        this.remove()
    }
}

/*randomizando tamanho do mosquito*/
function tamanho(){
    var tam = Math.floor(Math.random() * 3)
    switch(tam){
        case 0:
            return 'mosquito1'
        case 1:
            return 'mosquito2'
        case 2:
            return 'mosquito3'
    }
}

/*Invertendo a imagen no eixo X*/
function lado(){
    var lado = Math.floor(Math.random() * 2)
    switch(lado){
        case 0:
            return 'ladoB'
    }
}

/*Criacao de tempo de jogo*/
var cronometro = setInterval(function(){

    tempo--

    if (tempo < 0){
        clearInterval(cronometro)
        clearInterval(criaMosquito)
        window.location.href = 'vitoria.html'
    }else{
        document.getElementById('cronometro').innerHTML = tempo
    }
    
}, 1000)






