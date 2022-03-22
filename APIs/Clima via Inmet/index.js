function apiClima(){

    const url = `https://apiprevmet3.inmet.gov.br/previsao/${geocode}`

    const options = {
        method: 'GET',
        mode: 'cors',
        cache:'default'
    }

    fetch(url, options)
        .then(resp => {
            resp.json().then(dados => listagem(dados))
        })

    function listagem(dados){
        clima = dados[geocode][data]
        for(const campo in clima){
            if(document.querySelector('.' + campo)){
                for (const x in clima[campo]){
                    if(document.querySelector('.' + x)){
                        document.querySelector('.' + x).value = clima[campo][x]
                    }
                }
            }
        }
    }
}

let dataHoje = () => {
    let data = new Date()
    let dia, mes, ano
    dia = data.getDate()
    mes = data.getMonth() + 1
    if (mes < 10){
        mes = '0' + mes
    }
    ano = data.getFullYear()
    newData = (`${dia}/${mes}/${ano}`)
   return newData
}
let data = dataHoje()
let geocode = 2408102

