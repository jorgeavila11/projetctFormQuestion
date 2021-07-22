var idContador = 0;
var idFormulario = 0;



const questions = [
    {
        question:'Quanto é 2 + 2 ?',
        options : ["1","2","3","4"],
        optionCorrect: 1
    },
    {
        question:'',
        options:[],
        optionCorrect: 1
    },
]


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
                            <textarea cols="50" rows="1" id="pergunta" placeholder="Faça uma pergunta">faça uma pergunta</textarea>
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
        
        const form = `        
            <td><input type="radio" name="nome" id="nome"></td>
            <td><input type="text" name="alternativa" id="alternativa" value="Opção"></td>
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

    // //pegando dados do formulário
    // getDadosForm(){
        
    //     const dadosForm = {
    //         questão : '',
    //         resposta : {}
    //     }
    //     return dadosForm;
    // }

}

const Form = {
    submit(event){
        event.preventDefault();
    },
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

function salvar(){
    const pergunta = document.querySelectorAll('#pergunta');
    pergunta.forEach(pergunta => console.log(pergunta.value))

    const alternativa = document.querySelectorAll('#alternativa');
    alternativa.forEach(alternativa => console.log(alternativa.value));
}


















