/*Faça um programa que entre com cinco números e imprima o
quadrado de cada número (Looping).*/

let numeros = [1,2,3,4,5];//declara um array com valores iniciais definidos
console.log(numeros);//exibe na tela os números do array "numeros"

let loop = 1;//declara variável loop com valor inicial 1
while(loop!= 0){//funcao WHILE para executar funcao em loop
    for( let x=0;x<5;x++ ){//Funcao FOR para percorrer os elementos do array "numeros"
        numeros[x] = (numeros[x]**2);//funcao para elevar à 2 (x²) todos os números so array "numeros"
    }
    console.log(numeros);//exibe na console os valores salvos no array "numeros"
}