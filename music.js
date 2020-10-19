
var divilength = document.querySelectorAll('.song').length;
console.log(divilength);


for(i=0; i<divilength; i++){
    var play = document.querySelectorAll('.song')[i].addEventListener('click',playsong);
    //var pause = document.querySelectorAll('.song')[i].addEventListener('dblclick',pausesong);
}

var song1 = new Audio();
song1.src='bhul.mp3'

var song2 = new Audio();
song2.src='javengi.mp3'

var song3 = new Audio();
song3.src='peg.mp3'

var song4 = new Audio();
song4.src='javengi.mp3'

var song5 = new Audio();
song5.src='bhul.mp3'

var song6 = new Audio();
song6.src='bhul.mp3'

var song7 = new Audio();
song7.src='bhul.mp3'

var song8 = new Audio();
song8.src='bhul.mp3'

var song9 = new Audio();
song9.src='bhul.mp3'

function playsong(){
    //song1.play();
    //alert('hello welcome here!!!!')
    var songId = this.innerHTML;
    console.log(songId);
    switch (songId) {
        case 'a':
            song1.play();
            break;
        case 'b':
            song2.play();
            break;
        case 'c':
            song3.play();
            break;
        case 'd':
            song5.play();
            break;
        case 'e':
            song6.play();
            break;
        case 'f':
            song7.play();
            break;
        case 'g':
            song3.play();
            break;
        case 'h':
            song2.play();
            break;
        case 'i':
            song1.play();
        default:
            alert('something went wrong!!')
            break;
    }
}
/*function pausesong(){
    var pauseId = this.innerHTML;
    console.log(pauseId);
    switch (pauseId) {
        case 'a':
            song1.play();
            break;
        case 'b':
            song2.play();
            break;
        case 'c':
            song3.play();
            break;
        case 'd':
            song5.play();
            break;
        case 'e':
            song6.play();
            break;
        case 'f':
            song7.play();
            break;
        case 'g':
            song3.play();
            break;
        case 'h':
            song2.play();
            break;
        case 'i':
            song1.play();
        default:
            alert('something went wrong!!')
            break;
}
*/
