//EXERCICIO 1

const nome 
let idade 

console.log(typeof nome);
console.log(typeof idade);

//o tipo das variáveis nome e idade foi undefined, pois não há um valor definido

nome = prompt("Qual é o seu nome?")
idade = Number (prompt("Qual é a sua idade?"))

console.log(typeof nome);
console.log(typeof idade);

//as variaveis agora apresentam os nomes de: string e number.

console.log("Olá", nome, "você tem", idade, "anos.")

//EXERCICIO 2

const perguntaA = "Você está usando uma roupa azul hoje?";
const respostaA = prompt(perguntaA);

const perguntaB = "Você está usando uma sunga?";
const respostaB = prompt(perguntaB);

const perguntaC = "Você está usando uma bermuda?";
const respostaC = prompt(perguntaC);

console.log("Você está usando uma roupa azul hoje?", respostaA)
console.log("Você está usando uma sunga?", respostaB)
console.log("Você está usando uma bermuda?", respostaC)






