const currentDateInfo = function(){
    let timeElement = $("#curTime");
    let dateElement = $("#curDate");
    let timeInterval = null;
    let getDateAndTime = function()
    {
        let date = new Date();
        return {
            hours : date.getHours()<10?("0"+ date.getHours()):date.getHours(),
            minuts : date.getMinutes()<10?("0"+ date.getMinutes()):date.getMinutes(),
            data : date.getDate()<10?("0"+ date.getDate()):date.getDate(),
            month : date.getMonth()<10?("0"+ (date.getMonth()+1)):(date.getMonth()+1),
            year : date.getFullYear(),
        }
    }
    let setTime = function()
    {
        let date = getDateAndTime();
        timeElement.html(`${date.hours}:${date.minuts}`)
    }
    let setDate = function()
    {
        let date = getDateAndTime();
        dateElement.html(`${date.data}.${date.month}.${date.year}`);
    }
    let startTimer = function()
    {
        timeInterval = setInterval(setTime, 10*1000)
    }
    let stopTimer = function()
    {
        clearInterval(timeInterval);
    }
    let startWork = function()
    {
        setTime();
        setDate();
        startTimer();
    };
    return {
        startWork:startWork,
        getDateAndTime:getDateAndTime,
    }
}();