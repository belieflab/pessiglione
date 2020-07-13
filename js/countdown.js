function timer(){ // initialize timer
    var sec = 5; // set timer in seconds
    var timer = setInterval(function(){
    document.getElementById('countdown').innerHTML=sec;
    sec--;
    if (sec > 1) {
      jsPsych.endCurrentTimeline();
      }
    }, 1000);
  }