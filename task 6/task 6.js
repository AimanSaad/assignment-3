var aCities = ["Karachi", "Lahore", "Islamabad", "Faisalabad"];
var o  = ["th", "st", "nd", "rd"];
for (var i = 1; i < 4; i++) {
document.write("<br>" + i + o[i]+ " choice is " + aCities[i-1]);
}