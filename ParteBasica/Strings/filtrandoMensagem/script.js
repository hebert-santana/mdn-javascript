var lista = document.querySelector('.listaDeNatal');
lista.innerHTML = '';
var frases = ['Happy Birthday!',
'Merry Christmas my love',
'A happy Christmas to all the family',
'You\'re all I want for Christmas',
'Get well soon'];

for (var i = 0; i < frases.length; i++) {
    var input = frases[i];
    if (frases[i].indexOf('Christmas') !== -1) {
        var resultado = input;
        var listaItem = document.createElement('li');
        listaItem.textContent = resultado;
        lista.appendChild(listaItem);
    }
}
