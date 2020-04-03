const inputBlock = function(){
    let startInputHTMLEl = $("#startDayInput");
    let finsihInputHTMLEl = $("#finishDayInput");
    let curStartBtn = $("#setCurStartTime");
    let curFinishBtn = $("#setCurFinisTime");
    let restOfTimeValueHTMLEl = $("#restTime");
    let saveDayTimeBtn =$("#saveDayTimeBtn");
    let dayInfo = {
        weekDay:"",
        date:"",
        startWorkTime:"",
        finishWorkTme:"",
        weekEnd: false,
    }

    startInputHTMLEl.on("change", function(){
        renderTimeDifference();
    })

    startInputHTMLEl.on("wheel",function(event){
        let val = (event.originalEvent.deltaY / 100)* -1;
        let newTime = changeTimeByMinute(this, val);
        renderTime(this,newTime);
        renderTimeDifference();
    })

    finsihInputHTMLEl.on("wheel",function(event){
        let val = (event.originalEvent.deltaY / 100)* -1;
        let newTime = changeTimeByMinute(this, val);
        renderTime(this,newTime);
        renderTimeDifference();
    })

    finsihInputHTMLEl.on("change", function(){
        renderTimeDifference();
    })

    curStartBtn.on("click", function()
    {
        startInputHTMLEl.val(getCurrentTIme());
        renderTimeDifference();
    });

    curFinishBtn.on("click", function()
    {
        finsihInputHTMLEl.val(getCurrentTIme());
        renderTimeDifference();
    });
    
    saveDayTimeBtn.on("click", function(){
        console.log(packUsersData());
        clearFields();
    })

    function renderTimeDifference()
    {
        let startTime = startInputHTMLEl.val();
        let finishTime = finsihInputHTMLEl.val();
        let differenceString = getTimeDifference(startTime,finishTime);
        console.log("differenceString", differenceString)
        restOfTimeValueHTMLEl.html(`${differenceString} ч.`);
    }

    function getCurrentTIme()
    {
        let curDate = new Date();
        let hours = curDate.getHours();
        let minutes = curDate.getMinutes();
        return `${correctTimeValue(hours)}:${correctTimeValue(minutes)}`; 
    }

    function getTimeDifference(time1,time2)
    {
        console.log(time1,time2);
        if(time1 == "" || time2 == "")return "00:00";
        let firstTime = time1.split(":");
        let secondTime = time2.split(":");
        firstTime = parseInt(firstTime[0])*60 + parseInt(firstTime[1]);
        secondTime = parseInt(secondTime[0])*60 + parseInt(secondTime[1]);
        let difference = secondTime - firstTime;
        let hours = 8 - (Math.floor(difference / 60));
        let minutes = 60 - (difference % 60);
        if(minutes > 0 && minutes < 60) hours -= 1;
        if(minutes == 60) minutes = 0
        if(hours < 0)
        {
            hours = 0;
            minutes = 0;
        }
        return `${correctTimeValue(hours)}:${correctTimeValue(minutes)}`;
    }

    function correctTimeValue(number)
    {
        console.assert((typeof(number) == "number"),"error type in function correctTimeValue");
        let value = parseInt(number);
        return (value > 9)? value : "0" + value;
    }

    function changeTimeByMinute (element, value)
    {
        let time = $(element).val().split(":");
        let hours = parseInt(time[0]);
        let minutes = parseInt(time[1]);
        minutes += value;
        if(minutes < 0){
            hours -=1;
            minutes = 59;
        }
        else if( minutes > 59){
            hours +=1;
            minutes = 0;
        }
        return `${correctTimeValue(hours)}:${correctTimeValue(minutes)}`;
    }

    function renderTime(element, time)
    {
        $(element).val(time);
    }

    function packUsersData()
    {
        dayInfo.date = new Date();
        dayInfo.finishWorkTme = finsihInputHTMLEl.val();
        dayInfo.startWorkTime = startInputHTMLEl.val();
        return new Day(dayInfo);
    }

    function clearFields()
    {
        finsihInputHTMLEl.val("");
        startInputHTMLEl.val("");
    }

    return {

    }
}();