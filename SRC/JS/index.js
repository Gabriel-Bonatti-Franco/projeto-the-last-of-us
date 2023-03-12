/*
    
    OBJETIVO - Quando clicarmos no botão temos que mostrar a imagem de fundo correspondente

    - passo 1 - dar um jeito de pegar o elemento HTML dos botoes

    - passo 2 - dar um jeito de identificar o click do usuário no botão

    - passo 3 - desmarcar o botão selecionado anterior
    
    - passo 4 - marcar o botão clicado como selecionado

    - passo 5 - Esconder a imagem anterior

    - passo 6 fazer aparecer a imagem correspondente ao botão clicado

*/

// passo 1 - dar um jeito de pegar o elemento HTML dos botoes

const botoesCarrossel = document.querySelectorAll('.botao')
const imagensCarrossel = document.querySelectorAll('.imagem')

// passo 2 - dar um jeito de identificar o click do usuário no botão

botoesCarrossel.forEach((botao, index) =>{
    botao.addEventListener('click', () => {
        
        desativarBotaoSelecionado()
        selecionarBotao(botao)
        desativarImagemAtual()
        selecionarImagemFundo(index)

        clearInterval(meucarrossel)
        carrosselAutomatico(index)
    })
})

function selecionarImagemFundo(index) {
    imagensCarrossel[index].classList.add('ativa')
}

function selecionarBotao(botao) {
    botao.classList.add('selecionado')
}

function desativarImagemAtual() {
    const imagemSelecionada = document.querySelector('.ativa')
    imagemSelecionada.classList.remove('ativa')
}

function desativarBotaoSelecionado() {
    const botaoSelecionado = document.querySelector('.selecionado')
    botaoSelecionado.classList.remove('selecionado')
}

function carrosselAutomatico(index) {
    
    let proximo = index

    if (proximo < (botoesCarrossel.length - 1)){
        proximo = proximo +  1
    }else{
        proximo = 0
    }
    
    meucarrossel = setInterval(() => {

        // o setInterval se repete após determinado tempo
        desativarBotaoSelecionado()
        selecionarBotao(botoesCarrossel[proximo])
        desativarImagemAtual()
        selecionarImagemFundo(proximo)

        if (proximo < (botoesCarrossel.length - 1)){
            proximo = proximo +  1
        }else{
            proximo = 0
        }

    }, 2500)

}

document.addEventListener('onLoad', carrosselAutomatico(0))
