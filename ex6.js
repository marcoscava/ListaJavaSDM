/*Peça ao usuário para digitar vários nomes. Exiba na tela todos os
nomes digitados, porém de maneira invertida (do último para o
primeiro).*/

let quantidade = prompt("Informe a quantidade de nomes que serão inseridos");
let i = 0;
let nomes = [];

for( let i = 0; i<quantidade; i++){
    nomes[i] = prompt("Insira um nome:")
}
console.log("Lista inserida: "+ nomes);
nomes.reverse();
console.log("Lista invertida: "+ nomes);