
string = "";
let val = 0;
let inp = document.querySelector("input");

// inp.keypress(function(e) {
//     e.preventDefault();
//     return false;
// });


document.addEventListener("keydown", function (e) {
    if ((e.key >= 0 && e.key <= 9) || e.location == 3 || e.key == "%" || e.key == "=" || e.key == 'Backspace') {
        if (e.key == "=") {
            string = eval(string);
            inp.value = string;
            string.slice(0,-1)
        }
        if (e.keyCode == 8) {
            inp.value = "";
            string = ""
        }
        else {
            string = string + e.key;
            inp.value = string;
        }
    }
});

// document.querySelector("body").addEventListener("keypress", function(event) {
//     console.log(event);
//     console.dir(event);
//     console.log("clicked")
// })


let btns = document.querySelectorAll("button");
for (let btn of btns) {
    btn.addEventListener("click", (e) => {

        if (e.srcElement.innerText == "CE" || e.srcElement.innerText == "C" || e.srcElement.innerText == "x" || e.srcElement.innerText == "=") {
            if (e.srcElement.innerText == "CE") {
                inp.value = "";
                string = ""
            }

            if (e.srcElement.innerText == "C") {
                inp.value = "";
                string = ""
            }

            if (e.srcElement.innerText == "=") {
                string = eval(string);
                inp.value = string;
            }

            if (e.srcElement.innerText == "x") {
               lght = string.length;
               inp.value = string.substring(0, lght-1)
               string = inp.value
            }

        }
        else {
            string = string + e.srcElement.innerText;
            inp.value = string;
        }


    })
}


// document.addEventListener("keydown", (e) => {
//     console.log(`keycode : ${e.keyCode}`)
//     console.log(e.key)
// })
