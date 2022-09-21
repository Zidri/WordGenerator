

var $list = '';


// const words = "awkwardness\nawoke\nawol\nawry\nax\naxe\naxel\naxis";

// const wordsArray = [];

var fs = require('fs');
var text = fs.readFileSync("./mytext.txt", 'utf-8');
console.log(text);
var textByLine = text.split('\n')



function randGen() {

    var $max = length(wordsArray);

    if ($max != null) {

        //random number with max
        var $rand = Math.floor(Math.random() * (parseInt($max) + 1));

        document.getElementById("randWord").innerHTML = $rand;

        document.getElementById("randList").innerHTML = $list += ($rand + ' ');
    }


}