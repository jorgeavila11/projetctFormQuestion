
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
        const card = `
            <div class="card">
                <form action="#">
                    <div>
                        <h3>Pergunta ?</h3>
                            <textarea cols="50" rows="1" placeholder="Faça uma pergunta">faça uma pergunta</textarea>
                    </div>
                    <div class="divtable">
                        <table class="table">
                            <tbody>
                                <div>
                                    dentro
                                </div>
                            </tbody>
                        </table>
                        <button>Adicionar opção</button>
                    </div>                    
                </form>
            </div>
        `
        return card;
    },

    // createForm(){        
    //     const form = `        
    //         <td><input type="radio" name="nome" id="nome"></td>
    //         <td><input type="text" name="alternativa" id="alternativa" value="Opção"></td>
    //         <td><button>X</button></td>
    //     `
    //     return form;
    // },
    addCard(){
        const newCard = document.createElement('div');
        newCard.innerHTML = DOM.createCard();
        DOM.cardConteiner.appendChild(newCard);
    },    

    // addForm(){
    //     const tr = document.createElement('tr');
    //     tr.innerHTML = DOM.createForm();
    //     DOM.tableContainer.appendChild(tr); 
    //     
    // },
    
    removForm(){
        DOM.tableContainer.innerHTML = "";
    },    
    
}

DOM.addCard();
DOM.addCard();


var tableContainer = document.querySelectorAll('table')[0];
console.log(tableContainer);



function createForm(){ 
    const form = `        
        <td><input type="radio" name="nome" id="nome"></td>
        <td><input type="text" name="alternativa" id="alternativa" value="Opção"></td>
        <td><button>X</button></td>
    `
    return form;
};

function addForm(){
    const tr = document.createElement('tr');
    tr.innerHTML = createForm();    
    tableContainer.appendChild(tr);
}

addForm();
addForm();
addForm();
addForm();














