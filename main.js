
var countDownDate = new Date("July 4, 2023 1:0:0").getTime();


var x = setInterval(function() {


  var now = new Date().getTime();
    

  var distance = countDownDate - now;
    

  var days = Math.floor(distance / (1000 * 60 * 60 * 24));
  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);

  document.getElementById("july 4").innerHTML = days + "d " + hours + "h "
  + minutes + "m " + seconds + "s ";
    

  if (distance < 0) {
    clearInterval(x);
    document.getElementById("july 4").innerHTML = "EXPIRED";
  }
}, 1000);
