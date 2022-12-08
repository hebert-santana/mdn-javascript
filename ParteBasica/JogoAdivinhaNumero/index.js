    var numeroAleatorio = Math.floor(Math.random() * 100) + 1;
    
    var palpites = document.querySelector('.palpites');
    var ultimoResultado = document.querySelector('.ultimoResultado');
    var maiorOuMenor = document.querySelector('.maiorOuMenor');

    var enviarPalpite = document.querySelector('.enviarPalpite');
    var campoPalpites = document.querySelector('.campoPalpites'); // input tipo texto

    var contadorDePalpites = 1;
    var botaoReset;

    function checaPalpite() {
      var palpitesDoJogador = Number(campoPalpites.value);  // converte tipo texto para tipo número
      if (contadorDePalpites === 1) {
        palpites.textContent = 'Palpites anteriores: ';     // modifica o texto dentro do parágrafo de class="palpites"
      }

      palpites.textContent += palpitesDoJogador + ' ';      // modifica o texto dentro do parágrafo de class="palpites"

      if (palpitesDoJogador === numeroAleatorio) {
        ultimoResultado.textContent = 'Parabéns! Seu número está certo!';
        ultimoResultado.style.backgroundColor = 'green';
        maiorOuMenor.textContent = '';
        gameOver();                                         // finaliza o jogo
      } else if (contadorDePalpites === 10) {               // máximo de 10 palpites
        ultimoResultado.textContent = '!!!FIM DE JOGO!!!';
        maiorOuMenor.textContent = '';
        gameOver();                                         // finaliza o jogo
      } else {
        ultimoResultado.textContent = 'Errado!';
        ultimoResultado.style.backgroundColor = 'red';
        if(palpitesDoJogador < numeroAleatorio) {
          maiorOuMenor.textContent='Seu palpite está muito baixo!' ;
        } else if(palpitesDoJogador > numeroAleatorio) {
          maiorOuMenor.textContent = 'Seu palpite está muito alto!';
        }
      }

      contadorDePalpites++;                                 // contador aumenta até atingir o máximo de palpites
      campoPalpites.value = '';                             // limpa o texto do input para digitar novo palpite
    }

    enviarPalpite.addEventListener('click', checaPalpite);  // ao clicar no input de tipo submit, ativa a função checaPalpite


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

