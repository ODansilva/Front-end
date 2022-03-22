function GetApis(url) {
    let request = new XMLHttpRequest()
    request.open("GET", url, false)
    request.send()
    return request.responseText
}


function buscarCep(cep) {
    consulta = GetApis(`https://viacep.com.br/ws/${cep}/json/`)
    let resultado = JSON.parse(consulta)

    let validacep = /^[0-9]{8}$/;

    if(validacep.test(cep)){
        document.getElementById('cep').value = ''
        document.getElementById('cep').placeholder = 'Cep Não Encontrado'
    }else{
    listagem(resultado)
    console.log(validacep)
    }
    
    console.log(resultado)
}

const listagem = prop => {
    document.getElementById('rua').value=prop.logradouro
    document.getElementById('bairro').value=prop.bairro
    document.getElementById('complemento').value=prop.complemento
    document.getElementById('localidade').value=prop.localidade
    document.getElementById('uf').value=prop.uf
    document.getElementById('ddd').value=prop.ddd
    document.getElementById('ibge').value=prop.ibge
    document.getElementById('siafi').value=prop.siafi
}

