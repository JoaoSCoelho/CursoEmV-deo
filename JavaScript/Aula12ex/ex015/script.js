function verificar() {
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById('txtano')
    var res = document.getElementById('res')
    if (fano.value.length == 0 || fano.value > ano) {
        window.alert('[ERRO] Verifique os dados e tente novamente!')
    } else {
        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(fano.value)
        var gênero = ''
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')
        if (fsex[0].checked) {
            gênero = 'Homem'
            if (idade <= 4) {
                img.setAttribute('src', 'bebehomem.png')
            } else if (idade < 13) {
                img.setAttribute('src', 'criançahomem.png')
            } else if (idade < 18) {
                img.setAttribute('src', 'adolescentehomem.png')
            } else if (idade < 29) {
                img.setAttribute('src', 'jovemhomem.png')
            } else if (idade < 50) {
                img.setAttribute('src', 'adultohomem.png')
            } else {
                img.setAttribute('src', 'idosohomem.png')
            }
        } else if (fsex[1].checked) {
            gênero = 'Mulher'
            if (idade <= 4) {
                img.setAttribute('src', 'bebemulher.png')
            } else if (idade < 13) {
                img.setAttribute('src', 'criançamulher.png')
            } else if (idade < 18) {
                img.setAttribute('src', 'adolescentemulher.png')
            } else if (idade < 29) {
                img.setAttribute('src', 'jovemmulher.png')
            } else if (idade < 50) {
                img.setAttribute('src', 'adultamulher.png')
            } else {
                img.setAttribute('src', 'idosamulher.png')
            }
        }
        res.style.textAlign = 'center'
        res.innerHTML = `Detectamos ${gênero} com ${idade} anos`
        res.appendChild(img)
        
    }
}