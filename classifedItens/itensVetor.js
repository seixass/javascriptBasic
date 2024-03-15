//Classificar os itens de um vetor
const nomes = ['Carlos', 'Wilton', 'Fonseca']

console.log(nomes.sort())
console.log(nomes.reverse())

const numbers = [12,3,5,8,20]

const ordemCrescente = (a, b) => a - b;
console.log(numbers.sort(ordemCrescente));

const ordemDecrescente = (a, b) => b - a;
console.log(numbers.sort(ordemDecrescente));