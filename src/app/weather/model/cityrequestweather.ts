export class CityRequestWeather {
    cityName: string;
    countryName: string;
    constructor(cityName: string, countryName: string) {
      this.cityName = cityName;
      this.countryName = countryName;
    }
  }