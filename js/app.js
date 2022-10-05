// Selectors
let items = document.querySelector('#items');
let addBtn = document.querySelector('#addBtn');
let quantity = document.querySelector('#quantity');
let inputForm = document.querySelector('#inputForm');
let rows = document.querySelector('#rows');
let total = document.querySelector('#total');


// functions
function calcTotal(){
    let costs = document.querySelectorAll('.cost');
    total.innerText = [...costs].reduce((pv,cv)=> pv + Number(cv.innerText),0);

     
}


function del(event){
    if(confirm('Are U sure to delete ?')){
        event.target.parentElement.parentElement.remove();
        calcTotal();
    }
    
}



// process
products.forEach(function(product){
    // console.log(product)
    let newOption = new Option(product.name, product.id);
    items.append(newOption);
    // console.log(newOption)
})


inputForm.addEventListener('submit', function(e){
    e.preventDefault();
    let currentproduct = products.find(product => product.id == items.value);
    let cost = currentproduct.price * quantity.valueAsNumber;
    let newTr = document.createElement('tr');
    newTr.innerHTML = `
                                         
                        <td>
                            ${currentproduct.name}
                            <p class='small text-danger mb-0 del-btn' onclick='del(event)'>delete</p>
                        </td>                     
                        <td class='text-end'>${currentproduct.price}</td>                    
                        <td class='text-end'>${quantity.valueAsNumber}</td>                    
                        <td class='text-end cost'>${cost}</td>                    
    `;
    
    rows.append(newTr);
    inputForm.reset();

    calcTotal();
    

    
})


