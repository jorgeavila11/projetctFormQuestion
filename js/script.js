
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
    
    tableContainer : document.querySelector('.table tbody'),    
    
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
                                    oi
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

    createForm(){        
        const form = `        
            <td><input type="radio" name="nome" id="nome"></td>
            <td><input type="text" name="alternativa" id="alternativa" value="Opção"></td>
            <td><button>X</button></td>                
        `
        return form;
    },

    addForm(){
        const tr = document.createElement('tr');
        tr.innerHTML = DOM.createForm();
        DOM.tableContainer.appendChild(tr); 
    },

    addCard(){
        const newCard = document.createElement('div');
        newCard.innerHTML = DOM.createCard();
        DOM.cardConteiner.appendChild(newCard);
    },    
    removForm(){
        DOM.tableContainer.innerHTML = "";
    },    
}

function getTable2(index){
   const tableContainer2 = document.querySelectorAll('.table')[index];
   return  tableContainer2;
}

DOM.addCard();
DOM.addForm();
DOM.addForm();
console.log(getTable2(0));



