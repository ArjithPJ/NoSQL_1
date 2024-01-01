var list=document.getElementById('list');
console.log(list);
const btn=document.querySelector('#btn');
const del=document.getElementById('delete');
console.log(del);
var tbody=document.querySelector('tbody');

btn.addEventListener('click',StoreIt);

function StoreIt(e){
    e.preventDefault();
    console.log(1);
    var expense=document.getElementById('text1').value;
    var description=document.getElementById('text2').value;
    var category=document.getElementById('category').value;
    /* var li=document.createElement('li');
    li.classname='item';
    li.id=expense;
    li.appendChild(document.createTextNode(expense));
    var editbtn=document.createElement('input');
    editbtn.type='submit';
    editbtn.value='Edit expense';
    editbtn.id='edit';
    var deletebtn=document.createElement('input');
    deletebtn.type='submit';
    deletebtn.value='Delete expense';
    deletebtn.id='delete';
    list.appendChild(li);
    li.appendChild(document.createTextNode("-"));
    li.appendChild(document.createTextNode(description));
    li.appendChild(document.createTextNode("-"));
    li.appendChild(document.createTextNode(category));
    li.appendChild(editbtn);
    li.appendChild(deletebtn); */
    var tr=document.createElement('tr');
    var td1=document.createElement('td');
    td1.id='expense';
    td1.appendChild(document.createTextNode(expense));
    var td2=document.createElement('td');
    td2.id='description';
    td2.appendChild(document.createTextNode(description));
    var td3=document.createElement('td');
    td3.id='category';
    td3.appendChild(document.createTextNode(category));
    var td4=document.createElement('td');
    var td5=document.createElement('td');
    var editbtn=document.createElement('input');
    editbtn.type='submit';
    editbtn.value='Edit expense';
    editbtn.id='edit';
    td4.appendChild(editbtn);
    var deletebtn=document.createElement('input');
    deletebtn.type='submit';
    deletebtn.value='Delete expense';
    deletebtn.id='delete';
    td5.appendChild(deletebtn);
    tr.appendChild(td1);
    tr.appendChild(td2);
    tr.appendChild(td3);
    tr.appendChild(td4);
    tr.appendChild(td5);
    tbody.appendChild(tr);
    let myObj={
        'expense':expense,
        'description':description,
        'category':category
    }
    localStorage.setItem(expense,JSON.stringify(myObj));
    document.getElementById('text1').value="";
    document.getElementById('text2').value="";
    document.getElementById('category').value="";
}

tbody.addEventListener('click',DeleteIt);
function DeleteIt(e){
    e.preventDefault();
    localStorage.removeItem(e.target.parentElement.parentElement.children[0].innerText);
    e.target.parentElement.parentElement.remove();
}

tbody.addEventListener('click',EditIt);

function EditIt(e){
    e.preventDefault();
    //console.log(e.target.parentElement.parentElement.getElementById('expense'));
    document.getElementById('text1').value=e.target.parentElement.parentElement.children[0].innerText;
    document.getElementById('text2').value=e.target.parentElement.parentElement.children[1].innerText;
    document.getElementById('category').value=e.target.parentElement.parentElement.children[2].innerText;
    localStorage.removeItem(e.target.parentElement.parentElement.children[0].innerText);
    e.target.parentElement.parentElement.remove();
    

}
