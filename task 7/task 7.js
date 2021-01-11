var a = [10, 20, 4, 40, 60, 70];
var b = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
var c = [];
for (var i = 0; i < b.length; a++) {
    for (var j = 0; j < b.length; j++) { 
        if (a[i] === b[j]) {
            c = a[i];
           document.write("<br>" + c);
        }

    }
}