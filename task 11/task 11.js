var A = ["cake", "apple pie", "cookie", "chips", "patties"];
var search = prompt("Welcome to ABC Bakery. What do you want to order sir/ ma'am?");
for (var i = 0; i < A.length; i++){   
if (search === A[i]) {
    document.write(A[i] + " is available at index " + i +" in our bakery");
}
else {
     document.write("a");
 }
}
