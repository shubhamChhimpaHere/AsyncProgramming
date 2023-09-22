
let orderbtn = document.getElementById('orderbtn');
let completedbox = document.getElementById('completedbox');
let input = document.getElementsByTagName('input');
let delay = null;
let orderid = null;
let started = true;


orderbtn.addEventListener('click', () => {


    if (started) {
        started = false;


        let anychecked = false;

        for (let i = 0; i < input.length; i++) {
            if (input[i].checked) {
                anychecked = true;
                break;
            }

        }

        if (anychecked) {



            delay = (Math.random() * 8 + 3) * 1000;
            orderid = Math.floor(Math.random() * 1000000 + 1000000);

            completedbox.innerHTML = `
        <h2>Processing... </h2>
        <p>Your order number is: <span id="order-number">${orderid}</span></p>
        `;
            setTimeout(() => {
                new Promise((res, rej) => {

                    res();
                })
                    .then(() => {
                        completedbox.innerHTML = `
                <h2>Order Completed!</h2>
                <p>Your order number is: <span id="order-number">${orderid}</span></p>
                `;
                    })
            }, delay)

        }
        else {
            completedbox.innerHTML = `
        <h3> Plese select any one of them</h3>
       
        `;
        }


        setTimeout(() => {
            started = true;
            delay = 0;
            // console.log('end')
        }, delay)

    }

})