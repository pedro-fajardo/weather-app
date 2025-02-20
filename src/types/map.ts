
/**
 * Weather Map Component Props
 * 
 * @interface WeatherMapProps
 */
export interface WeatherMapProps {
  city: string;
  coordinates: {
    lat: number;
    lng: number;
  };
  currentTemp: number;
} 