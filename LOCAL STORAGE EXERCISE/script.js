let mainAdd  = document.getElementById('mainAdd');
let mainShow = document.getElementById('mainShow');
let btnAdd = document.getElementById('add')
let btnShow = document.getElementById('show')
let form = document.querySelector('form');

// let arr = [];
let arr = localStorage.getItem('items') ? localStorage.getItem('items') : [];


function displayAdd() {
    arr = typeof arr === 'string' ? JSON.parse(arr) : arr;
    mainAdd.style.display = 'block';
    mainShow.style.display = 'none';
}
function displayShow() {
    mainShow.style.display = 'block';
    mainAdd.style.display = 'none';
    draw();
    
}

btnAdd.addEventListener('click',displayAdd)
btnShow.addEventListener('click',displayShow)


form.addEventListener('submit',(e) => {
    // e.preventDefault();
    let name = document.getElementById('name').value;
    let age = document.getElementById('age').value;
    let obj = {};
    obj.name = name;
    obj.age = age;

   
    arr.push(obj);
    localStorage.setItem('items',JSON.stringify(arr))

    // form.reset();
})

function draw() {
    arr = typeof arr === 'string' ? JSON.parse(arr) : arr;

    let tbody = document.getElementById('tbody');
    tbody.innerHTML = ``;
    for(let i = 0; i<arr.length; i++) {

        tbody.innerHTML += `
        
        <tr>
        <td>${arr[i].name}</td>
        <td>${arr[i].age}</td>
    </tr>
        `;

    }
}

