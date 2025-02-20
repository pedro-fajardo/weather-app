
/**
 * API Configuration
 * 
 * Contains the API key and base URL for OpenWeatherMap
 * 
 * @constant
 */
export const API = {
  OPENWEATHER_API_KEY: "946d8a023c4ef35de0e6f97c57181751",
  BASE_URL: "https://api.openweathermap.org/data/2.5",
  ICON_URL: "https://openweathermap.org/img/wn"
};

/**
 * Default Settings
 * 
 * Contains the default settings for the application
 * 
 * @constant
 */
export const DEFAULT_SETTINGS = {
  UNITS: "metric" as const,
  LOCALE: "en-US" as const,
  CACHE_DURATION: 10 * 60 * 1000, // 10 minutes
};

/**
 * Date Format Options
 * 
 * Contains the options for date formatting
 * 
 * @constant
 */
export const DATE_FORMAT_OPTIONS = {
  SHORT_DAY: { weekday: 'short' } as const,
  SHORT_DATE: { month: 'numeric', day: 'numeric' } as const,
  FULL_DATE: { weekday: 'short', month: 'short', day: 'numeric' } as const,
}; 