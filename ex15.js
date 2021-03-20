/*Escreva um if para checar se o valor de um produto NÃO está entre 100 e 200 de
forma inclusiva. Faça duas maneiras para isto, uma usando o NOT (!) e outra sem
utilizá-lo.*/

let valor = prompt("Informe o valor do produto",0);
valida100e200(valor);

function valida100e200(valida){
    
    if( Number(valida) >= 100 && Number(valida)<=200){
        console.log("O produto custa entre 100 e 200 reais");
    }else{
        console.log("O produto NAO custa entre 100 e 200 reais");
    }`
    `
    //doublecheck
    if( Number(valida) != 100 && Number(valida)!=200 && Number(valida) < 100 || Number(valida) > 200 ){
        console.log("CONFIRMADO. O produto NAO custa entre 100 e 200 reais");
    }else{
        console.log("O esta entre o valor estimado.");
    }

}