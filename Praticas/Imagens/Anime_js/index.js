bloco = () => {
    let container = document.querySelector('.container')
    for(let x = 0; x <= 400; x++){
        let bloco = document.createElement('div')
        bloco.classList.add('bloco')
        container.appendChild(bloco)
    }
}