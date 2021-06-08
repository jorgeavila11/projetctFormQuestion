var idContador = 0;
var idFormulario = 0;
const questions = [
    {
        question:'Quanto é 2 + 2 ?',
        options : ["1","2","3","4"],
    },
    {
        question:'',
        options:[]
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
                            <textarea cols="50" rows="1" placeholder="Faça uma pergunta">faça uma pergunta</textarea>
                    </div>
                    <div class="divtable">
                        <table class="table${idCard}">
                            <tbody>
                                <div>
                                    dentro
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
    
    //tableContainer : document.querySelectorAll('table tbody')[0],    
    
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
    }
}

const Form = {
    submit(event){
        event.preventDefault();
    },
}

function adicionarCard(){    
    DOM.addCard();
}

function adicionaForm(e){    
    DOMForm.addForm(e.id);
}





















