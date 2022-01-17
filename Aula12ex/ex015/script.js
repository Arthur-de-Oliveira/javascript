function verificar() {
    var data = new Date()
    var ano = data.getUTCFullYear()
    var fano = document.getElementById('txtano')
    var res = document.getElementById('res')
    if (fano.value.length == 0 || fano.value > Number(ano) || fano.value < Number(ano) - 110) {
        window.alert('[ERRO] Verifique os dados novamente!')
    } else {
        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(fano.value)
        var genero = ''
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')
        if (fsex[0].checked) {
            var genero = 'homem'
            if (idade < 11) { 
                //bebe
                img.setAttribute('src', 'foto-bebe-m.png')
            } else if (idade < 21 ){ 
                //jovem
                img.setAttribute('src', 'foto-jovem-m.png')
            } else if (idade < 51) { 
                //adulto
                img.setAttribute('src', 'foto-adulto-m.png')
            } else { 
                //idoso
                img.setAttribute('src', 'foto-idoso-m.png')
            }
        } else if (fsex[1].checked) {
            var genero = 'mulher'
            if (idade < 11) {
                //bebe
                img.setAttribute('src', 'foto-bebe-f.png')
            } else if (idade < 21 ){
                //jovem
                img.setAttribute('src', 'foto-jovem-f.png')
            } else if (idade < 51) {
                //adulto
                img.setAttribute('src', 'foto-adulto-f.png')
            } else {
                //idoso
                img.setAttribute('src', 'foto-idoso-f.png')
            }
        }
        res.style.textAlign = 'center'
        res.innerHTML = `Detectamos que você é ${genero}, com ${idade} anos!`
        res.appendChild(img)
    }
}