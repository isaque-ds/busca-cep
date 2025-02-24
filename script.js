let btnBuscar = document.getElementById('btn-buscar')
let inputCep = document.getElementById('cep')

function buscar() {
    let cep = document.getElementById('cep').value
    let resposta = document.querySelector('.result')

    if (cep.length !== 8) {
        resposta.innerHTML = '<p><strong>Cep Invalido!</strong></p>'
        return
    } else {
        resposta.style.display = 'block'
        let endpoint = `https://viacep.com.br/ws/${cep}/json/`
        fetch(endpoint)
            .then(res => res.json())
            .then(dados => {
                if (dados.erro) {
                    resposta.innerHTML = '<p><strong>Cep não encontrado!</strong></p>'
                    resposta.style.display = 'block'
                    return
                }

                resposta.innerHTML = `<p><strong>Endereço:</strong> ${dados.logradouro}</p>`
                resposta.innerHTML += `<p><strong>Bairro:</strong> ${dados.bairro}</p>`
                resposta.innerHTML += `<p><strong>Cidade:</strong> ${dados.localidade}</p>`
                resposta.innerHTML += `<p><strong>Estado:</strong> ${dados.uf}</p>`

            })
    }



}

btnBuscar.addEventListener('click', buscar)
inputCep.addEventListener('keypress', function (e) {
    if (e.key === 'Enter') {
        buscar()
    }
})
