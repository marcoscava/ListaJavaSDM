/*Escreva outra linha de código que adicione uma nova propriedade ao seu pinguim
chamada podeVoar e defina-a como false. (Observação: não modifique o código de
criação de pinguins que você escreveu acima! Execute esta etapa em uma linha de
código separada.)*/

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
console.log("Pode voar: " + meuPinguim.podeVoar);