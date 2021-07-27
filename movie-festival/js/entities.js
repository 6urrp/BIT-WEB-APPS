export class MovieFestival { 
    constructor() {
        this.listOfAllMovies = [];
        this.listOfAllPrograms = [];
    }
    addMovies (movie) {
        this.listOfAllMovies.push(movie);
    }
    addPrograms (program) {
        this.listOfAllPrograms.push(program);
    }
}


export class Movie {
    constructor (name, length, genre) {
        this.name = name;
        this.length = parseInt(length);
        this.genre = genre;
    }
    getData () {
        let abbrevation = `${this.genre[0]}${this.genre[this.genre.length-1].toUpperCase()}`;
        return `${this.name}, ${this.length}min, ${abbrevation}`;
    }
}


export class Program {
    constructor(date) {
        this.date = new Date(date);
        this.listOfMovies = [];
    }
    addMovie (movie) {
        if (!movie || !(movie instanceof Movie)){
            console.log("invalid movie input!");
        };
        this.listOfMovies.push(movie);
    }
    totalMovies () {
        return this.listOfMovies.length;
    }
    lengthOfAllMovies () {
        let sum = 0;
        this.listOfMovies.forEach(movie => {
            sum += movie.length;
        });
        return sum; 
    }
    getDate () {
        let day = this.date.getDate();
        let month = this.date.getMonth() + 1;
        let year = this.date.getFullYear();
        const date = `${day}.${month}.${year}`;
        return date;
    }
    getData () {
        let result = this.getDate();
        if(this.totalMovies() === 0){
            return result += `, Program to be announced!`;
        }
        if (this.totalMovies() === 1) {
            return result += `, ${this.totalMovies()} movie, duration: ${this.lengthOfAllMovies()} min.`
        }
        return result += `, ${this.totalMovies()} movies, duration: ${this.lengthOfAllMovies()} min.`
    }
}
