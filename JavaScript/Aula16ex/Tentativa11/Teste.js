var num = [5, 26, 50, 16, 71]
num.sort((a, b) => a-b)
var c = 1
var r = 0
var soma = num[0]
while (num.length > c) {
    console.log(`Valor de soma antes do acréscimo ${soma}`)
    soma += num[r+1]
    console.log(`Valor de C antes do acréscimo ${c}`)
    console.log(`Valor de soma depois do acréscimo ${soma}`)
    c++
    console.log(`Valor de C depois do acrescimo ${c}`)
    console.log(`Valor de R antes do acréscimo ${r}`)
    r++
    console.log(`Valor de R depois do acrescimo ${r}`)
    console.log('---------------------------------')
}
console.log(`Valor de soma total ${soma}`)