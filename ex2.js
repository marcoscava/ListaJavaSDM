/*Solicite o usuário a inserção de notas via prompt e calcule a
média de diversas notas digitadas em um input, separados por
vírgula, pelo usuário*/

function calcularMedia(notas_string){//funcao para separar os números inseridos pelo usuário de "frase" para "array", usando vírgula como separador
    let notas = notas_string.split(",");//funcao split separa os elementos, usando a vírgula como separador
}

function calcularMedia(notas){//funcao para calcular a média das notas inseridas pelo usuário
    let soma = 0;//declara variável "soma" com valor inicial 0

    for(let i=0; i<notas.length; i++){//funcao FOR para percorrer o array "notas"
        soma = soma + Number(notas[i]);//convertendo array notas de texto(string) para número e depois soma com o valor previamente armazenado na variável "soma"
    }
    let media = soma/notas.length;//declara a variável "media" e atribui à esta variável o valor obtido do resultado da operacao soma/notas.length
    return media;//retorna o valor armazenado em "media" como resultado da funcao
}

let notas = prompt("Digite notas separadas por vírgula",0);//exibe na tela uma mensagem para o usuário em uma caixa de texto, e insere o número 0 como valor default dentro da caixa texto
console.log(calcularMedia(notas));//invoca a funcao calcularMedia e exibe no console o resultado da funcao