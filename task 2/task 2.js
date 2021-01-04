var names = [];
var scores = [];
for (var i = 0; i < 3; i++ ) {
    names[i] = prompt("enter your name");
    scores[i] = prompt("enter you score");
} 
for (var j = 0; j < 3; j++ ) {
document.write("<br>Score of " + names[j] + "is " + scores[j]);
}