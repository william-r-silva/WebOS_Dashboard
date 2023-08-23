import { useState } from "react";
import style from "./Weather.module.css";

import WeatherDay from "./WeatherDay";

import WeatherService from "../../services/WeatherService";

function Weather (props){
    const [weatherDays, setWeatherDays] = useState([]);

    WeatherService.getWeatherForNextDays(setWeatherDays);

    return (
        <div className={`${style.weatherBorders} ${props.className ? props.className:""}`}>
            {   weatherDays.length > 0 &&
                weatherDays.map(weatherDay => 
                    <WeatherDay key={weatherDay.date} weatherDayData={weatherDay}/>
                )
            }
        </div>
    );
}

export default Weather;