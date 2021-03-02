import { Component, OnInit } from '@angular/core';
import { Plugins } from '@capacitor/core';

@Component({
  selector: 'app-geolocalizacion',
  templateUrl: './geolocalizacion.page.html',
  styleUrls: ['./geolocalizacion.page.scss'],
})
export class GeolocalizacionPage implements OnInit {

  constructor() { }
  public miBrowser = Plugins.Browser;
  public geolocation = Plugins.Geolocation;
  ngOnInit() {
  }
  onClick() {
    this.geolocation.getCurrentPosition().then((resp) => {
       resp.coords.latitude
       resp.coords.longitude
        window.open('geo:'+resp.coords.latitude+","+resp.coords.longitude);
      }).catch((error) => {
       console.log('Error getting location', error);
     });
     
  
  }
}
