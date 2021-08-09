let nameDiv = document.querySelector(".names");
let about = document.querySelector(".about")
const url = "https://rickandmortyapi.com/api/character/";
let state = { 
    page: 1,
    allPages: 34,
    window: 5
}

const creatingPage = (url) => {
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
        let single = document.querySelectorAll(".char-div");
        let singleArr = Array.from(single);
        singleArr.forEach( el => el.addEventListener("click", handler));
    })
};

creatingPage(url);


const pageButtons = (pages) => {
        let wrapper = document.getElementById('pagination')
        wrapper.innerHTML = ``;

        for (let page = 1; page <= pages; page++) {
            wrapper.innerHTML += `<button value=${page} class="page btn btn-sm btn-info">${page}</button>`;
        }


        $('.page').on('click', function(event) {
            event.preventDefault();
            $('.names').empty()
            state.page = Number($(this).val())
            creatingPage(`${url}?page=${state.page}`);
    
        })
}
pageButtons(state.allPages);




// fetch(url)
// .then(resp => {
//     return resp.json();
// })
// .then(char => {
//     state.allPages = char.info.pages;
//     char.results.forEach(el => {
//         nameDiv.innerHTML += `
//         <div class="char-div">
//             <img src=${el.image}>
//             <p class="char-name" id="${el.id}">${el.name}</p>
//         </div>`
//     });
//     let single = document.querySelectorAll(".char-div");
//     let singleArr = Array.from(single);
//     singleArr.forEach( el => el.addEventListener("click", handler));

//     return state;
// })
// .then(state => {
//     const pageButtons = (pages) => {
//         let wrapper = document.getElementById('pagination')
//         wrapper.innerHTML = ``
        
//     }
//     pageButtons(state.allPages);

    
// })

const handler = e => {
    document.querySelector(".pagination-container").innerHTML = "";
    document.querySelector(".row").className = "single-div"
    document.querySelector(".names").className = "single-name"
    nameDiv.innerHTML = "";
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





