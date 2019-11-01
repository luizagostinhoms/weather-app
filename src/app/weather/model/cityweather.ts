export class CityWeather {

    cityName: string;
    countryName: string;
    temperature: number;
    humidity: number;
    pressure: number;
    dateUpdate: Date;
  
    getCompositName(){
      return this.cityName + ", " + this.countryName;
    }

    isCold():boolean { 
      let cold: boolean = this.temperature < 5;
      return cold;
    }
    
    isFine():boolean {
      let cold: boolean = this.temperature >= 5 && this.temperature <= 25;
      return cold;

    }
    isHot():boolean {
      let cold: boolean = this.temperature > 25;
      return cold;
    }
  }
