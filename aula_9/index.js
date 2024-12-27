//let vs var

var nome = 'Rebeka';
var nome = 'Luiz';

console.log(nome);
console.log(nome);
//nessa situação acima, o console vai retornar "Luiz" duas vezes, pois a segunda declaração de variável se soprepos a primeira
//var pemite redeclarar variáveis

let nome = 'Luiz';
let nome = 'Rebeka';

console.log(nome);
//o console vai retornar erro pois o let não permite redeclarar variável