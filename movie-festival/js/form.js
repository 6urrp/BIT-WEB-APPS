import { MovieFestival, Movie, Program} from "./entities.js";

let title = document.getElementById("movie-title");
let length = document.getElementById("movie-length")
let genre = document.getElementById("movie-genre")
let movieButton = document.querySelector(".movie-form form .button")
let movieParagraph = document.querySelector(".create-movie")
let errorText = document.querySelector(".error-text")
let date = document.getElementById("program-date");
let programList = document.querySelector(".create-program")
let programButton = document.getElementById("program-button")
let programSelect = document.getElementById("program-select")
let errorDate = document.querySelector(".error-date")
let movieSelect = document.getElementById("movie-select")
let movieToProgram = document.getElementById("movie-program");
console.log(errorDate)

const festival = new MovieFestival();

const createMovie = () => {
    let movieValue = title.value;
    let lengthValue = length.value;
    let genreValue = genre.options[genre.selectedIndex].text;

    const movie = new Movie(movieValue, lengthValue, genreValue);

    if (movieValue === "" || lengthValue === "" || genre.selectedIndex === 0) {
        errorText.innerText = "All input fields are required!";
        return;
    }
    errorText.innerText = "";

    festival.addMovies(movie);
    let index = festival. listOfAllMovies.length - 1;

    let li = document.createElement("li")
    li.innerText = movie.getData();
    movieParagraph.appendChild(li);

    let option = document.createElement("option");
    option.innerText = movie.getData();
    option.setAttribute("value", index);
    movieSelect.appendChild(option);

    title.value = "";
    length.value = "";
    genre.selectedIndex = 0;
}

movieButton.addEventListener("click", createMovie);



const createProgram = () => {
    if(!date.value) {
        errorDate.innerText = "Date required!";
        return;
    }

    const inputDate = new Date(date.value);

    if (inputDate.getTime() <= Date.now()) {
        errorDate.innerText = "Invalid date input!";
        return;
    }

    let hasProgramWithSameDate = festival.listOfAllPrograms.some((program) => inputDate.getTime() === program.date.getTime());

    if (hasProgramWithSameDate) {
        errorDate.innerText = "Program with same date already exists";
        return;
    }

    errorDate.innerText = "";

    const program = new Program(inputDate);
    festival.addPrograms(program);
    let index = festival.listOfAllPrograms.length - 1;

    let li = document.createElement("li")
    li.innerText = program.getData();
    li.setAttribute("id", "item-" + index)
    programList.appendChild(li);

    let option = document.createElement("option")
    option.innerText = program.getDate();
    option.setAttribute("value", index);
    programSelect.appendChild(option);

    date.value = "";
}

programButton.addEventListener("click", createProgram);


const addMovieToProgram = () => {
    let movieInput = movieSelect.value;
    let programInput = programSelect.value;

    const movie = festival.listOfAllMovies[movieInput];
    const program = festival.listOfAllPrograms[programInput];

    program.addMovie(movie);

    let liNode = document.querySelector("#item-" + programInput);
    liNode.innerText = program.getData();

    movieSelect.value = "";
    programSelect.value = "";
}

movieToProgram.addEventListener("click", addMovieToProgram)
