class Day {
    constructor(dayInfo){
        this.weekDay = dayInfo.weekDay || 0;
        this.date = dayInfo.date || 0;
        this.startWorkTime = dayInfo.startWorkTime || 0;
        this.finishWorkTme = dayInfo.finishWorkTme || 0;
        this.weekEnd = dayInfo.weekEnd || false;
    }
    getWorkedTime()
    {
        // to do
        return getWorkedTime;
    }
}