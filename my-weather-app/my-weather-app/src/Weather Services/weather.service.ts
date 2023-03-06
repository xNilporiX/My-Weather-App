import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { IWeatherMain } from '../app/Types';

@Injectable({
  providedIn: 'root'
})
export class WeatherService {
  latitude = '-37.80';
  longitude = '144.96';
  constructor(private _HttpCLient: HttpClient) { }
  testWeatherApi(){
    return this._HttpCLient.get<IWeatherMain>(`${API_ENDPOINT}latitude=${this.latitude}&longitude=${this.longitude}&hourly=temperature_2m&hourly=temperature_2m,rain,showers,snowfall,snow_depth,visibility&daily=temperature_2m_max,temperature_2m_min,sunrise,sunset,uv_index_max,showers_sum,snowfall_sum&current_weather=true&precipitation_unit=inch&timezone=auto`);
  }
}
const API_ENDPOINT = 'https://api.open-meteo.com/v1/forecast?';
