

var $list = '';

////////

var filename = "popwords.txt";

// import {readFileSync, promises as fsPromises} from 'fs';
const {readFileSync, promises: fsPromises} = require('fs');

// read file SYNCHRONOUSLY
function syncReadFile(filename) {
  const contents = readFileSync(filename, 'utf-8');

  const arr = contents.split(/\r?\n/);

  console.log(arr); 

  return arr;
}

syncReadFile('./example.txt');

///////

var wordsArray = ["cat","dog","mouse"];

function randGen() {

    var $max = wordsArray.length - 1;

    if ($max != null) {

        //random number with max
        var $rand = Math.floor(Math.random() * (parseInt($max) + 1));

        document.getElementById("randWord").innerHTML = wordsArray[$rand];

        document.getElementById("randList").innerHTML = $list += (wordsArray[$rand] + ' ');
    }


}