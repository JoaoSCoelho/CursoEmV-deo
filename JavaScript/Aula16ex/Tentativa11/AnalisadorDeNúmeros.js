var num = []
var tNum = document.getElementById('num')
var valores = document.getElementById('valores')
var res = document.getElementById('res')
function analisar() {
    if (tNum.value.length == 0) {
        alert('Valores incorretos!')
    } else {
        var option = document.createElement('option')
        if (Number(tNum.value) < 1 || Number(tNum.value) > 100) {
            alert('Valores incorretos!')
        } else if (num.length == 0) {
            num.push(Number(tNum.value))
            option.text = `O valor digitado foi: ${Number(tNum.value)}`
            valores.appendChild(option)
            res.innerHTML = ' '
        } else if (num.indexOf(Number(tNum.value)) == -1) {
            num.push(Number(tNum.value))
            option.text = `O valor digitado foi: ${Number(tNum.value)}`
            valores.appendChild(option)
            res.innerHTML = ' '
        } else {
            alert('Valor já encontrado')
        }
    }
}
function finalizar() {
    num.sort((a, b) => a-b)
    var c = 1
    var r = 0
    var soma = num[0]
    while (num.length > c) {
        soma += num[r+1]
        c++
        r++
    }
    var media = soma / num.length
    if (num == 0) {
        alert('Digite algum valor acima!')
    } else {
        res.innerHTML = `<p>Ao todo, temos ${num.length} numeros cadastrados.</p></br>
        <p>O maior valor informados foi ${num[num.length - 1]}.</p></br>
        <p>O menor valor informado foi ${num[0]}.</p></br>
        <p>Somando todos os valores temos ${soma}</p></br>
        <p>A média de todos os valores digitados é ${media}</p>`
    }
}