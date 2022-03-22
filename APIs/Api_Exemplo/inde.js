function buscaCep(cep) {

    let validacep = /^[0-9]{8}$/;

    console.log(cep)
    if(validacep.test(cep) || cep.length < 8 || cep === ''){
        document.querySelector('#cep').value = ''
        document.querySelector('#cep').placeholder = "Cep invalido ou não Encontrado"
    }else{

        const url = `https://viacep.com.br/ws/${cep}/json/`

        const options = {
            method: 'GET',
            mode: 'cors',
            cache:'default'
        }

        fetch(url, options)
            .then(resp => {resp.json()
            .then(dados => listagem(dados))
        })
    }
   
    function listagem(dados){
        for(const campo in dados){
            console.log(campo)
            if(document.querySelector('#' + campo)){
                document.querySelector('#' + campo).value = dados[campo]
            }
        }
    } 
}

