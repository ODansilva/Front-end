function buscaCep(cep) {
    
    let validacep = /^[0-9]{8}$/;

    const url = `https://viacep.com.br/ws/${cep}/json/`

    const options = {
        method: 'GET',
        mode: 'cors',
        cache:'default'
    }

    if(validacep.test(cep) || cep.length < 8 || cep === ''){
        document.querySelector('#cep').value = ''
        document.querySelector('#cep').placeholder = "Cep invalido ou não Encontrado"
    }else{
        fetch(url, options)
            .then(resp => {resp.json()
            .then(dados => listagem(dados))
        })
    }
   
    function listagem(dados){
        for(const campo in dados){
            if(document.querySelector('#' + campo)){
                document.querySelector('#' + campo).value = dados[campo]
            }
        }
    } 
}

