import { useState } from "react";
import style from "./Calendar.module.css";

import Common from "../../Common";

function Calendar(props){
    var today = new Date();
    var firstDayOfMonth = new Date(today.getFullYear(), today.getMonth()).getDay();
    var lastDayOfMonth = new Date(today.getFullYear(), today.getMonth()+1, 0).getDate();
    
    const currentYear = today.getFullYear();
    const currentMonth = today.getMonth();

    const [monthDates, setMonthDates] = useState(buildMonthDates());

    function buildMonthDates(){
        var daysOfMonth = []

        var count = 100;
        
        for(var day=0; day < firstDayOfMonth; day++){
            daysOfMonth.push({
                day: count
            })
            count++;
        }
        for(var day=1; day <= lastDayOfMonth; day++){
            daysOfMonth.push({
                day
            })
        }
        var finishCalendar = 7 - (daysOfMonth.length % 7);
        for(var day=0; day < finishCalendar; day++){
            daysOfMonth.push({
                day: count
            })
            count++;
        }

        return daysOfMonth;
    }
    
    return (
        <div className={`${style.calendarBorders} ${props.className ? props.className:""}`}>
            <div>
                <h2>
                    {Common.getMonthName(currentMonth)} -  {currentYear}
                </h2>
            </div>
            <div className={style.calendarWeek}>
                {
                    Common.WEEK_DAYS.map((weekDay) => {
                        return (<div key={weekDay} className={style.calendarDays}>{weekDay}</div>);
                    })
                }
                {
                    monthDates.map(({day}) => {
                        return (
                            <div key={day} className={`${style.calendarDays} ${today.getDate() === day? style.calendarCurrentDay : ''}`}>
                                {day<100 && (day)}
                            </div>
                        );
                    })
                }
            </div>
        </div>
    );
}

export default Calendar;