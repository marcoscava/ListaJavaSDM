/*Peça ao usuário para digitar 5 números em uma caixa de texto,
separados por vírgula, Verifique qual é o maior número e exiba-o.*/

let listanum = prompt("Digite numeros separados por vírgula",0);//exibe na tela uma mensagem para o usuário em uma caixa de texto, e insere o número 0 como valor default dentro da caixa texto
console.log("O maior valor: "+ max(listanum));//exibe uma mensagem no console e invoca a funcao "max"


function max(num_string){//funcao "max" para encontrar o maior valor inserido
    var maior = listanum[0];//decalara variavel "maior" e atribui a esta variável, o valor armazenado no array "listanum" no índice 0
    var j=1; //declara a variável J e atribui o valor 1

    do{//funcao do\while para percorrer o vetor J e comparar o valor de cada índice com a variável "maior"
        if(listanum[j]>maior){//se o valor armazenado no array "listanum" no índice "j" for maior que o valor armazenado em "maior", o valor de "lisatanum" é armazendo em "maior"
            maior = listanum[j];
            j++;
        }
        j++;
    }while(j<listanum.length);

    return maior;//retorna o valor da variável "maior" como resultado da função
}