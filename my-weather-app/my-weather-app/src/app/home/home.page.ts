import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { WeatherService } from '../../Weather Services/weather.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  constructor(private _http:HttpClient, private _weatherService:WeatherService) {
    this.getWeather();
  }

  getWeather() {
    this._weatherService.testWeatherApi().subscribe(
      (data)=>{
        console.log(data);
      }
    )
  }

}
