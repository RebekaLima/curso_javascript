/** 
 * Aritméticos 
 * + Adição / Concatenação: Unir dois valores. A concatenação com a adição acontece quando um dos valores é String, dessa forma ao invés da adição ser realizada, ocorre a concatenação.
 * - / *
 * ** potenciação (para elevar números)
 * /: Divisão
 * % Resto da divisão
*/

// Concatenação
const num1 = '5';
const num2 = 10;
console.log(num1 + num2);

//Multiplicação
console.log(num1 * num2);

//Divisão
console.log(num1 / num2);

//Resto da divisão
console.log(num1 % num2);

// Adição
const num3 = 5;
const num4 = 10;
console.log(num3 + num4);

//Contador de incremento
// Caso queira incrimentar o valor da variável sempre de 1 em 1 número, é possível utilizar "++"
let contador = 1;
contador++;
contador++;
contador++;
console.log(contador);

let contador2 = 1;
console.log(contador2++); //O um aparece aqui porque o incremento acontece após exibir o valor
console.log(contador2); //Por esse motivo o número 2 aparecerá somente aqui.

//Contador de decremento
//Mesma função de incremento, porém por meio da subtração
let contador3 = 10;
console.log(--contador3);
console.log(contador3);

//Incremento: ++
//Decremento: --

const passo = 2;
let contador4 = 0;

contador4 = contador4 + passo;
console.log(contador4);
contador4 = contador4 + passo;
console.log(contador4);
contador4 = contador4 + passo;
console.log(contador4);

//Operadores de atribuição
contador4 += 2; // Essa expressão é o mesmo de: contador = contador + passo(neste caso seria 6)
console.log(contador4);

contador4 *=2
console.log(contador4);

//NaN = not a number: Significa que algum dado deu errado no processo como, por exemplo, tentar multiplicar uma String
//É possível corrigir com parseInt (Para números inteiros) ou parseFloat(Para números decimais)