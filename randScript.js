
<script src="http://ajax.googleapis.com/ajax/libs/jquery/2.1.0/jquery.min.js"></script>

var $list = '';



$.getJSON('unigram_freq.json', function(data) {
        
            
    var $output = "";
    for (var i in data.wordArray) {
      
        $output += 
                data.wordArray[i].word + ' '
               ;

    }

    print_r($output)
    // document.getElementById("word").innerHTML = $output;
 });
 
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