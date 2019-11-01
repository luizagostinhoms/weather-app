import { Component } from '@angular/core';
import { CityRequestWeather } from './weather/model/cityrequestweather';
import { DeviceDetectorService } from 'ngx-device-detector';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent  {
  
  title = 'weather-app';
  cities: Array<CityRequestWeather>;
  isMobile: boolean;

  constructor(private deviceService: DeviceDetectorService) {
    this.cities = new Array<CityRequestWeather>();
    this.cities.push(new CityRequestWeather("Nuuk", "GL"));
    this.cities.push(new CityRequestWeather("Urubici", "BR"));
    this.cities.push(new CityRequestWeather("Nairobi", "KE"));

    this.isMobile = this.deviceService.isMobile();
  }
}
