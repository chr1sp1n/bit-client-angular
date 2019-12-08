import { AfterViewInit, Component, OnInit } from '@angular/core';
import * as L from 'leaflet';


@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.scss']
})
export class MapComponent implements OnInit {

  private map;

  private initMap(): void {

    let center = L.latLng(44.4973187, 11.3420705);

    this.map = L.map( 'map', { zoomControl: false }).setView( [44.4973187, 11.3420705], 16 );

    const tiles = L.tileLayer('https://{s}.tile.openstreetmap.se/hydda/full/{z}/{x}/{y}.png', {
      maxZoom: 18,
      attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
      inertia: true,
      zoomDelta: .5,
      zoomSnap: .5
    });


    tiles.addTo(this.map);
  }

  constructor() { }

  ngOnInit() {
  }

  ngAfterViewInit(): void {
    this.initMap();
  }

}
