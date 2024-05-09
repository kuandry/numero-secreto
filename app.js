alert("Bem vindo ao jogo do Número secreto");
let numeroSecreto = 4;
console.log(numeroSecreto);
let chute;
let tentativas = 1;

// enquanto chute não for igual ao número secreto...
while (chute != numeroSecreto) {
  chute = prompt("Escolha um número entre 1 e 10");

  // Convertendo a entrada do usuário para um número
  chute = Number(chute);

  // se chute for igual ao número secreto
  if (chute === numeroSecreto) {
    alert(`Parabéns! Você acertou em cheio ${numeroSecreto}!com ${tentativas} tentativas`);
  } else {
    if (chute > numeroSecreto) {
      alert(`O número secreto é menor do que ${chute}`);
    } else {
      alert(`O número secreto é maior do que ${chute}`);
    }
/*     tentativas = tentativas +1;
 */    tentativas ++
  }
}
