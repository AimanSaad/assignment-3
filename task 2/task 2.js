var names = [];
var scores = [];
var prcnt = [];
for (var i = 0; i < 3; i++ ) {
    names[i] = prompt("enter your name");
    scores[i] = prompt("enter you score");
    prcnt[i] = (scores[i] * .2);
} 
for (var j = 0; j < 3; j++ ) {
document.write("<br>Score of " + names[j] + " is " + scores[j] + ". Percentage " + prcnt[j] + "%") ;
}