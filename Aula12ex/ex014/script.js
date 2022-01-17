function carregar() {

    var msg = window.document.getElementById('msg')
    var img = window.document.getElementById('imagem')
    var data = new Date()
    var hora = data.getHours()

    msg.innerHTML = `Agora são ${hora} horas`

    if (hora >= 0 && hora < 12) {
       //BOM DIA!
       img.src = 'fotomanha.png'
       document.body.style.backgroundColor = '#7d7d50'
    } else if (hora < 18) {
        //BOA TARDE!
        img.src = 'fototarde.png'
        document.body.style.backgroundColor = '#dfa46d'
    } else {
        //BOA NOITE!
        img.src = 'fotonoite.png'
        document.body.style.backgroundColor = '574165'
    }
}