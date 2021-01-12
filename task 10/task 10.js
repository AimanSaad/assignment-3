var A = [24, 53, 78, 4, 91, 12];
for (var j = 0; j < A.length; j++) {
    for (var i = 0; i < A.length; i++){
       if (A[i] < A[j]) {
        A = A.unshift(A[i]); 
        document.write(A);
       }
    }
}