function carregar() {
    var msg = document.getElementById('msg')
    var img = document.getElementById('imagem')
    var Data = new Date()
    var hora = Data.getHours()
    msg.innerHTML = `Agora são ${hora} horas`
    if (hora >= 0 && hora < 12) {
        //BOM DIA
        img.src = 'fotomanha.png'
        document.body.style.background = '#e3d5ae'
    } else if (hora >= 12 && hora < 18) {
        //BOA TARDE
        img.src = 'fototarde.png'
        document.body.style.backgroundColor = '#e94e04'
    } else {
        //BOA NOITE
        img.src = 'fotonoite.png'
        document.body.style.background = '#0f476f'
    }
}
