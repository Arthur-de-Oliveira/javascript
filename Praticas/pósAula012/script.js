function recomendar() {

    var estilo = window.document.getElementsByName('estilo')
    var nasc = window.document.getElementsByName('nasc')
    var res = window.document.getElementById('res')
    var nome = ''
    var img = document.createElement('img')
        img.setAttribute('id', 'foto')

    if (nasc[0].checked) {
        var nasc = 'Brasileiros'

        if (estilo[0].checked) {
            var estilo = 'Rap Classico'
            var nome = 'Mano Brown'
            img.setAttribute('src', 'foto-manobrown.png')
        } else if (estilo[1].checked) {
            var estilo = 'trap'
            var nome = 'Matuê'
            img.setAttribute('src', 'foto-matue.png')
        } else if (estilo[2].checked) {
             var estilo = 'plug'
             var nome = 'Shaodree'
             img.setAttribute('src', 'foto-shaodree.png')
        } else {
            var estilo = 'freestyle'
            var nome = 'Kant mc'
            img.setAttribute('src', 'foto-kant.png')
        }
    } else {
        var nasc = 'Estrangeiros'
        
        if (estilo[0].checked) {
          var estilo = 'Rap Classico'
          var nome = 'ice Cube'
          img.setAttribute('src', 'foto-icecube.png')
        } else if (estilo[1].checked) {
           var estilo = 'trap'
           var nome = 'Travis Scott'
           img.setAttribute('src', 'foto-travisscott.png')
        } else if (estilo[2].checked) {
            var estilo = 'plug'
            var nome = 'Rick The Kid'
            img.setAttribute('src', 'foto-richthekid.png')
        } else {
            var estilo = 'freestyle'
            var nome = 'Tory Lanez'
            img.setAttribute('src', 'foto-torylanez.png')
        }
    }

    res.innerHTML = `Achamos que você vai gostar de ouvir: <strong>${nome}</strong>`
    res.style.textAlign = 'Center'
    res.appendChild(img)
}