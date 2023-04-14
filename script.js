//your JS code here. If required.
myFunction() {
     var x;
     if (confirm("Are you sure?") == true) {
         x = "You pressed OK!";
     } else {
         x = "You pressed Cancel!";
     }
     return x; 
}
myFunction();
