let nameDiv = document.querySelector(".names");
let about = document.querySelector(".about")
const url = "https://rickandmortyapi.com/api/character/";
let state = { 
    page: 1,
    allPages: 0,
    window: 5
}


fetch(url)
.then(resp => {
    return resp.json();
})
.then(char => {
    state.allPages = char.info.pages;
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

    return state;
})
.then(state => {
    console.log(state);
    const pageButtons = (pages) => {
        let wrapper = document.getElementById('pagination')
        wrapper.innerHTML = ``
        console.log(wrapper);

        let maxLeft = (state.page - Math.floor(state.window / 2));
        let maxRight = (state.page + Math.floor(state.window / 2));

        if (maxLeft < 1) {
            maxLeft = 1;
            maxRight = state.window;
        }

        if (maxRight > pages) {
            maxLeft = pages - (state.window - 1);
            
            if (maxLeft < 1){
                maxLeft = 1;
            }
            maxRight = pages;
        }

        for (var page = maxLeft; page <= maxRight; page++) {
            wrapper.innerHTML += `<button value=${page} class="page btn btn-sm btn-info">${page}</button>`
        }
    
        if (state.page != 1) {
            wrapper.innerHTML = `<button value=${1} class="page btn btn-sm btn-info">&#171; First</button>` + wrapper.innerHTML
        }
    
        if (state.page != pages) {
            wrapper.innerHTML += `<button value=${pages} class="page btn btn-sm btn-info">Last &#187;</button>`
        }

        $('.page').on('click', function() {
            $('.names').empty()

            state.page = Number($(this).val())
    
        })
    }
    pageButtons(state.allPages);

    
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





