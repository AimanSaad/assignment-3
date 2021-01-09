var a = ["ball", "cat", "try", "sky", "ball", "cv", "duck","cat", "milk", "video", "video"];
for (var j = 0; j < 11; j++)  {
    for (var i= 0; i < 11; i++ ) {
        if (a[j] === a[i]  && (i !== j)) { 
        document.write(a.splice(i, 1));
    }
  }  
}