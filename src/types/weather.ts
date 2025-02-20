/**
 * Weather Temperature Interface
 * 
 * Represents the temperature information for a weather day
 * 
 * @interface WeatherTemperature
 */
export interface WeatherTemperature {
  temp: number;
}

/**
 * Weather Data Interface
 * 
 * Represents the weather data structure from the API
 * 
 * @interface WeatherData
 */
export interface WeatherData {
  list: DailyWeatherData[];
  coordinates: {
    lat: number;
    lng: number;
  };
}

/**
 * Weather information structure from the API
 * 
 * @interface WeatherInfo
 */
export interface WeatherInfo {
  id: number;
  main: string;
  description: string;
  icon: string;
}

/**
 * Daily Weather Data Interface
 * 
 * Represents the daily weather data structure
 * 
 * @interface DailyWeatherData
 */
export interface DailyWeatherData {
  id: string;
  date: string;
  minTemp: number;
  maxTemp: number;
  currentTemp: number;
  weather: WeatherInfo;
}

/**
 * Weather Display Component Props
 * 
 * @interface WeatherDisplayProps
 */
export interface WeatherDisplayProps {
  weatherDataList: WeatherData | null;
  city: string;
  error?: string;
  coordinates?: {
    lat: number;
    lng: number;
  };
}

/**
 * Weather Graph Component Props
 * 
 * @interface WeatherGraphProps
 */
export interface WeatherGraphProps {
  weatherDataList: DailyWeatherData[] | null;
}

/**
 * Weather Search Component Props
 * 
 * @interface WeatherSearchProps
 */
export interface WeatherSearchProps {
  onSearch: (city: string) => void;
}

/**
 * Temperature Value Props Interface
 * 
 * Represents the temperature value props
 * 
 * @interface TempValueProps
 */
export interface TempValueProps {
  isMax: boolean;
}