class WeatherService{
    static API_URL = "https://api.open-meteo.com/v1/forecast?latitude=-29.8247&longitude=-51.1483&hourly=temperature_2m,precipitation,is_day&daily=weathercode,temperature_2m_max,temperature_2m_min,sunrise,sunset,precipitation_sum&timezone=America%2FSao_Paulo&forecast_days=3";

    static WEATHER_CODES = {
        "Sol": [0, 1],
        "Nublado": [2, 3],
        "Neblina": [45, 48],
        "Chuva": [51, 53, 55, 61, 63, 65, 80, 81, 82],
        "Chuva de gelo": [56, 57, 66, 67],
        "Neve": [71, 73, 75, 77, 85, 86], 
        "Tempestade": ["95*", 96, "99*"]
    }

    static async getWeatherForNextDays(setWeatherDays) {
        // try{
        //     var response = await axios.get(WeatherService.API_URL);
        //     WeatherService.buildResponseData(setWeatherDays, response);
        // }catch(error){
        //     console.log(error);
            WeatherService.buildFakeResponseData(setWeatherDays);
        // }
    }

    static buildFakeResponseData (setWeatherDays){   
        setWeatherDays([
            {
                maxTemp: '18',
                minTemp: '4',
                date: '2023-08-14',
                weather: "Nublado"
            },
            {
                maxTemp: '22',
                minTemp: '10',
                date: '2023-08-15',
                weather: "Tempestade"
            },
            {
                maxTemp: '26',
                minTemp: '15',
                date: '2023-08-16',
                weather: "Sol"
            }
        ]);
    }

    static buildResponseData (setWeatherDays, response){
        var maxTemps = response.data.daily.temperature_2m_max;
        var minTemps = response.data.daily.temperature_2m_min;
        var dates = response.data.daily.time;
        var weathers = response.data.daily.weathercode.map((dayWeatherCode) => {
            for(var weather of Object.keys(WeatherService.WEATHER_CODES)){
                if(WeatherService.WEATHER_CODES[weather].includes(dayWeatherCode)){
                    return weather;
                }
            }
            return "";
        })
        var responseData = []
        for(var i=0; i<3; i++) {
            var dayWeatherData = {};
            dayWeatherData.maxTemp = maxTemps[i];
            dayWeatherData.minTemp = minTemps[i];
            dayWeatherData.date = dates[i];
            dayWeatherData.weather = weathers[i];

            responseData.push(dayWeatherData);
        } 

        setWeatherDays(responseData);
    }
}

export default WeatherService;