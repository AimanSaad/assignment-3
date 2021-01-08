var cN = ["green", "pink", "red", "purple", "blue", "brown", "white"]
var cN1 = parseInt(prompt("at which index you want to delete color?"));
var cN2 = parseInt(prompt("how many colors do you want to delete"));
cN.splice(cN1, cN2);
for (var i = 0; i < 7 - cN2; i++) {
document.write("<br>" + cN[i]);
}