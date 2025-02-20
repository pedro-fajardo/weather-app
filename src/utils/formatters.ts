/**
 * Utility functions for data formatting
 */

export const normalizeCity = (cityName: string): string => {
  return cityName
    .split(' ')
    .map(word => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())
    .join(' ');
};

export const formatDate = (timestamp: string | number, options?: Intl.DateTimeFormatOptions) => {
  const date = new Date(typeof timestamp === 'string' ? parseInt(timestamp) * 1000 : timestamp * 1000);
  return date.toLocaleDateString('en-US', options);
};

export const getWeatherIcon = (icon: string) => {
  return `https://openweathermap.org/img/wn/${icon}@2x.png`;
};

export const roundTemperature = (temp: number): number => {
  return Math.round(temp);
}; 