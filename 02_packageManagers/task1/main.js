//funny words

let funnyWords = require('funny-words');

console.log(funnyWords("I need to live a thousand times"));
console.log(funnyWords("Sorry, you can see it in my retina"));

//one line joke

let oneLinerJoke = require('one-liner-joke');
let getRandomJoke = oneLinerJoke.getRandomJoke();
let getRandomJoke2 = oneLinerJoke.getRandomJoke();
console.log(getRandomJoke.body);
console.log(getRandomJoke2.body);

//random words 

let randomWords = require('random-words');
console.log(randomWords(3).join(" is random word, "));
console.log(randomWords(3))

//figlet 

let figlet = require('figlet');
figlet("Mr. Hollywood", function(error, data) {
    if (error) {
        console.log("Oops, something went wrong!")
        console.dir(err);
        return;
    }
    console.log(data);
});

//cowsay

let cowsay = require("cowsay");
console.log(cowsay.say({
    text : "Don't got that much in the bank, we go out she order the steak",
    e : "oO",
    T : "U "
}));
