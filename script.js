const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const caixaResultado = document.querySelector(".caixa-resultado");
const textoResultado = document.querySelector(".texto-resultado");
const barraProgresso = document.querySelector(".progresso");
const btnReiniciar = document.querySelector(".reiniciar");

const perguntas = [
    {
        enunciado: "Assim que saiu da escola você se depara com uma nova tecnologia, um chat que consegue responder todas as dúvidas que uma pessoa pode ter, ele também gera imagens e áudios hiper-realistas. Qual o primeiro pensamento?",
        alternativas: [
            { texto: "Isso é assustador!", afirmacao: "No início ficou com medo do que essa tecnologia pode fazer." },
            { texto: "Isso é maravilhoso!", afirmacao: "Quis saber como usar IA no seu dia a dia." }
        ]
    },
    {
        enunciado: "Com a descoberta desta tecnologia, chamada Inteligência Artificial, uma professora de tecnologia da escola decidiu fazer uma sequência de aulas sobre esta tecnologia. No fim de uma aula ela pede que você escreva um trabalho sobre o uso de IA em sala de aula. Qual atitude você toma?",
        alternativas: [
            { texto: "Usa IA para pesquisar e entender melhor o tema.", afirmacao: "Conseguiu utilizar a IA para buscar informações úteis." },
            { texto: "Escreve com base em experiências próprias e pesquisas manuais.", afirmacao: "Sentiu mais facilidade em utilizar seus próprios recursos para escrever seu trabalho." }
        ]
    },
    {
        enunciado: "Após a elaboração do trabalho, a professora promoveu um debate sobre como a IA impacta o futuro do trabalho. Como você se posiciona?",
        alternativas: [
            { texto: "Defende que a IA cria novas oportunidades.", afirmacao: "Impulsionou a inovação e abriu novos caminhos profissionais." },
            { texto: "Preocupa-se com os empregos perdidos.", afirmacao: "Criou um grupo de estudos sobre o uso ético da IA." }
        ]
    },
    {
        enunciado: "Ao final, você precisou criar uma imagem que represente sua visão sobre IA. Qual escolha?",
        alternativas: [
            { texto: "Criar manualmente em um editor de imagens.", afirmacao: "Compartilhou seu conhecimento de design com iniciantes." },
            { texto: "Usar um gerador de imagens por IA.", afirmacao: "Acelerou o processo criativo e ajudou colegas que não sabiam desenhar." }
        ]
    },
    {
        enunciado: "Seu grupo de biologia entregou um trabalho totalmente copiado da IA. O que faz?",
        alternativas: [
            { texto: "Aceita como está, já que foi feito com comandos.", afirmacao: "Acabou se tornando dependente da IA para tudo." },
            { texto: "Revê e adiciona suas próprias ideias.", afirmacao: "Aprendeu que a IA deve ser auxílio, não resultado final." }
        ]
    }
];

let atual = 0;
let historiaFinal = "";

function mostraPergunta() {
    if (atual >= perguntas.length) {
        mostraResultado();
        return;
    }

    let perguntaAtual = perguntas[atual];
    caixaPerguntas.textContent = perguntaAtual.enunciado;
    caixaAlternativas.textContent = "";

    perguntaAtual.alternativas.forEach(alternativa => {
        const botao = document.createElement("button");
        botao.textContent = alternativa.texto;
        botao.addEventListener("click", () => respostaSelecionada(alternativa));
        caixaAlternativas.appendChild(botao);
    });

    atualizaProgresso();
}

function respostaSelecionada(opcao) {
    historiaFinal += opcao.afirmacao + " ";
    atual++;
    mostraPergunta();
}

function mostraResultado() {
    caixaPerguntas.textContent = "📌 Sua história em 2049:";
    textoResultado.textContent = historiaFinal.trim();
    caixaAlternativas.textContent = "";
    caixaResultado.style.display = "block";
}

function atualizaProgresso() {
    let progresso = ((atual) / perguntas.length) * 100;
    barraProgresso.style.width = progresso + "%";
}

// Reiniciar
btnReiniciar.addEventListener("click", () => {
    atual = 0;
    historiaFinal = "";
    caixaResultado.style.display = "none";
    mostraPergunta();
    barraProgresso.style.width = "0%";
});

// Iniciar
mostraPergunta();
