    var numeroAleatorio = Math.floor(Math.random() * 100) + 1;
    var palpites = document.querySelector('.palpites');
    var ultimoResultado = document.querySelector('.ultimoResultado');
    var maiorOuMenor = document.querySelector('.maiorOuMenor');
    var enviarPalpite = document.querySelector('.enviarPalpite');
    var campoPalpites = document.querySelector('.campoPalpites');
    var contadorDePalpites = 1;
    var botaoReset;

    function checaPalpite() {
      var palpitesDoJogador = Number(campoPalpites.value);
      if (contadorDePalpites === 1) {
        palpites.textContent = 'Palpites anteriores: ';
      }

      palpites.textContent += palpitesDoJogador + ' ';

      if (palpitesDoJogador === numeroAleatorio) {
        ultimoResultado.textContent = 'Parabéns! Seu número está certo!';
        ultimoResultado.style.backgroundColor = 'green';
        maiorOuMenor.textContent = '';
        gameOver();
      } else if (contadorDePalpites === 10) {
        ultimoResultado.textContent = '!!!FIM DE JOGO!!!';
        maiorOuMenor.textContent = '';
        gameOver();
      } else {
        ultimoResultado.textContent = 'Errado!';
        ultimoResultado.style.backgroundColor = 'red';
        if(palpitesDoJogador < numeroAleatorio) {
          maiorOuMenor.textContent='Seu palpite está muito baixo!' ;
        } else if(palpitesDoJogador > numeroAleatorio) {
          maiorOuMenor.textContent = 'Seu palpite está muito alto!';
        }
      }

      contadorDePalpites++;
      campoPalpites.value = '';
    }

    enviarPalpite.addEventListener('click', checaPalpite);


    function gameOver() {
      campoPalpites.disabled = true;
      enviarPalpite.disabled = true;
      botaoReset = document.createElement('button');
      botaoReset.textContent = 'Iniciar novo jogo';
      document.body.appendChild(botaoReset);
      botaoReset.addEventListener('click', reiniciaJogo);
    }




    function reiniciaJogo() {
      contadorDePalpites = 1;
      var limpaResultado = document.querySelectorAll('.resultado p');
      for(var i = 0 ; i < limpaResultado.length ; i++) {
        limpaResultado[i].textContent='';
      }

      botaoReset.parentNode.removeChild(botaoReset);
      campoPalpites.disabled = false;
      enviarPalpite.disabled = false;
      campoPalpites.value='';
      campoPalpites.focus();
      ultimoResultado.style.backgroundColor='white';
      numeroAleatorio = Math.floor(Math.random() * 100) + 1;
    }

