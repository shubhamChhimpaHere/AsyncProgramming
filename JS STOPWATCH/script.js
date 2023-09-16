
let ms = document.querySelector('#ms')
let second = document.querySelector('#second')
let mint = document.querySelector('#mint')
let hour = document.querySelector('#hour')
let times = document.querySelector('.times');
let btn = document.getElementById('btn');
let reset = document.getElementById('reset');

let count = 0;
let secondVal = 0;
let mintVal = 0;
let hourVal = 0;
let clearid;

reset.addEventListener('click', () => {
    if(count+ secondVal + mintVal + hourVal != 0) {

    
    count = 0;
    secondVal = 0;
    mintVal = 0;
    hourVal = 0;

    startStop();
    times.innerHTML = `
    <span id="second">0</span>
    <span id="ms">00</span>
    
    `;

    clearInterval(clearid);
    btn.innerText = 'start';


    }

})



function timer() {
    clearid = setInterval(() => {
        count++;
        if (count >= 100) {
            count = 0;
            secondVal++;
            if (secondVal >= 60) {
                secondVal = 0;
                mintVal++;
                if (mintVal >= 60) {
                    mintVal = 0;
                    hourVal++;
                }
            }
        }

        if(hourVal == 0) {

            if(mintVal == 0) {
                times.innerHTML = `
            
                     <span id="second">${secondVal}</span>
             
                     <span id="ms">${count}</span>
                `;
            }
            else {
                times.innerHTML = `
              
                    
                     <span id="mint">${mintVal}</span>
                     <span id="second">${secondVal}</span>
             
                     <span id="ms">${count}</span>
                `;
            }
        }
        else {
            times.innerHTML = `
            <span id="hour">${hourVal}</span>
                
                 <span id="mint">${mintVal}</span>
                 <span id="second">${secondVal}</span>
         
                 <span id="ms">${count}</span>
            `;
        }



      
      



    }, 10)
}

function startStop() {

    if(btn.innerText == 'START') {
        timer()
        btn.innerText = 'stop';
    }
    else {
        clearInterval(clearid);
        btn.innerText = 'start';
    }
}

btn.addEventListener('click', () => {
    startStop();
});

// timer()