var A = ["cake", "apple pie", "cookie", "chips", "patties"];
var search = prompt("Welcome to ABC Bakery. What do you want to order sir/ ma'am?");
var found;
for (var i = 0; i < A.length; i++){   
if (search === A[i]) {
    found = true;
    document.write(A[i] + " is available at index " + i +" in our bakery");
     break;
 }
}
found = false;
document.write("Sorry! " + search + "  is NOT available at our bakery");