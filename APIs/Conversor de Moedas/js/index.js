let contacao = 1
function cont() {

    let par1 = document.querySelector('.par1').value
    let par2 = document.querySelector('.par2').value
    let paridade = par1+par2

    if(par1 !== par2) {

        const url = `http://economia.awesomeapi.com.br/json/last/${par1}-${par2}`

        const options= {
            method : 'GET',
            mode: 'no-cors'
        }

        fetch (url, options)
            .then(resp => {resp.json()
                .then(dados => listagem(dados,paridade))
            })

    }else {
        contacao = 1
        return contacao
    }

}

function listagem(dados,paridade) {
    for(const campo in dados[paridade]){
        contacao = dados[paridade]['bid']
        return contacao
    }
}

convert = m => {
    let moeda1 = document.querySelector('#moeda1').value
    let moeda2 = document.querySelector('#moeda2').value

    if ( !(isNaN(moeda1 || moeda2)) ){

        if (m === 'm1'){
            document.querySelector('#moeda2').value = moeda1 * contacao
        }if (m === 'm2'){
            document.querySelector('#moeda1').value = moeda2 / contacao
        }
    }
}
