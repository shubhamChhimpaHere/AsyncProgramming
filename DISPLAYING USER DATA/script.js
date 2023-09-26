let main = document.getElementById('main');
let btn = document.getElementById('fetchdata');


let arr; 

btn.addEventListener('click', () => {
    main.innerHTML = ``;
    fetchData();
    draw();
    // console.log(arr)

})

function draw() {

}


function fetchData() {
    let URL = `https://reqres.in/api/users`;
    fetch(URL)
    .then(res => res.json())
    .then(e => {
       arr = e.data;
    })
    .then( () => {
        arr.forEach(ele => {
            main.innerHTML += `
            <div>
            <img src=${ele.avatar} alt="">
            <h3>${ele.first_name+' '+ ele.last_name}</h3>
            <p>${ele.email}</p>
        </div>
            `;
        });
    })
}