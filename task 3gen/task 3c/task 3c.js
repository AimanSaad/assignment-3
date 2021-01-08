var cN = ["yellow", "green"];
for (j = 0; j < 2; j++)
cN.unshift(prompt("which color do you want to add in the begining?"));
for(var i = 0; i < 4;i++) {
    document.write("<br> " + cN[i]);
    }