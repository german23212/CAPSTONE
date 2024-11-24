import { Component, OnInit } from '@angular/core';
import * as L from 'leaflet';

@Component({
  selector: 'app-mapa',
  templateUrl: './mapa.page.html',
  styleUrls: ['./mapa.page.scss'],
})
export class MapaPage implements OnInit {
  map!: L.Map;

  ngOnInit() {
    this.loadMap();
  }

  loadMap() {
    // Coordenadas exactas de Pedro Aguirre Cerda
    const lat = -33.4918800;
    const lon = -70.6761600;

    // Inicializa el mapa con las coordenadas de Pedro Aguirre Cerda
    this.map = L.map('map', {
      center: [lat, lon],
      zoom: 15,
    });

    // Capa de mapa de OpenStreetMap
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
    }).addTo(this.map);

    // Renderización correcta del mapa
    setTimeout(() => {
      this.map.invalidateSize();
    }, 100);

    // Crear un ícono personalizado para el marcador
    const customIcon = L.icon({
      iconUrl: 'https://upload.wikimedia.org/wikipedia/commons/2/2e/Font_Awesome_5_solid_map-marker-alt.svg',
      iconSize: [32, 32],  // Tamaño del icono
      iconAnchor: [16, 32], // Punto de anclaje del icono (en la parte inferior)
      popupAnchor: [0, -32], // Desplazamiento del popup respecto al icono
    });

    // Agrega un marcador con el icono personalizado en Pedro Aguirre Cerda
    L.marker([lat, lon], { icon: customIcon }).addTo(this.map)
      .bindPopup('<strong>Pedro Aguirre Cerda</strong>')
      .openPopup();

    // Centra el mapa en la ubicación de Pedro Aguirre Cerda
    this.map.setView([lat, lon], 15);
  }
}
