const subButton = document.querySelector("#submit");
const mainContainer = document.querySelector(".main-div");
const wrapp = document.querySelector(".wrapp-joke")

const url = "https://api.chucknorris.io/jokes/random";

const handler = e => {
    e.preventDefault();
    fetch(url)
    .then(response => {
        console.log(response)
        return response.json();
    })
    .then(val => {
        let joke = val.value;
        let p = document.createElement("p");
        p.innerText = joke;
        wrapp.append(p);
    });
    wrapp.innerText = "";
};


subButton.addEventListener("click", handler);