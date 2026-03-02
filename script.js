// document.querySelector(".calculate_button").autofocus();

function calculate() {

    let n = document.querySelector(".input_box");
    let number = n.value;

    console.log(number);


    // let n = 5;
    let ans = 1;

    if (!number) {
        `${alert("please Enter your number")}`;

    } else if (number < 0) {
        `${alert("Enter positive number")}`;

    } else if (number == 0) {
        document.querySelector(".ans h1").innerHTML = 0;

    } else {
        for (i = number; i > 0; i--) {
            ans = ans * i;
            document.querySelector(".ans h1").innerHTML = ans;
        }
    }






}

document.body.firstElementChild.firstElementChild.style.fontFamily = "Arial, Helvetica, sans-serif";

document.body.firstElementChild.firstElementChild.style.textDecoration.toUpperCase();