

let startstop = document.getElementById('startstop');
let reset = document.getElementById('reset');
let clearid;



document.getElementById('forfocus').addEventListener('click', () => {
    let number = document.getElementById('number')

    if (number.style.opacity == 0) {
        number.focus();

    }


})


reset.addEventListener('click', validate)

function validate() {

    clearInterval(clearid);
    startstop.textContent = 'start';
    // if(startstop.textContent == 'stop') {
    // }
    const number = document.getElementById('number');


    if (number.value.length > 6) {
        number.value = number.value.slice(1);

    }
    else {
        while (number.value.length < 6) {
            number.value = '0' + number.value;
        }
    }
    // console.log(number.value.length)
    let hour = document.getElementById('hour')
    let mint = document.getElementById('mint')
    let second = document.getElementById('second')

    // console.log(number.value.slice(0, 2))
    // console.log(number.value.slice(2, 4))
    // console.log(number.value.slice(4, 6))

    // if (second.textContent.length == 2) {

    // }
    hour.textContent = number.value.slice(0, 2)
    mint.textContent = number.value.slice(2, 4)
    second.textContent = number.value.slice(4)


}
validate()

startstop.addEventListener('click', show);

function show() {

    if (hour.textContent + mint.textContent + second.textContent != '000000') {




        if (startstop.textContent == 'start') {

            startstop.textContent = 'stop';


            let hourval = document.getElementById('hour')
            let mintval = document.getElementById('mint')
            let secondval = document.getElementById('second')

            // console.log(hourval, mintval, secondval);




            clearid = setInterval(() => {

                if (hourval.textContent + mintval.textContent + secondval.textContent != '000000') {



                    if (secondval.textContent == '00') {

                        if (mintval.textContent == '00') {

                            hourval.textContent = Number(hourval.textContent) - 1;
                            while (hourval.textContent.length < 2) {
                                hourval.textContent = '0' + hourval.textContent;

                            }
                            mintval.textContent = 59;

                        }
                        else {
                            mintval.textContent = Number(mintval.textContent) - 1;
                            while (mintval.textContent.length < 2) {
                                mintval.textContent = '0' + mintval.textContent;
                            }
                        }
                        secondval.textContent = 59;
                    }
                    else {

                        secondval.textContent = Number(secondval.textContent) - 1;
                        while (secondval.textContent.length < 2) {
                            secondval.textContent = '0' + secondval.textContent;
                        }
                    }

                    // console.log(Number(secondval.textContent))
                    // if (secondval.textContent == 0) {
                    //     mintval.textContent = Number(mintval.textContent) - 1;
                    //     secondval.textContent = 59;
                    //     if (mintval.textContent == 0) {

                    //     }
                    // }

                }
                else {
                    // console.log('cleared')
                    clearInterval(clearid)
                }

                // console.log('working')
            }, 1000)


        }
        else {

            clearInterval(clearid);
            startstop.textContent = 'start';

        }

    }

}
