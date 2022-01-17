function gerartabuada() {

    var num = window.document.getElementById('numtxt')
    var tab = window.document.getElementById('tabuada')
    var ope = window.document.getElementsByName('opertxt')

    if (num.value.length == 0) {
        window.alert('[ERRO] Preencha todos os campos!')
    } else if (ope[0].checked) { //adição
        var n = Number(num.value)
        tab.innerHTML = ' '
        for (c=1; c <= 10; c++) {
            var r = c + n
            var item = document.createElement('option')
            item.text = (`${n} + ${c} = ${r}`)
            item.value = (`adiç${c}`)
            tab.appendChild(item)
        }
    } else if (ope[1].checked) { //subtração
        var n = Number(num.value)
        tab.innerHTML = ' '
        for (c=1; c <= 10; c++) {
            var r = c - n
            var item = document.createElement('option')
            item.text = (`${n} - ${c} = ${r}`)
            item.value = (`subt${c}`)
            tab.appendChild(item)
        }
    } else if (ope[2].checked) { //multiplicação
        var n = Number(num.value)
        tab.innerHTML = ' '
        for (c=1; c <= 10; c++) {
            var r = c * n
            var item = document.createElement('option')
            item.text = (`${n} x ${c} = ${r}`)
            item.value = (`mult${c}`)
            tab.appendChild(item)
        }
    } else if (ope[3].checked) { // divisão
        var n = Number(num.value)
        tab.innerHTML = ' '
        for (c=1; c <= 10; c++) {
            var r = c / n
            var item = document.createElement('option')
            item.text = (`${n} / ${c} = ${r.toFixed(2)}`)
            item.value = (`divs${c}`)
            tab.appendChild(item)
        }
    }
}