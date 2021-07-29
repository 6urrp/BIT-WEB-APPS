let nameDiv = document.querySelector(".names");
let about = document.querySelector(".about")
const url = "https://rickandmortyapi.com/api/character/";

fetch(url)
.then(resp => {
    
    return resp.json();
})
.then(char => {
    char.results.forEach(el => {
        nameDiv.innerHTML += `
        <div class="char-div">
            <img src=${el.image}>
            <p class="char-name" id="${el.id}">${el.name}</p>
        </div>`
    });
    let single = document.querySelectorAll(".char-name");
    let singleArr = Array.from(single);
    console.log(single)
    singleArr.forEach( el => el.addEventListener("click", handler));
    
})

const handler = e => {
    nameDiv.innerHTML = "";
    nameDiv.className = "col-6";
    about.style.display = "inline-block"
    let id = e.target.getAttribute("id");
    let url = `https://rickandmortyapi.com/api/character/${id}`;
    fetch(url)
    .then(response => {
        return response.json();
    }) 
    .then(character => {
        nameDiv.innerHTML = `
        <div class="single-char">
            <h3>${character.name}</h3>
            <table>
                <tr>
                    <th>${character.name}</th>
                </tr>
                <tr>
                    <td><img src=${character.image}></td>
                </tr>
                <tr>
                    <th>SPECIES:</th>
                    <td>${character.species}</td>
                </tr>
                <tr>
                    <th>STATUS:</th>
                    <td>${character.status}</td>
                </tr>
                <tr>
                    <th>GENDER</th>
                    <td>${character.gender}</td>
                </tr>
                <tr>
                    <th>HOME PLANET:</th>
                    <td>${character.origin.name}</td>
                </tr>
            </table>
        </div>`
    });
    e.preventDefault();
};



/* <ul class="char-list">
                <li>${character.name}</li>
                <li><img src=${character.image}></li>
                <li>Species: ${character.species}</li>
                <li>Status: ${character.status}</li>
                <li>Gender: ${character.gender}</li>
                <li>Home Planet: ${character.origin.name}</li>
            </ul>*/

