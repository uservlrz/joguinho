function moverBotao() {
    var btnLinda = document.getElementById("btnLinda");
    var container = document.querySelector(".container");
  
    var randomX = Math.floor(Math.random() * (container.clientWidth - btnLinda.clientWidth));
    var randomY = Math.floor(Math.random() * (container.clientHeight - btnLinda.clientHeight));
  
    btnLinda.style.position = "absolute";
    btnLinda.style.left = randomX + "px";
    btnLinda.style.top = randomY + "px";
  }
  
  function mostrarMensagem() {
    var mensagem = document.getElementById("mensagem");
    mensagem.innerHTML = "Você acertou!";
    mensagem.style.display = "block";
  }
  