var atualData = new Date()
var hora = document.getElementById('divHora')
var foto = document.getElementById('divFoto')
var atualHora = atualData.getHours()
hora.innerHTML = `<p><strong>Agora são ${atualData.getHours()}:${atualData.getMinutes()} horas.</strong></p>`
if (atualHora < 12) {
    hora.style.color = 'rgb(255, 255, 53)'
    document.body.style.backgroundColor = 'rgb(255, 255, 53)'
    foto.style.backgroundImage = 'url("https://i1.wp.com/geekness.com.br/wp-content/uploads/2014/11/morning.jpg?fit=670%2C447&ssl=1")'
} else if (atualHora < 18) {
    hora.style.color = 'rgb(255, 203, 60)'
    document.body.style.backgroundColor = 'rgb(255, 203, 60)'
    foto.style.backgroundImage = 'url("https://media-cdn.tripadvisor.com/media/photo-s/06/c4/78/b2/hostel-pe-na-mata.jpg")'
} else {
    hora.style.color = 'rgb(0, 0, 38)'
    document.body.style.backgroundColor = 'rgb(0, 0, 38)'
    foto.style.backgroundImage = 'url("https://aleteiaportuguese.files.wordpress.com/2018/07/noite-estrela.png?w=620&h=310&crop=1")'
}
