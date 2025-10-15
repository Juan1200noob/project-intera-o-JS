const opcaoImagem = document.querySelector('#visualizacao img');
const titulo = document.querySelector('h1');
const nomeCorSelecionado = document.querySelector('#nome-cor-selecionada');
const imagem0 = document.querySelector('[for="0-imagem"] img');
const imagem1 = document.querySelector('[for="1-imagem"] img');
const imagem2 = document.querySelector('[for="2-imagem"] img');

const tamanhos = ['41 mm', '45 mm']
const opcoesCor = ['Verde-cipreste', 'Azul-inverno', 'Meia-noite', 'Estelar', 'Rosa-claro']

let numImagemAtualizar = 1;
let numImagemTamanho = 1;
let numImagemCor = 1;

function atualizarImagemCor() {
    const corSelecionado = document.querySelector('[name="opcao-cor"]:checked').id.charAt(0);

    numImagemCor = corSelecionado;

    const cor = opcoesCor[numImagemCor]

    // console.log(numImagemCor)

    titulo.innerText = "Pulseira loop esportiva " + cor.toLocaleLowerCase() + " para caixa de " + tamanhos[numImagemTamanho]

    nomeCorSelecionado.innerText = "Cor - " + cor

    opcaoImagem.src = "./imagens/opcoes-cores/imagens-"+ cor.toLocaleLowerCase() + "/imagem-" + numImagemAtualizar + ".jpeg"

     imagem0.src = "./imagens/opcoes-cores/imagens-" + opcoesCor[numImagemCor].toLocaleLowerCase() + "/imagem-0.jpeg"
    imagem1.src = "./imagens/opcoes-cores/imagens-" + opcoesCor[numImagemCor].toLocaleLowerCase() + "/imagem-1.jpeg"
    imagem2.src = "./imagens/opcoes-cores/imagens-" + opcoesCor[numImagemCor].toLocaleLowerCase() + "/imagem-2.jpeg"

}

function atualizarTamanhoSelecionado() {
    const imagemTamnho = document.querySelector('[name="opcao-tamanho"]:checked').id.charAt(0);

    numImagemTamanho = imagemTamnho;

    const tamanhoCaixa = tamanhos[numImagemTamanho];

    titulo.innerText = 
        "Pulseira loop esportiva " + opcoesCor[numImagemCor].toLocaleLowerCase() + " para caixa de " + tamanhoCaixa

    if (tamanhoCaixa === '41 mm') {
        opcaoImagem.classList.add("opcao-tamanho");
    } else {
        opcaoImagem.classList.remove("opcao-tamanho")
    }

}

function atualizarImagemSelecionada() {
    const imagemSelecionar = document.querySelector('[name="opcao-imagem"]:checked').id.charAt(0);

    numImagemAtualizar = imagemSelecionar;

    opcaoImagem.src = 
        "./imagens/opcoes-cores/imagens-" + opcoesCor[numImagemCor].toLocaleLowerCase() + "/imagem-" + numImagemAtualizar + ".jpeg";
}

