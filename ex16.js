/*
Escreva um bloco de código que irá perguntar através do prompt a identificação do
visitante:
    a) Se o visitante digitar “Admin” abra um prompt perguntando a senha. Se o
    input for vazio ou apertar Esc exiba um alerta com “Cancelado”, se for uma
    outra string exiba um alerta com a mensagem “Não conheço você”.
    b) A senha deverá ser checada da seguinte maneira:
        i) Se for igual a “UniBH” - exiba um alerta “Bem vindo”,
        ii) Se for uma outra string - exiba um alerta “Senha incorreta!”)
        iii) Se for vazio ou cancelado - exiba “Cancelado”
*/

let administrador = {
    nome: "Admin",
    senha: "UniBH"
}

function validasenha(valida){
    if(valida==administrador.senha){
        console.log("Bem vindo!");
    }
    else if(valida.length==0 && valida!=administrador.senha){
        console.log("Cancelado.")
    }
    else if(valida != administrador.senha){
        console.log("Senha incorreta!")
    }
}



let username = prompt("Usuario :");
console.log(username);
if(username.length == 0){
    console.log("Cancelado.")
}else{
    let pw = prompt("Senha: ");
    validasenha(pw);
}