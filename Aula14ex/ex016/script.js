var inicio = window.document.getElementById('iniciotxt')
var fim = window.document.getElementById('fimtxt')
var passo = window.document.getElementById('passotxt')
var res = window.document.getElementById('res')

function contar() {

    if (inicio.value.length == 0 || fim.value.length == 0 || passo.value.length == 0) {
        window.alert('[ERRO] Preencha todos os campos!')
    } else if (fim.value == 0 || passo.value == 0) {
        window.alert('[ERRO] O numero "0" é invalido!')
    } else {
        res.innerHTML = ('Contando: ')

        var i = Number(inicio.value)
        var f = Number(fim.value)
        var p = Number(passo.value)

        for (c = i; c <= f; c += p) {
            res.innerHTML += (`&#x1F449 ${c} `)
        }

        res.innerHTML += ('&#x1F3C1')
    }
}