

var $list = '';



// $.getJSON('unigram_freq.json', function (data) {


//     var $output = [];
//     for (var i in data.wordArray) {

//         $output += data.wordArray[i].word;

//     }

//     // document.getElementById("word").innerHTML = $output;
// });

// Display text
// console.log(text);

var file = "file://unigram_freq.json";

function readTextFile(file)
{
    var rawFile = new XMLHttpRequest();
    rawFile.open("GET", file, false);
    rawFile.onreadystatechange = function ()
    {
        if(rawFile.readyState === 4)
        {
            if(rawFile.status === 200 || rawFile.status == 0)
            {
                var allText = rawFile.responseText;
                alert(allText);
            }
        }
    }
    rawFile.send(null);
}


function randGen() {

    var $max = length(text);

    if ($max != null) {

        //random number with max
        var $rand = Math.floor(Math.random() * (parseInt($max) + 1));

        document.getElementById("randWord").innerHTML = $rand;

        document.getElementById("randList").innerHTML = $list += ($rand + ' ');
    }


}