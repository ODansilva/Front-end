let cotacao = 1
console.log(cotacao)

function cot() {
    let pares = document.querySelector('.pares').value

    const url = `https://olinda.bcb.gov.br/olinda/servico/PTAX/versao/v1/odata/CotacaoMoedaDia(moeda=@moeda,dataCotacao=@dataCotacao)?@moeda='${pares}'&@dataCotacao='${data}'&$top=100&$format=json&$select=cotacaoCompra`


    fetch (url)
        .then(resp => {resp.json()
            .then(dados => listagem(dados))
        })
}

function listagem(dados) {
    let cota = dados.value[0]['cotacaoCompra']
    cotacao = cota.toFixed(2)
}

convert = m => {
    let moeda1 = document.querySelector('#moeda1').value
    let moeda2 = document.querySelector('#moeda2').value

    if ( !(isNaN(moeda1 || moeda2)) ){

        if (m === 'm1'){
            document.querySelector('#moeda2').value = moeda1 * cotacao
        }if (m === 'm2'){
            document.querySelector('#moeda1').value = (moeda2 / cotacao).toFixed(2)
        }
    }
}

function dataHoje() {
    let data = new Date()
    let dia, mes, ano
    dia = data.getDate()
    if (dia < 10){
        dia = '0' + dia
    }
    mes = data.getMonth() + 1
    if (mes < 10){
        mes = '0' + mes
    }
    ano = data.getFullYear()
    newData = (`${mes}/${dia}/${ano}`)
   return newData
}
let data = dataHoje()
console.log(data)
