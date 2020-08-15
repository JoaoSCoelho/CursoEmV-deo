function verifica() {
    var ano = document.getElementById('ano').value
    var masculino = document.getElementById('masculino').value
    var feminino = document.getElementById('feminino').value
    var verificar = document.getElementById('verificar')
    var idade = document.getElementById('idade')
    var imagem = document.getElementById('imagem')
    var foto = document.getElementById('foto')
    var data = new Date()
    var atualAno = data.getFullYear()
    var bebê = atualAno-4
    if (ano >= bebê) {
        if (ano > bebê) {
            function masculino() {
                idade.innerHTML = `Detectamos um Bebê de ${atualAno-ano} anos de idade!`
            }
        }
    }
    console.log(masculino)
}
