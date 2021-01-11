var a = ["ball", "cat", "sky", "ball", "cv", "try", "duck","cat", "milk", "video", "video"];
var b = [];
var c = [];
for (var j = 0; j < 11; j++)  {
    for (var i= 0; i < 11; i++ ) {
        if ((a[j] === a[i]) && (i !== j))  { 
          document.write("<br>" + a[i]);  
       b = a[i];
       }
  }  
}