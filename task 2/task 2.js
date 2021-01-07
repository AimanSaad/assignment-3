var names = [];
var scores = [];
var percnt = [];
for (var i = 0; i < 3; i++ ) {
    names[i] = prompt("enter your name");
    scores[i] = prompt("enter you score");
    percnt[i] = scores[i] * .2;
} 
for (var j = 0; j < 3; j++ ) {
document.write("<br> <h2>Score of " + names[j] + " is " + scores[j] + ". Percentage is: " + percnt[j] + "%");
}