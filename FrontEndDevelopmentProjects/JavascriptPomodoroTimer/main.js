$(document).ready(function(){
    var breakValue = $("#break > span").text();
    var  sessionValue = $("#session > span").text();

    //For break timer usage
    var breakH = 0;
    var breakMin = 0;
    var breakSec = 0;
    var breakTime = 0;

    //For session timer usage
    var sessionH = 0;
    var sessionMin = 0;
    var sessionSec = 0;
    var sessionTime = 0;

    var globalId = 0; //for setInterval, clearInterval
    var isBreak = false; //is ready to lauch break timer?

    function formatTime(input)
    {
        return (input > 9 ? input.toString() : '0' + input.toString());
    }

    //Convert from second to Hours Minutes Seconds
    function secondToHourMinSec(inputTime)
    {
        var inputH = Math.floor(inputTime/(60*60*1000));
        inputTime = inputTime % (60*60*1000);

        var inputMin = Math.floor(inputTime/(60*1000));
        inputTime = inputTime % (60*1000);

        var inputSec = Math.floor(inputTime/(1000));

        return [inputH, inputMin, inputSec];
    }

    //count down for session timer
    function countDownSession(countDownHandler)
    {
        globalId = countDownHandler;
        sessionTime = sessionTime - (1*1000);
        if(sessionTime < 1000)
        {
            clearInterval(countDownHandler);
            isBreak = true;
            var breakId = setInterval(function(){
                countDownBreak(breakId);
            }, 1000);
        }
        var sessionArr = secondToHourMinSec(sessionTime);
        sessionH = sessionArr[0];
        sessionMin = sessionArr[1];
        sessionSec = sessionArr[2];
        $("span.min").text(formatTime(sessionMin));
        $("span.sec").text(formatTime(sessionSec));
    }

    //count down for break timer
    function countDownBreak(countDownHandler)
    {
        globalId = countDownHandler;
        breakTime = breakTime - (1*1000);
        if(breakTime < 1000)
        {
            isBreak = false;
            clearInterval(countDownHandler);
            resetSessionTimer();
            startTimer();
        }
        var breakArr = secondToHourMinSec(breakTime);
        breakH = breakArr[0];
        breakMin = breakArr[1];
        breakSec = breakArr[2];
        $("span.min").text(formatTime(breakMin));
        $("span.sec").text(formatTime(breakSec));
    }

    function resetBreakTimer()
    {
        breakTime = (0*60*60*1000) + (breakValue*60*1000) + (0*1000); 
    }

    function resetSessionTimer()
    {
        resetBreakTimer();
        sessionTime = (0*60*60*1000) + (sessionValue*60*1000) + (0*1000); 
        var sessionArr = secondToHourMinSec(sessionTime);
        sessionH = sessionArr[0];
        sessionMin = sessionArr[1];
        sessionSec = sessionArr[2];
        $("span.min").text(formatTime(sessionMin));
        $("span.sec").text(formatTime(sessionSec));
    }

    function startTimer()
    {
        if(!isBreak)
        {
            var sessionId = setInterval(function(){
                countDownSession(sessionId); 
            }, 1000);                
        }
        else
        {
            var breakId = setInterval(function(){
                countDownBreak(breakId);
            }, 1000);
        }

    }

    function stopTimer()
    {
        clearInterval(globalId);
    }

    $('#start').on('click',startTimer);
    $('#stop').on('click',stopTimer);

    $("#break button.plus").click(function(){
        console.log(breakValue);
        breakValue++;
        console.log(breakValue);
        $("#break > span").text(breakValue);
        resetBreakTimer();
    });

    $("#break button.minus").click(function(){
        console.log(breakValue);
        if(breakValue - 1 !== 0)
        {
            breakValue--;
            console.log(breakValue);
            $("#break > span").text(breakValue);
            resetBreakTimer();
        }
    });

    $("#session button.plus").click(function(){
        sessionValue++;
        $("#session > span").text(sessionValue);
        resetSessionTimer();
    });

    $("#session button.minus").click(function(){
        console.log(sessionValue);
        if(sessionValue - 1 !== 0)
        {
            sessionValue--;
            console.log(sessionValue);
            $("#session > span").text(sessionValue);
            resetSessionTimer();

        }
    });
    
    resetSessionTimer();
});