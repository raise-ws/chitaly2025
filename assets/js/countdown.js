// Code By Webdevtrick ( https://webdevtrick.com )
function timeLeft(endtime){
    var t = Date.parse(endtime) - Date.parse(new Date());
    var seconds = Math.floor( (t/1000) % 60 );
    var minutes = Math.floor( (t/1000/60) % 60 );
    var hours = Math.floor( (t/(1000*60*60)) % 24 );
    var days = Math.floor( t/(1000*60*60*24) );
    return {
      'total': t,
      'days': days,
      'hours': hours,
      'minutes': minutes,
      'seconds': seconds
    };
  };
   
  $(document).ready(function() {
    var today = new Date();
    var deadline = 'May 23 ' + (today.getFullYear()) + " 00:00:00";
    if (today.getMonth() == 0 && today.getDate() == 1) {
      deadline = 'May 23 ' + (today.getFullYear()) + " 00:00:00";
    };
    
    
    var setClock = function(newyear){
      var timeinterval = setInterval(function(){
        var t = timeLeft(newyear);
        $('#days').text(+t.days);
        if(t.total<=0){
          clearInterval(timeinterval);
          var now = new Date();
          var yearStr = now.getFullYear().toString();
          $('#days').text(yearStr[0]);
          $('#days-text').text("Happy");
          $('#hours').text(yearStr[1]);
          $('#hours-text').text("New");
          $('#mins').text(yearStr[2]);
          $('#mins-text').text("Year");
          $('#secs').text(yearStr[3]);
          $('#secs-text').text("!!!");
        }
      },1000);
    };
    
    setClock(deadline);
    
  });