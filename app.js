console.log("hello world");
// alert("Welcome "  +  name);
// prompt("Are you 18 or Older?");

function display_c() {
  var refresh = 1000; // Refresh rate in milli seconds
  var mytime;
  mytime = setTimeout("display_ct()", refresh);
}

function display_ct() {
  var x = new Date();
  var x1 = x.toLocaleString(); // changing the display to UTC string
  document.getElementById("ct").innerHTML = x1;
  var tt;
  tt = display_c();
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

const arrayCarousel = [
  "'April  demonstrates great communication & team-player skills'",
  "'She’s actively interviewing- available to interview with 24 hours'",
  "'Her peers nick-named her “Miss Troubleshoot'",
  "'Due to her strong, dynamic ability to troubleshoot code & find creative solutions to fix problems on the fly;'",
  "'She is extremely empathetic and compassionate'",
  "'April's experience and knowledge shines through.'",
];
counter = 0;

function setText() {
  document.getElementById("ss-review").innerHTML = arrayCarousel[counter];

  counter = (counter + 1) % arrayCarousel.length;
}
setInterval(setText, 4000);
