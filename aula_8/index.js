const nome = 'Rebeka Lima';
const sobrenome = 'Da Silva';
const idade = 22;
const peso = 47;
const altura = 1.50;

let imc = peso / (altura * altura);
let anoNascimento = 2024 - idade;

console.log (imc, anoNascimento);

//template strings

console.log(`${nome} ${sobrenome} tem ${idade} anos pesa ${peso} kg`); //inseri ${} nas váriáveis para que elas sejam lidas
console.log(`tem ${altura} de altura e seu IMC é de ${imc}`);
console.log(`${nome} nasceu em ${anoNascimento}.`);
