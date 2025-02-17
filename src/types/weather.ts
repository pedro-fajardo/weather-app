export interface WeatherTemperature {
  temp: number;
}

export interface WeatherData {
  id: number;
  main: WeatherTemperature;
  dt: number;
}

export interface DailyWeatherData {
  id: string;
  date: string;
  minTemp: number;
  maxTemp: number;
}

export interface WeatherDisplayProps {
  city: string | null;
  weatherDataList: DailyWeatherData[];
  error: string | null;
}

export interface WeatherSearchProps {
  onSearch: (city: string) => void;
} 

export interface TempValueProps {
   isMax: boolean;
 }