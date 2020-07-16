var base = 00;
var playPause = 00;

function playFunc(){
     playPause = playPause +1;

     if(playPause === 1){
         play();
           document.getElementById("play").classList.add("pause");
           document.getElementById("animateCircle").className = "addAnimation";
           


     } else if (playPause === 2){
         document.getElementById("play").classList.remove("pause");
         playPause = 00;
         stop();
     }
}

function play(){
    base = setInterval(timer, 10); // millisecond

}

function stop(){
    clearInterval(base);

}

// DEFAULT VALUE
var millisecond = 00;
var second = 00;
var minute = 00;
var hour = 00;

// RETURN VALUE
var millisecondVal = 00;
var secondVal = 00;
var minuteVal = 00;
var hourVal = 00;
  

function timer(){
       millisecondVal = updateTime(millisecond);
       secondVal = updateTime(second);
       minuteVal = updateTime(minute);
       hourVal = updateTime(hour);

       millisecond = ++millisecond;

       if(millisecond === 100){ //Millisecond
        millisecond = 00;
        second = ++second;

       }
       if(second == 60){
           minute = ++minute;
           second = 00;

       }
       if(minute == 60){
           minute = 00;
           hour = ++hour;
       }
       //  i am using javascript
       document.getElementById("millisecond").innerHTML = millisecondVal;
       document.getElementById("second").innerHTML = secondVal;
       document.getElementById("minute").innerHTML = minuteVal;
       document.getElementById("hour").innerHTML = hourVal;
}

// Update time every second millisecond
function updateTime(i){
    if(i < 10){
        i = "0" + i;
    }
    return i;

}
function resetFunc(){
    
    millisecond = 00;
    second = 00;
    minute = 00;
    hour = 00;

    document.getElementById("millisecond").innerHTML = 00;
    document.getElementById("second").innerHTML = 00;
    document.getElementById("minute").innerHTML = 00;
    document.getElementById("hour").innerHTML = 00;


}
function stopFunc() {
    //clearInterval(base);
    //resetFunc();
    playPause = playPause +1;

     if(playPause === 1){
         stop();
           document.getElementById("stop").classList.add("pause");
           document.getElementById("animateCircle").className = "addAnimation";
           


     } else if (playPause === 2){
         document.getElementById("stop").classList.remove("pause");
         playPause = 00;
         stop();}
}