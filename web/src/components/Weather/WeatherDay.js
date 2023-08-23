import style from "./Weather.module.css";

import Common from "../../Common";

import sunny from "../../images/sunny.png";
import rainy from "../../images/rainy.png";
import cloudy from "../../images/cloudy.png";

function WeatherDay({weatherDayData}){
    var weekDayName = Common.getWeekDayName(new Date(weatherDayData.date).getDay());    

    var minMaxTemp = `min ${Math.round(weatherDayData.minTemp)}°C max ${Math.round(weatherDayData.maxTemp)}°C`;

    var weatherName = weatherDayData.weather;

    var weatherImg = "";
    switch(weatherDayData.weather){
        case "Sol":
            weatherImg = sunny;
            break;
        case "Chuva":
        case "Neve":
        case "Tempestade":
        case "Chuva de gelo":
            weatherImg = rainy;
            break;
        case "Nublado":
        case "Neblina":
            weatherImg = cloudy;
            break;
        default:
            weatherImg = sunny;
            break;
    }
    
    return(
        <div className={style.weatherDay}>
            <h3>{weekDayName}</h3>
            <h2>{minMaxTemp}</h2>
            <img className={style.weatherImage} src={weatherImg} alt={weatherName}/>
            <p>{weatherName}</p>
        </div>
    );
}

export default WeatherDay;