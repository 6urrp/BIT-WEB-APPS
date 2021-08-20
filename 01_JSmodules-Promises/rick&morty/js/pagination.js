let state = { 
    page: 1,
    allPages: 34,
    window: 5
}

const calc = (state) => {
    let wrapper = document.getElementById('pagination');
    wrapper.innerHTML = ``;

    for (let page = state.page; page <= state.window; page++) {
        wrapper.innerHTML += `<button value=${page} class="page btn btn-sm btn-info">${page}</button>`;
    }

};

const pageButtons = (state) => {

        $('.page').on('click', function(event) {
            event.preventDefault();
            $('.names').empty();
            state.page = Number($(this).val());
            creatingPage(`${url}?page=${state.page}`);

            if (state.page === state.window && state.page < 34) {
                state.page -=2;
                
                if (state.window === 33) {
                    state.window +=1;
                    state.page -=1;
                } else {
                    state.window +=2;
                }
                calc(state);
                pageButtons(state)
            } else if (state.page + 4 === state.window) {
                state.window -=2;

                if (state.page < 3) {
                    state.page = 1;
                    state.window = 5;
                } 
                else {
                    state.page -=2;
                }
                calc(state);
                pageButtons(state)
            }
    
        })
}