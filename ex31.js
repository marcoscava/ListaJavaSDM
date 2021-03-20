/*Crie uma função para validar um CPF. A função deverá receber um número como
input e retornar se este número é um CPF válido. Para este número ser considerado
válido ele deve ter 11 dígitos e a soma dos seus dígitos não poderá ser maior que
80.*/

let somadigitos = 0;

function validaCPF(CPF){
let validacao = CPF.split("");
//console.log(validacao);
    if(validacao.length == 11){
        for ( let i=0; i<validacao.length; i++){
            somadigitos = somadigitos + Number(validacao[i]);
        }
        //console.log("soma" + somadigitos);
        if ( somadigitos < 80 ){
            return true;
        }else{
        return false;
        }
    }else{
    return false;
    }
}

let numeros = prompt("Insira seu CPF: ");
console.log("O valor inserido e " + validaCPF(numeros));