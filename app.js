
"use strict";
// alert("Welcome "  +  name);
// prompt("Are you 18 or Older?");

function display_c(){
    var refresh=1000; // Refresh rate in milli seconds
    var mytime;
    mytime=setTimeout('display_ct()',refresh)
    }
    
    function display_ct() {
        var x = new Date()
        var x1=x.toLocaleString();// changing the display to UTC string
        document.getElementById('ct').innerHTML = x1;
        var tt;
        tt=display_c();
         }

         function myFunction() {
            var txt;
            var person = prompt("Please enter your name:", "Harry Potter");
            if (person == null || person == "") {
                txt = "User cancelled the prompt.";
            } else {
                txt = "Hello " + person + "! How are you today?";
            }
            document.getElementById("demo").innerHTML = txt;
        }
    


