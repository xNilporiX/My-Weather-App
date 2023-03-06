import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { WeatherService } from '../../Weather Services/weather.service';
import { Geolocation } from '@capacitor/geolocation';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  latitude: string = '0';
  longitude: string = '0';
  selectedSegment : string ='today';

  constructor(private _http: HttpClient, private _weatherService: WeatherService) {
    this.currentLocation();
    
  }

  async currentLocation() {
    const coordinates = await Geolocation.getCurrentPosition();
    this.latitude = coordinates.coords.latitude.toPrecision();
    this.longitude = coordinates.coords.longitude.toPrecision();
    this.getWeather(this.latitude, this.longitude);
  }
  getWeather(latitude: string, longitude: string) {
    {
      this._weatherService.getWeather(latitude, longitude).subscribe(
        (data) => {
          console.log(data);
        }
      )
    }
  }

  segmentChanged(event:any){
    this.selectedSegment = event.detail.value;
  }
}
