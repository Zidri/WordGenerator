

var $list = '';

function clearGen() {
    document.forms["genForm"]["wordInput"].value = "";
}

function randGen() {

    //get list
    var words = document.forms["genForm"]["wordInput"].value;

    //check if words entered
    if (words === "") {
        document.getElementById("randWord").innerHTML = "Word";
    }
    else {
        console.log(words);
        var wordsArray = words.split(' ');

        //get array max
        var $max = wordsArray.length;
        console.log($max);

        //random number with max
        var $rand = Math.floor(Math.random() * (parseInt($max)));
        console.log($rand);
        document.getElementById("randWord").innerHTML = wordsArray[$rand];

        document.getElementById("randList").innerHTML = $list += (wordsArray[$rand] + ' ');

    }



}