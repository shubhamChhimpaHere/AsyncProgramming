document.addEventListener("DOMContentLoaded", setdiv);

function setdiv() {
  // Get the container and the last element
  const container = document.getElementById("container");
  const lastElement = document.querySelector(".paidbox:last-child");

  // Scroll to the last element
  if (container && lastElement) {
    container.scrollTop = lastElement.offsetTop;
  }
}



let mainarr = [
 
];

let container = document.getElementById('container');
let footer = document.getElementById('footer');
let delay = null;
let count = 0;

// { 500, paid/failed}



function draw() {


  container.innerHTML = ``;
  mainarr.forEach((ele) => {
    container.innerHTML += `
        <div class="paidbox">
        <h4>Payment to Anonymous</h4>
        <h2>$ <span>${ele.val}</span></h2>
        <h5 class=${ele.res} >${ele.res}</h5>
    </div>
        `;
  })

  setdiv();
  footer.style.display = 'flex';

}

let paybtn = document.getElementById('firstbtn')

function pay() {
  
  delay = ( Math.random() * 8 + 3 ) * 1000;

  let amountbox = document.getElementById('amount');
  let amount = amountbox.value;



  if (amount && amount > 0) {

    footer.style.display = 'none';

    let obj = {};
    obj.val = amount;
    if(delay < 8000) {
      obj.res =  'paid';
    } else {
      obj.res = 'failed';
    }

    mainarr.push(obj);


    container.innerHTML = `
    <div id="processbox">
            
    <div class="processimg">
        <img src="https://media.tenor.com/AmALF78zapsAAAAC/what-processing.gif" alt="processing">
    </div>
    <div class="processimg">
        <div class="paidbox">
            <h4>Paying to Anonymous</h4>
            <h2>$ <span>${amount}</span></h2>
           
        </div>
    </div>

</div>
    `;

    setTimeout(() => {
      new Promise((res, rej) => {
        if(delay < 8000 || count > 2) {
          res('payment successful');
        }
        else {
          rej('payment failed ');
        }
      })
      .then( (res) => {
       
        container.innerHTML = `
        <div id="processbox">
                
     
        <div class="processimg">
            <div class="paidbox">
                <h4>Payment succesfull</h4>
                <h2>$ <span>${amount}</span></h2>
               
            </div>
        </div>

    </div>
        `;

        console.log(res)
        count = 0;
      })
      .catch((rej) => {

        container.innerHTML = `
        <div id="processbox">
                
     
        <div class="processimg">
            <div class="paidbox">
            
                <h4>time limit exceed</h4>
                <h4 style= "color:red;">Payment failed</h4>
                <h2>$ <span>${amount}</span></h2>
               
            </div>
        </div>

    </div>
        `;
        console.log(rej)
        count++;
      })
      .finally(() => {
        setTimeout(draw, 2000)
      })
    }, delay);
    // console.log(amount, delay);
    amountbox.value = null;

  }


}
paybtn.addEventListener('click', pay)


