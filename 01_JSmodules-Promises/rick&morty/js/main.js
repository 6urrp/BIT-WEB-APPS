let nameDiv = document.querySelector(".names");
let about = document.querySelector(".about")
const url = "https://rickandmortyapi.com/api/character/";

const creatingPage = (url) => {
    fetch(url)
    .then(resp => {
    return resp.json();
    })
    .then(char => {
        console.log(char)
        char.results.forEach(el => {
            nameDiv.innerHTML += `
            <div class="char-div" id=${el.id}>
                <img src=${el.image}>
                <p class="char-name">${el.name}</p>
                <button class="like-button"><i class="fas fa-thumbs-up"></i></button>
            </div>`
        });
        let single = document.querySelectorAll(".char-div");
        let singleArr = Array.from(single);
        singleArr.forEach( el => el.addEventListener("click", handler));
    })
};

creatingPage(url);


const handler = e => {
    // e.stopPropagation()
    document.querySelector(".pagination-container").innerHTML = "";
    document.querySelector(".row").className = "single-div"
    document.querySelector(".names").className = "single-name"
    nameDiv.innerHTML = "";
    about.style.display = "inline-block"
    console.log(e.target)
    let id = e.target.getAttribute("id")
    console.log(id)
    let url = `https://rickandmortyapi.com/api/character/${id}`;
    fetch(url)
    .then(response => {
        return response.json();
    }) 
    .then(character => {
        console.log(character)
        nameDiv.innerHTML = `
        <div class="single-char">
            <h3>${character.name}</h3>
            <img src=${character.image}>
            <table>
                <tr>
                    <th>SPECIES:</th>
                    <td>${character.species}</td>
                </tr>
                <tr>
                    <th>STATUS:</th>
                    <td>${character.status}</td>
                </tr>
                <tr>
                    <th>GENDER:</th>
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




