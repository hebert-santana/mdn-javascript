var lista = document.querySelector('.minhaLista');
lista.innerHTML = '';
var cidade = ['lonDon', 'ManCHESTer', 'BiRmiNGHAM', 'liVERpoOL'];

for(var i = 0; i < cidade.length; i++) {
  var input = cidade[i];
  var minuscula = input.toLowerCase();
  var primeiraLetra = minuscula.slice(0,1);
  var maiuscula = minuscula.replace(primeiraLetra, primeiraLetra.toUpperCase());
  var resultado = maiuscula;
  var listaItem = document.createElement('li');
  listaItem.textContent = resultado;
  lista.appendChild(listaItem);
}
