/*Escreva outro método chamado fly e, dentro desse método, use uma instrução if /
else para imprimir "Eu posso voar!" no console se a propriedade podeVoar do seu
pinguim for verdadeira ou "Não posso voar!" se sua propriedade podeVoar for false.*/

let meuPinguim = {
    nome: "Pororo",
    origem: "Coreia do Sul",
    idioma: "Coreano",
    coprodutores: "	Lisa Ferrasan e Mickey Lawrence",
    produtorExecutivo: "Michael Loman e Arlene Sherman",
    editor: "Mark Zaslove",
    distribuicao: "Estados Unidos Warner Bros. Television Distribution e Brasil Focus Filmes",
    musica: "Bruce Broughton",
    empresaProdutora: "Ocon Animation Studios, Iconix Entertainment, SK Broadband",
    emissoraOriginal: "EBS 1TV",
    transmissaoOriginal: "27 de novembro de 2003 – presente",
    temporadas: 5,
    episodios: 234
}

console.log("Ola, sou um pinguim e meu nome e " + meuPinguim.nome + "!");
meuPinguim.podeVoar = false;

meuPinguim.emitirSom = function() {
    console.log("CHIRP CHIRP! É assim que os pinguins se parecem?");
}

meuPinguim.fly = function() {
    if(meuPinguim.podeVoar==true){
        console.log("Eu posso voar!")
    }else{
    console.log("Nao posso voar!");
    }
}

//meuPinguim.fly();