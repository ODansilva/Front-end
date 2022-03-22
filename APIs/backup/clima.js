climas = {
    manha: {
        estacao: "verão",
        dia_semana: "Sábado",
        entidade: "São Gonçalo do Amarante",
        uf: "RN",
        temp_min: 25,
        temp_min_tende: "Estável",
        temp_max: 33 ,
        temp_max_tende: "Ligeira Elevação",
        resumo: "Muitas nuvens com possibilidade de chuva isolada"
    },
    tarde: {
        estacao: "verão",
        dia_semana: "Sábado",
        entidade: "São Gonçalo do Amarante",
        uf: "RN",
        temp_min: 25,
        temp_min_tende: "Estável",
        temp_max: 34 ,
        temp_max_tende: "Ligeira Elevação",
        resumo: "Muitas nuvens com possibilidade de chuva isolada"
    },
    noite: {
        estacao: "verão",
        dia_semana: "Sábado",
        entidade: "São Gonçalo do Amarante",
        uf: "RN",
        temp_min: 22,
        temp_min_tende: "Estável",
        temp_max: 30 ,
        temp_max_tende: "Ligeira Redução",
        resumo: "Possibilidade de chuva"
    }
}
let d
let a
let dado

function listagem(){
    for(const campo in climas){
        if(document.querySelector('#' + campo)){
            for (const x in climas[campo]){
                if(document.querySelector('.' + x)){
                    console.log(climas[campo][x])
                    document.querySelector('.' + x).value = climas[campo][x]
                }

            }
        }
    }
}
