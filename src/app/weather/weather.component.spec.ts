import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { WeatherComponent } from './weather.component';
import { CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA } from '@angular/core';
import { HttpClient, HttpHandler } from '@angular/common/http';
import { OpenWeatherMapService } from '../services/openweathermap.service';
import { ConfigService, ConfigLoader } from '@ngx-config/core';
import { CityRequestWeather } from './model/cityrequestweather';
import { CityWeather } from './model/cityweather';
import { ResponseWeather } from '../services/model/responseweather';
import { Sys } from '../services/model/sys';
import { Main } from '../services/model/main';

describe('WeatherComponent', () => {
  let component: WeatherComponent;
  let fixture: ComponentFixture<WeatherComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      schemas: [CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA],
      declarations: [ WeatherComponent ],
      providers: [HttpClient, HttpHandler,  OpenWeatherMapService, ConfigService, ConfigLoader]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WeatherComponent);
    component = fixture.componentInstance;
    component.cityRquest = new CityRequestWeather("São Paulo", "BR");
    let cityMock = new CityMock();
    component.city = cityMock.getMockCity();
    spyOn(component, 'intervalNextUdpate');
    spyOn(component, 'getInfoWeatherService');
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('newTryCallService ', () => {
    component.newTryCallService();
    expect(component.getInfoWeatherService).toHaveBeenCalled();
  });

  it('treatResult mapper ', () => {
    let cityMock = new CityMock();
    component.treatResult(cityMock.getMockResponseWeather());
    expect(component.city.cityName).toEqual("Curitiba");
  });
});

export class CityMock {

  getMockCity(): CityWeather {
    let city = new CityWeather();
    city.cityName = "São Paulo";
    city.countryName = "BR";
    city.humidity = 30;
    city.temperature = 35;
    city.pressure = 800;
    city.dateUpdate = new Date();
    return city;
  }

  getMockResponseWeather(): ResponseWeather {
    let responseWeather = new ResponseWeather();
    responseWeather.name = "Curitiba";
    responseWeather.sys = new Sys();
    responseWeather.sys.country = "BR";
    responseWeather.main = new Main();
    responseWeather.main.temp = 24;
    responseWeather.main.humidity = 35;
    responseWeather.main.pressure = 750;
    return responseWeather;
  }

}
