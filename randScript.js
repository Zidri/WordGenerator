var $list = '';

const filename = "popwords.txt";

// Include fs module
const fs = import('fs');
// Calling the fs.readFileSync() method
const text = fs.readFileSync('./popwords.txt',
              {encoding:'utf8', flag:'r'});
 
// Display text
console.log(text);

function randGen() {

    var $max = length(text);

    if ($max != null) {

        //random number with max
        var $rand = Math.floor(Math.random() * (parseInt($max) + 1));

        document.getElementById("randWord").innerHTML = $rand;

        document.getElementById("randList").innerHTML = $list += ($rand + ' ');
    }


}