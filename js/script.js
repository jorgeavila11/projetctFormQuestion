
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
    
    createCard(opcao1 = "",opcao2 = "",opcao3 = "",opcao4 = ""){
        const card = `
            <div class="card">
                <form action="#" name="exemplo">
                    <div>
                        <h3>Pergunta ?</h3>
                            <textarea cols="50" rows="1" placeholder="Faça uma pergunta">faça uma pergunta</textarea>
                    </div>
                    <div class="divtable">
                        <table class="table">
                            <tbody>
                                <div>
                                    <tr> 
                                        ${opcao1}
                                    </tr>
                                    <tr> 
                                        ${opcao2}
                                    </tr>
                                    <tr> 
                                        ${opcao3}
                                    </tr>
                                    <tr> 
                                        ${opcao4}
                                    </tr>
                                </div>
                            </tbody>
                        </table>
                    </div>
                </form>
            </div>
        `
        return card;
    },

    addForm(){
        const tr = document.createElement('tr');
        tr.innerHTML = DOM.createForm();
        DOM.tableContainer.appendChild(tr); 
    },

    addCard(){
        const newCard = document.createElement('div');
        newCard.innerHTML = DOM.createCard(DOM.createForm(),DOM.createForm());
        DOM.cardConteiner.appendChild(newCard);
    },    
    removForm(){
        DOM.tableContainer.innerHTML = "";
    },
    
    createForm(){        
        const form = `        
            <td><input type="radio" name="nome" id="nome"></td>
            <td><input type="text" name="alternativa" id="alternativa" value="Opção"></td>
            <td><button>X</button></td>                
        `
        return form;
    },
}

DOM.addCard();
DOM.addCard();


