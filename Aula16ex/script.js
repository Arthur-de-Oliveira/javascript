var tab = window.document.getElementById('tabtxt')
var res = window.document.getElementById('res')
var list = []
var total = 0
list.sort(function compararacao(a, b) {
    return a - b
})
function adicionar() {
    var num = window.document.getElementById('numtxt')
    var n = Number(num.value)
    if (n == 0) {
        window.alert('[ERRO] Digite um valor para adicionar')
    } else if (n < 1 || n > 100 ||list.includes(n) == true) {
        window.alert('[ERRO] Valor invalido ou ja adicionado')
    } else {
        list.push(n)
        total += n
        var item = document.createElement('option')
        item.text = (`Valor ${n} adicionado`)
        item.value = (`item${n}`)
        tab.appendChild(item)
        res.innerHTML = ' '
    }
    num.value = ''
    num.focus()
}
function finalizar() {
    var maior = list[list.length-1]
    var menor = list[0] 
    var media = total / list.length 
    res.innerHTML = `
    Ao todo temos ${list.length} valores cadastrados. </br> 
    O maior valor cadastrado foi ${maior}. </br> 
    O menor valor cadastrado foi ${menor}. </br> 
    Somando todos os valores, temos ${total}. </br> 
    A media dos valores é ${media.toFixed(2)}.`
}