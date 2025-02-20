import React, { useEffect } from 'react';
import { MapContainer, TileLayer, Marker, Popup, useMap } from 'react-leaflet';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';
import { WeatherMapProps } from '../../types/map';
import { MapWrapper } from '../../styles/components/Weather/WeatherMap.styles';
import icon from 'leaflet/dist/images/marker-icon.png';
import iconShadow from 'leaflet/dist/images/marker-shadow.png';

const DefaultIcon = L.icon({
  iconUrl: icon,
  shadowUrl: iconShadow,
  iconSize: [25, 41],
  iconAnchor: [12, 41]
});

L.Marker.prototype.options.icon = DefaultIcon;

const OPENWEATHER_API_KEY = "946d8a023c4ef35de0e6f97c57181751";

/**
 * Map Updater Component
 * 
 * Updates the map to the specified coordinates
 * 
 * @param {Object} props.coordinates - City coordinates
 */
const MapUpdater: React.FC<{ coordinates: { lat: number; lng: number } }> = ({ coordinates }) => {
  const map = useMap();

  useEffect(() => {
    map.flyTo([coordinates.lat, coordinates.lng], map.getZoom());
  }, [map, coordinates]);

  return null;
};

/**
 * Weather Map Component
 * 
 * Displays an interactive map showing:
 * - City location
 * - Current temperature
 * - Map controls (zoom, pan)
 * 
 * Uses Leaflet for map rendering
 * 
 * @component
 * @param {string} props.city - City name
 * @param {Object} props.coordinates - City coordinates
 * @param {number} props.currentTemp - Current temperature
 */
const WeatherMap: React.FC<WeatherMapProps> = ({ city, coordinates, currentTemp }) => {
  return (
    <MapWrapper>
      <MapContainer
        center={[coordinates.lat, coordinates.lng]}
        zoom={10}
        style={{ height: '100%', width: '100%' }}
      >
        <MapUpdater coordinates={coordinates} />
        <TileLayer
          url="https://tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        />
        <TileLayer
          url={`https://tile.openweathermap.org/map/temp_new/{z}/{x}/{y}.png?appid=${OPENWEATHER_API_KEY}`}
          attribution='&copy; OpenWeatherMap'
          opacity={0.6}
        />
        <Marker position={[coordinates.lat, coordinates.lng]}>
          <Popup>
            {city}<br/>
            Current Temp: {Math.round(currentTemp)}°
          </Popup>
        </Marker>
      </MapContainer>
    </MapWrapper>
  );
};

export default WeatherMap; 