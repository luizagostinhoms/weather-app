import { ResponseWeather } from 'src/app/services/model/responseweather';
import { CityWeather } from './cityweather';

export class MapperResultWeather {

    mapperResultWahter(responseWeather: ResponseWeather) : CityWeather {
      
      let cityWeather: CityWeather = new CityWeather();
      cityWeather.cityName = responseWeather.name;
      cityWeather.countryName = responseWeather.sys.country;
      cityWeather.temperature = responseWeather.main.temp;
      cityWeather.humidity = responseWeather.main.humidity;
      cityWeather.pressure = responseWeather.main.pressure;
      cityWeather.dateUpdate = new Date();

      return cityWeather;
    }

  }
  
  