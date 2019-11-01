import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ConfigHttpLoader } from '@ngx-config/http-loader';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { WeatherComponent } from './weather/weather.component';
import { ConfigLoader, ConfigModule } from '@ngx-config/core';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { DeviceDetectorModule } from 'ngx-device-detector';

export function configFactory(http: HttpClient): ConfigLoader {
  return new ConfigHttpLoader(http, './properties.config.json');
}

@NgModule({
  declarations: [
    AppComponent,
    WeatherComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    DeviceDetectorModule.forRoot(),
    ConfigModule.forRoot({
      provide: ConfigLoader,
      useFactory: (configFactory),
      deps: [HttpClient]
    }),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
