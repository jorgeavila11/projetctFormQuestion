var idContador = 0;
var idContadorAlt = 0;
var idFormulario = 0;
var cont = 0;

//Objeto que guarda as preguntas e resposta
let dados = {    
    pergunta : "1 + 1",    
    resposta : {}
}

//capturando dados do formulário
function salvar(){
    
    const pergunta = document.querySelectorAll(`#pergunta`);
    pergunta.forEach(pergunta => console.log(pergunta.value));

    const alternativa = document.querySelectorAll('#alternativa');
    alternativa.forEach(alternativa => console.log(alternativa.value));
}

const DOM = {
    
    //tableContainer : document.querySelectorAll('table'),    
    cardConteiner : document.querySelector('.main'),
    
    createCard(){
        idContador++;        
        var idCard = "cardExtra"+idContador;        
        var card = `
            <div class="card">
                <form action="" onsubmit="Form.submit(event)">
                    <div>
                        <h3>Pergunta ?</h3>
                            <textarea cols="50" rows="1" id="pergunta" class="${idCard}" placeholder="Faça uma pergunta">faça uma pergunta</textarea>
                    </div>
                    <div class="divtable">
                        <table class="table${idCard}">
                            <tbody>
                                <div>
                                    
                                </div>
                            </tbody>
                        </table>
                        <button id=${idCard} onclick="adicionaForm(${idCard})">Adicionar opção</button>
                    </div> 
                </form>
            </div>
        `
        return card;
    },

    
    addCard(){
        const newCard = document.createElement('div');
        newCard.innerHTML = DOM.createCard();
        DOM.cardConteiner.appendChild(newCard);
    },     
    
}


const DOMForm = { 
    
    tableContainer : document.querySelectorAll('table')[0],    
    
    createForm(){        
        idContadorAlt = idContador;
        var idAlt = "altExtra"+idContadorAlt;
        const form = `        
            <td><input type="radio" name="nome" id="nome"></td>
            <td><input type="text" name="alternativa" id="${idAlt}" value="Opção"></td>
            <td><button>X</button></td>
            `
        return form;
    },
    
    addForm(e){
        const tr = document.createElement('tr');
        const el = document.getElementsByClassName("table"+e)[0];
        tr.innerHTML = DOMForm.createForm();
        el.appendChild(tr);        
        console.log(el);
        // const tr = document.createElement('tr');        
        // tr.innerHTML = DOMForm.createForm();
        // DOMForm.tableContainer.appendChild(tr);        
    },

    addFormu(){         
        const tr = document.createElement('tr');        
        tr.innerHTML = DOMForm.createForm();
        DOMForm.tableContainer.appendChild(tr);        
    },
    paraDepois(){
    //pegando dados do formulário e inserindo em um array
    // getDadosForm(){
    //     let per = [] ;
    //     let resp = [];
    //     let pergunta = document.querySelectorAll(`#pergunta`);
    //     pergunta.forEach(pergunta => per.push(pergunta.value));
    //     //return pergunta.forEach(pergunta => console.log(pergunta.value));
    //     console.log(per);       
    //     let alternativa = document.querySelectorAll("#alternativa");
    //     alternativa.forEach(alternativa => resp.push(alternativa.value));
    //     console.log(resp);
    // },    

    //montando a estrutura para pegar os dados dos formularios
    //getDadosForm(){
        // var i;
        // var r,a;
        // let pergunta = document.querySelectorAll("#pergunta");
        // let alternativa = document.querySelectorAll("#alternativa");
        // console.log(alternativa);
        // for(i = 0; i < pergunta.length ; i++){
        //     var newPergunta = "pergunta" + i;
        //     var newValor = pergunta[i].value;
        //     dados[newPergunta] = newValor;           
        // }
        // for( r = 0; r <  pergunta.length; r++){
        //     var newResposta = "resposta" + r;
        //     dados[newResposta] = r;
        // }

        // for( a = 0; a <  alternativa.length; a++){
        //     var newAlternativas = "Alternativa" + a;
        //     var valAlternativas = alternativa[a].value;
        //     dados.resposta[newAlternativas] = valAlternativas;
        // }
        
        // return dados

        // for( a = 0; a <  alternativa.length; a++){
        //     
        //     var newAlternativas = "Alternativa" + a;
        //     var valAlternativas = alternativa[a].value;
        //     dados[newResposta] = valAlternativas;
        //     dados.resposta[newAlternativas] = valAlternativas;                
        // }
        
        //}
    },

    getDadosForm(){
    
    
    }

}

const Form = {
    submit(event){
        event.preventDefault();
    },
}


function impPergunta(){
    Question.getQuestion();
}

//Adiciona uma nova questão/card
function adicionarCard(){
    DOM.addCard();
}

//adiciona opções nas novas questões
function adicionaForm(e){    
    DOMForm.addForm(e.id);
}
//adiciona opções na questão base 01 do card
function adicionaFormu(){    
    DOMForm.addFormu();
}

function pegarDados(){
   console.log(DOMForm.getDadosForm(0));
}




















