function options() {
    for(let x = 1;x <= 2; x++) {
        for(const moeda in moedas){
            if(document.querySelector('.pares')){
                select = document.querySelector('.pares')
                let d = document.createElement('option')
                d.setAttribute('value', moeda)
                select.appendChild(d)
                let text = document.createTextNode(moedas[moeda])
                d.appendChild(text)
            }
        } 
    }
}

const moedas = {
    USD: "USD - Dólar Americano",
    AUD: "AUD - Dólar Australiano",
    CAD: "CAD - Dólar Canadense",
    CHF: "CHF - Franco Suíço",
    DKK: "DKK - Coroa Dinamarquesa",
    EUR: "EUR - Euro",
    GBP: "GBP - Libra Esterlina",
    JPY: "JPY - Iene Japonês",
    NOK: "NOK - Coroa Norueguesa",
    SEK: "SEK - Coroa Sueca"
}
