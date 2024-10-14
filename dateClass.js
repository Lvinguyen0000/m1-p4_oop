let MyDate = function(day, month, year){
    this.day = day;
    this.month = month;
    this.year = year;

    this.getDay = function(){
        return this.day;
    }
    this.getMonth = function(){
        return this.month;
    }
    this.getYear = function(){
        return this.year;
    }
    this.Date = function(){
        return [this.getDay(), this.getMonth, this.getYear];
    }

    this.setDay = function(day){
        this.day = day;
    }
    this.setMonth = function(month){
        this.month = month;
    }
    this.setYear = function(year){
        this.year = year;
    }
    this.setDate = function(day, month, year){
        this.setDay(day);
        this.setMonth(month);
        this.setYear(year);
    }

    this.toString = function(){
        let str = "";
        if(this.day.length == 1) str+="0";
        str+=this.day + "/";
        if(this.month.length == 1) str+="0";
        str+=this.month + "/" + this.year;
        return str;
    }
}