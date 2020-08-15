let num = [5, 8, 2, 9, 13]
num.push(1)
num.sort((a, b) => a-b)
console.log(num)
console.log(`O vetor tem ${num.length} posições`)
console.log(`O primeiro valor do vetor é ${num[0]}`)
let pos = num.indexOf(50)
console.log(pos)