var cN = ["green", "pink", "red", "purple", "blue", "brown", "white"]
var cN1 = parseInt(prompt("at which index you want to add a new color?"));
var cN2 = prompt("which color you want to add");
cN.splice(cN1, 0, cN2);
for (var i = 0; i < cN.length; i++) {
document.write("<br>" + cN[i]);
}