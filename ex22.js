/*Escreva uma função somarValores(). Peça o usuário para digitar um valor no Prompt
armazenando este valor em um array. Faça isso enquanto o usuário entrar com um
valor não numérico ou apertar “Esc” ou “Cancelar”.
Calcule e retorne a soma dos valores deste array de itens.*/



res = true;
let cont=0;
let soma = 0;
let numeros = [];

function somarValores(valor){
    for( let i=0; i<valor.length;i++){
        if(isNaN(valor[i]) || valor[i] == null) {
        soma = soma;
    }else{
        soma = soma + Number(valor[i]);
    }
    }
    console.log("A soma dos valores inseridos e: " + soma );
}

do{
numeros.push(prompt("Digite um valor: "));
if(isNaN(numeros[cont])){
    res = false;
    alert(res);
}
if(res==true){
res = confirm("Deseja continuar?");
cont++;
}
}while ( res == true );
console.log(numeros);
somarValores(numeros);