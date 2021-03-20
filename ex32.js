/*Escreva uma função calcularIdadeDoCachorro que deverá:
a) Receber dois argumentos:
i) idade real do cachorro
ii) uma função que irá exibir a categoria etária do Cachorro e que recebe
como parâmetro a idade real do cachorro e retorna “Criança” caso ele
seja menor que 14, “Adolescente” caso seja entre 14 e 28 e “Adulto”
caso seja maior que 28
b) Calcule a idade do cachorro baseada na taxa de conversão 1 ano humano =
7 anos de cachorro.
c) Use a idade do cachorro para chamar a função recebida como parâmetro e
exiba no console a idade do cachorro e a categoria etária dele.*/

function categoriaEtariaCachorro(idade){
    //1 para 7
    if( idade<14){
        return "Crianca";
    }if ( idade >= 14 && idade <= 28){
        return "Adolescente";
    }else
        return "Adulto";
}

function calcularIdadeDoCachorro(idadeReal){
    let anos = idadeReal*7;
    return anos;
}

let idadeCachorro = prompt("Informe a idade em anos do cachorro: ");
console.log(calcularIdadeDoCachorro(idadeCachorro));
console.log(categoriaEtariaCachorro(calcularIdadeDoCachorro(idadeCachorro)));