// tipo de dados primitivos

const nome = 'Rebeka'; // string
const num1 = 10; // number
const num2 = 10.52; // number (nesse caso é um número com ponto flutuante)
let nomeAluno; // undefined (variável declarada, mas não iniciada) / não aponta para local algum na memória
const sobreNomeAluno = null; // Nulo -> não aponta para local algum na memória
const boolean = true; // Pode ser "true" ou "false" (lógico)

console.log(typeof nome, num1, nomeAluno, sobreNomeAluno, boolean) // para verificar o tipo dos dados

const a = [1, 2]; // valores por referência 
const b = a;

console.log(a, b);

b.push(3);
console.log(a, b);