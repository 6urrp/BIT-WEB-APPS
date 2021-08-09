//funny words

let funnyWords = require('funny-words');

const funny = () => {
    let getFunnyWords = funnyWords("I need to live a thousand times");
    return getFunnyWords;
}
const getFunny = funny();
console.log(getFunny);

const funny2 = () => {
    let getFunnyWords = funnyWords("Sorry, you can see it in my retina");
    return getFunnyWords;
}
const getFunny2 = funny2();
console.log(getFunny2);

//one line joke

let oneLinerJoke = require('one-liner-joke');

const oneLiner = () => {
    let getRandomJoke = oneLinerJoke.getRandomJoke();
    return getRandomJoke.body;
}
const randomJoke = oneLiner();
console.log(randomJoke);

const oneLiner2 = () => {
    let getRandomJoke = oneLinerJoke.getRandomJoke();
    return getRandomJoke.body;
}
const randomJoke2 = oneLiner2();
console.log(randomJoke2);


//random words 

let randomWords = require('random-words');

const favoriteWords = () => {
    let getRandomWords =  randomWords(3);
    return `My favorite words in english are ${getRandomWords.join(", ")}`
}
const favorite = favoriteWords();
console.log(favorite)

//figlet 

let figlet = require('figlet');

const figlet1 = data => {
    return new Promise((fullfil, reject) => {
        figlet.text(data, {
            font: 'Sub-Zero',
            horizontalLayout: 'default',
            verticalLayout: 'default',
            width: 200,
            whitespaceBreak: true
        }, function(err, data) {
            if (err) {
                reject(err);
            } else {
                fullfil(data);
            }
        })
    })
}

figlet1("Hello World").then(function(result) {
    console.log(result);
})


let figlet = require('figlet');

const figlet2 = data => {
    return new Promise((fullfil, reject) => {
        figlet(data, function(err, data) {
            if (err) {
                reject(err);
            } else {
                fullfil(data);
            }
        });
    });
}

figlet2("Mr.Hollywood").then(function(result) {
    console.log(result);
})


figlet.text('Hello World', {
    font: 'Slant',
    horizontalLayout: 'default',
    verticalLayout: 'default',
    width: 200,
    whitespaceBreak: true
}, function(err, data) {
    if (err) {
        console.log('Something went wrong...');
        console.dir(err);
        return;
    }
    console.log(data);
});

//cowsay

let cowsay = require("cowsay");

const speakingCow = () => {
    let muu = cowsay.say({
        text : "Don't got that much in the bank, we go out she order the steak",
        e : "oO",
        T : "U "
    });
    return `I have a cow that always says what I don't want to hear!!

    ${muu};
    


    Told ya, she is unberable!!`
}
const myCow = speakingCow();
console.log(myCow);
