let nameDiv = document.querySelector(".names");
const url = "https://rickandmortyapi.com/api/character/";

fetch(url)
.then(resp => {
    return resp.json();
})
.then(now => {
    let names = now.results.forEach(el => {
        nameDiv.innerHTML += `
        <div class="char-div">
            <img src=${el.image}>
            <p class="char-name">${el.name}</p>
        </div>`
    });
})

// const xhr = new XMLHttpRequest();
// xhr.open("GET", url, true);
// xhr.onload = function () {
//     let response = JSON.parse(xhr.responseText)
//     console.log(response);
// }
// xhr.send()