function gerar() {
    var x0 = document.getElementById('x0')
    var x1 = document.getElementById('x1')
    var x2 = document.getElementById('x2')
    var x3 = document.getElementById('x3')
    var x4 = document.getElementById('x4')
    var x5 = document.getElementById('x5')
    var x6 = document.getElementById('x6')
    var x7 = document.getElementById('x7')
    var x8 = document.getElementById('x8')
    var x9 = document.getElementById('x9')
    var x10 = document.getElementById('x10')
    var num = Number(document.getElementById('num').value)
    if (num == 0) {
        alert('[ERRO] Digite um número diferente de zero!')
    } else {
        x0.innerHTML = `${num} x 0 = ${num*0}`
        x1.innerHTML = `${num} x 1 = ${num*1}`
        x2.innerHTML = `${num} x 2 = ${num*2}`
        x3.innerHTML = `${num} x 3 = ${num*3}`
        x4.innerHTML = `${num} x 4 = ${num*4}`
        x5.innerHTML = `${num} x 5 = ${num*5}`
        x6.innerHTML = `${num} x 6 = ${num*6}`
        x7.innerHTML = `${num} x 7 = ${num*7}`
        x8.innerHTML = `${num} x 8 = ${num*8}`
        x9.innerHTML = `${num} x 9 = ${num*9}`
        x10.innerHTML = `${num} x 10 = ${num*10}`
    }
}