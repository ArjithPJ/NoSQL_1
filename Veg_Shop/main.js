window.addEventListener("DOMContentLoaded", ()=>{
    axios.get('https://crudcrud.com/api/74cff3e77d944489b78265c2acd573e0/home')
        .then((response)=>{
            console.log(response);
            displayData(response.data);
        })
        .catch((error)=>{
            console.log(error);
        })
})
//const deletebtn=document.createElement('button');

function displayData(data) {
    const container = document.getElementById('container');
    const num=document.getElementById('number');
    //container.innerHTML = '';
    data.forEach(item => {
      var itemDiv = document.createElement('div');
      var deletebutton=document.createElement('button');
      deletebutton.innerText="Delete";
      itemDiv.innerHTML = `<p id='_id'>${item._id}</p>  <p id='name'>${item.name}</p>  <p id='price'>Rs.${item.price}</p>  <p id='quantity'>${item.quantity}</p>  <input type="number" id="bought"></input>   `;
      
      var buybutton=document.createElement('button');
      buybutton.innerText="Buy";
      itemDiv.appendChild(buybutton);
      itemDiv.appendChild(deletebutton);
      deletebutton.addEventListener('click',DeleteItem);
      buybutton.addEventListener('click',BuyItem);
      
      container.appendChild(itemDiv);
      num.innerText=Number(num.innerText)+1;

    });
  }
var form=document.getElementById('my-form');
console.log(form);

form.addEventListener('submit',StoreItCloud);

//deletebtn.addEventListener('click', DeleteItem);



// function StoreIt(e){
//   e.preventDefault();
//   var name=document.getElementById('name').value;
//   var price=document.getElementById('price').value;
//   var quantity=document.getElementById('quantity').value;
  

//   var li=document.createElement('li');
//   li.className='list-group-item';
//   li.appendChild(document.createTextNode(name+"-"+price+"-"+quantity));
//   form.appendChild(li);
//   let myObj={
//     'name':name,
//     'price':price,
//     'quantity':quantity
//   };
//   localStorage.setItem(price,JSON.stringify(myObj));  
// }

function StoreItCloud(e){
    e.preventDefault();
    var name=document.getElementById('name').value;
    var price=document.getElementById('price').value;
    var quantity=document.getElementById('quantity').value;
    document.getElementById('name').value='';
    document.getElementById('price').value='';
    document.getElementById('quantity').value='';

    let myObj={ 
        'name':name,
        'price':price,
        'quantity':quantity
      };
      axios.post("https://crudcrud.com/api/74cff3e77d944489b78265c2acd573e0/home", myObj)
          .then((response)=>{
            const container = document.getElementById('container');
            //container.innerHTML = '';
            const itemDiv = document.createElement('div');
            const deletebutton=document.createElement('button');
            deletebutton.innerText="Delete";
            itemDiv.innerHTML = `<p id='_id'>${response.data._id}</p><p id='name'>${name}</p>  <p id='price'>${price}</p>  <p id='quantity'>${quantity}</p> <input type="number" id="bought"></input>`;
            
            const buybutton=document.createElement('button');
            buybutton.innerText="Buy";
            buybutton.addEventListener('click',BuyItem);
            itemDiv.appendChild(buybutton);
            itemDiv.appendChild(deletebutton);
            deletebutton.addEventListener('click',DeleteItem);
            container.appendChild(itemDiv);
            const num=document.getElementById('number');
            console.log(num);
            num.innerText=Number(num.innerText)+1;
            
          })
          .catch((err)=>{
              console.log(err)
          })
     
}

function DeleteItem(e){
e.preventDefault();
console.log(e.target.parentElement.querySelector('#_id').innerText);
const id=e.target.parentElement.querySelector('#_id').innerText;
axios.delete("https://crudcrud.com/api/74cff3e77d944489b78265c2acd573e0/home/"+id)
    .then(()=>{
        e.target.parentElement.remove();
        const num=document.getElementById('number');
        console.log(num);
        num.innerText=Number(num.innerText)-1;
    })
    .catch((err)=>{
        console.error(err);
    })
}

function BuyItem(e){
    e.preventDefault();
    var data=e.target.parentElement;
    console.log(data);
    
    const buy_quantity=e.target.parentElement.querySelector('#bought').value;
    const quantity=e.target.parentElement.querySelector('#quantity').innerText;
    console.log(quantity-buy_quantity);
    console.log(quantity);
    console.log(buy_quantity);
    data.querySelector('#quantity').innerText=quantity-buy_quantity;
    const id=e.target.parentElement.querySelector('#_id').innerText;
    axios.get('https://crudcrud.com/api/74cff3e77d944489b78265c2acd573e0/home/'+id)
        .then((response)=>{
            const existingData=response.data;
            console.log(existingData);
            if(quantity-buy_quantity<=0){
                axios.delete('https://crudcrud.com/api/74cff3e77d944489b78265c2acd573e0/home/'+id)
                .then(()=>{
                    e.target.parentElement.remove();
                    const num=document.getElementById('number');
                    console.log(num);
                    num.innerText=Number(num.innerText)-1;
                })
            }
            else{
                existingData.quantity=quantity-buy_quantity;
                console.log(existingData);
                axios.put('https://crudcrud.com/api/74cff3e77d944489b78265c2acd573e0/home/',existingData)
                .then((response)=>{
                    console.log("Update successful:", response.data);
                })
                .catch((error)=>{
                    console.error("Error updating data:", error.message);
                })
            }
        })
        
    // axios.delete("https://crudcrud.com/api/0d226577a67448b6ae5002f3807e6684/appointmentData/"+id)
    // .then(()=>{
    //     e.target.parentElement.remove();
    // })
    // .catch((err)=>{
    //     console.error(err);
    // })
    
    // e.target.parentElement.remove();
    
}