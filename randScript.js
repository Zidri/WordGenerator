var $list = '';

const filename = "popwords.txt";



 
// Display text
// console.log(text);

function randGen() {

    var $max = length(text);

    if ($max != null) {

        //random number with max
        var $rand = Math.floor(Math.random() * (parseInt($max) + 1));

        document.getElementById("randWord").innerHTML = $rand;

        document.getElementById("randList").innerHTML = $list += ($rand + ' ');
    }


}