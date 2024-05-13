alert("Olá! Espero que esteja bem!");

let nome = prompt("Qual seu nome");
console.log(nome);
let dia = prompt("Que dia é hoje?");
let sexta = dia === 'sexta';

if (
  (dia === "sabado" || dia === "domingo")
) {
  console.log(nome + " bom final de semana!");
} else {
  if (sexta) console.log(nome + " sextou! Bora tomar uma!");
  else {
    nome + " Boa semana";
  }
}
