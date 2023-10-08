alert("Boas vindas ao Jogo Do Numero Secreto! ");
let numeroMaximo = 1000;
let numeroSecreto = parseInt(Math.random() * numeroMaximo + 1);
console.log(numeroSecreto);
let chute;
let tentativas = 1;

//Loop
while (chute != numeroSecreto) {
  chute = prompt(`Escolha um numero entre 1 e ${numeroMaximo}`);

  if (chute == numeroSecreto) {
    break;
  } else {
    if (chute > numeroSecreto) {
      alert(`O numeor secreto é menor que ${chute}`);
    } else {
      alert(`O numeor secreto é maior que ${chute}`);
    }
  }
  tentativas++;
}
let palavraTentativa = tentativas > 1 ? "tentativas" : "tentativa";
alert(
  `Parabens! Você acertou o numero secreto ${numeroSecreto}, apos ${tentativas} ${palavraTentativa}`
);
