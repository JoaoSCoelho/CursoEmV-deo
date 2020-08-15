function contar() {
    var inicio = Number(document.getElementById('inicio').value)
    var fim = Number(document.getElementById('fim').value)
    var passo = Number(document.getElementById('passo').value)
    var res = document.getElementById('res')
    while (inicio < fim) {
        inicio += passo 
        res.innerHTML += `${inicio}`
    }
}