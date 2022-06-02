/*******LEV 1.1*******/

setTimeout(function myFunction() {
    console.log("Start Warten für 3 Sekunden");
    if (3000) {
        clearInterval(timerId);
    }
}, 3000);

let timer = () => {
    let d = new Date();
    console.log(d.toLocaleTimeString());
}
timer();
let timerId = setInterval(timer, 1000);

/********LEV 1.2******/

let counter = 100;
let button = document.getElementById("btn");
let anzeige = document.getElementsByClassName("zeit")

button.addEventListener("click", prozent = () => {
    anzeige[0].innerHTML = counter + "%";
    if (counter == 0) {
        clearInterval(z)
        console.log("Feierabend!")
    }
    counter--;
})

let z = setInterval(prozent, 30);




