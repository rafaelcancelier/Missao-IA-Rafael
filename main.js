const caixaPrincipal = document.querySelector(".caixa-principal");
const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const caixaResultado = document.querySelector(".caixa-resultado");
const textoResultado = document.querySelector(".texto-resultado");


const perguntas = [
    {
        enunciado: "Você prefere fazer seu hobby em casa ou fora de casa?",
        alternativas: [
            {
                texto: "Fazer seu hobby em casa.",
                afirmacao: "Você se sente mais confortável e relaxado ao praticar seu hobby no ambiente de casa",
            },
            {
                texto: "Fazer seu hobby fora de casa",
                afirmacao: "Você gosta de explorar novos lugares e aproveitar o ar livre ao realizar seu hobby",
            }
        ]
    },
    {
        enunciado: "Com que frequência você pratica seu hobby?",
        alternativas: [
            {
                texto: "Todos os dias ou quase todos os dias.",
                afirmacao: "Você integra seu hobby na rotina diária para manter o equilíbrio e o prazer constante.",
            },
            {
                texto: "Algumas vezes por semana ou menos.",
                afirmacao: "Você integra seu hobby na rotina diária para manter o equilíbrio e o prazer constante.",
            }
        ]
    },
    {
        enunciado: "Você prefere hobbies criativos ou físicos?",
        alternativas: [
            {
                texto: "Hobbies criativos, como pintar ou escrever",
                afirmacao: "Você gosta de expressar ideias e emoções através de criações artísticas e imaginativas.",
            },
            {
                texto: "Hobbies físicos, como correr ou dançar",
                afirmacao: "Você gosta de expressar ideias e emoções através de criações artísticas e imaginativas.",
            }
        ]
    },
    {
        enunciado: "Você compartilha seu hobby com outras pessoas?",
        alternativas: [
            {
                texto: "Sim, gosto de fazer com amigos ou família.",
                afirmacao: "Você encontra mais diversão ao conectar-se com outros e trocar experiências no hobby",
            },
            {
                texto: "Não, prefiro praticar sozinho.",
                afirmacao: "Você encontra mais diversão ao conectar-se com outros e trocar experiências no hobby",
            }
        ]
    },
    {
        enunciado: "Qual é o melhor horário do dia para seu hobby?",
        alternativas: [
            {
                texto: "De manhã ou à tarde.",
                afirmacao: "Você usa o hobby para energizar o dia e manter a produtividade alta.",
            },
            {
                texto: "À noite ou antes de dormir.",
                afirmacao: "Você usa o hobby para energizar o dia e manter a produtividade alta.",
            }
        ]
    },
];

let atual = 0;
let perguntaAtual;
let historiaFinal = " ";

function mostraPerguntas(){

  if (atual >= perguntas.length){
    mostraResultado();
    return;
  }

perguntaAtual = perguntas[atual];
caixaPerguntas.textContent = perguntaAtual.enunciado;
caixaAlternativas.textContent = " ";
mostraAlternativas();
}
function mostraAlternativas(){
    for (const alternativa of perguntaAtual.alternativas){
        const botaoAlternativas = document.createElement("button");
        botaoAlternativas.textContent = alternativa.texto;
        botaoAlternativas.addEventListener("click", () => respostaSelecionada(alternativa)) 
        caixaAlternativas.appendChild(botaoAlternativas);
    }

}

function respostaSelecionada(opcaoSelecionada){
    const afirmacoes = opcaoSelecionada.afirmacao;
    historiaFinal += afirmacoes + " ";
    atual++
    mostraPergunta();
}

function mostraResultado(){
    caixaPerguntas.textContent = "Se fosse possível ..."
    textoResultado.textContent = historiaFinal;
    caixaAlternativas.textContent = " ";
}

mostraPerguntas();