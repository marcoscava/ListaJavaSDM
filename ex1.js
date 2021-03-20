/*Crie um array de notas e calcule a média de todas essas notas e
exiba no console.*/

function calcularMedia(notas){//funcao para calcular a média de notas
    let soma = 0;//declara a variável soma com valor inicial 0

    for(let i=0; i<notas.length; i++){//funcao FOR para percorrer o array notas
        soma = soma + notas[i];//funcao para calcular SOMA de todos os elementos
    }
    let media = soma/notas.length;//funcao para calcular a média dos elementos somados
    return media;//retorna o valor salvo na variável "media" como resultado da funcao
}

let notas = [7,8,9,10,2];//determina array notas com valores
media1 = calcularMedia(notas);//media1 recebe o valor retornado pela funcao calcularMedia
console.log(media1);//exibe valor "media1" no console

let notas2 = [5,7,9,12,15];//determina array notas2 com valores
media2 = calcularMedia(notas);//media1 recebe o valor retornado pela funcao calcularMedia
console.log(media2);//exibe valor "media2" no console