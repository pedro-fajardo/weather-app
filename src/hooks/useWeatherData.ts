import { useState, useCallback, useEffect } from 'react';
import axios from 'axios';
import { API } from '../config/constants';
import { normalizeCity } from '../utils/formatters';
import { WeatherData, DailyWeatherData } from '../types/weather';

export const useWeatherData = (unit: string) => {
  const [city, setCity] = useState<string>("");
  const [weatherDataList, setWeatherDataList] = useState<WeatherData | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [lastSearchedCity, setLastSearchedCity] = useState<string>("");

  const groupWeatherByDay = useCallback((weatherList: any[]): DailyWeatherData[] => {
    const defaultWeather = {
      id: 800,
      main: "Clear",
      description: "clear sky",
      icon: "01d"
    };

    const dailyData: {
      [key: string]: {
        temps: number[],
        date: string,
        currentTemp?: number,
        weather: typeof defaultWeather
      }
    } = {};
    const now = new Date().getTime();

    weatherList.forEach((item) => {
      const date = new Date(item.dt * 1000).toLocaleDateString('en-US');
      const timestamp = item.dt * 1000;

      if (!dailyData[date]) {
        dailyData[date] = {
          temps: [],
          date: item.dt.toString(),
          currentTemp: undefined,
          weather: item.weather?.[0] || defaultWeather
        };
      }

      dailyData[date].temps.push(item.main.temp);

      if (!dailyData[date].currentTemp ||
        Math.abs(now - timestamp) < Math.abs(now - parseInt(dailyData[date].date) * 1000)) {
        dailyData[date].currentTemp = item.main.temp;
        dailyData[date].weather = item.weather?.[0] || defaultWeather;
      }
    });

    return Object.entries(dailyData)
      .slice(0, 5)
      .map(([date, data]) => ({
        id: crypto.randomUUID(),
        date: data.date,
        minTemp: Math.min(...data.temps),
        maxTemp: Math.max(...data.temps),
        currentTemp: data.currentTemp || data.temps[0],
        weather: data.weather
      }));
  }, []);

  const fetchWeatherData = useCallback(async (searchCity: string) => {
    if (!searchCity.trim()) return;

    try {
      const response = await axios.get(
        `${API.BASE_URL}/forecast?q=${searchCity}&units=${unit}&appid=${API.OPENWEATHER_API_KEY}`
      );

      if (response.data?.city?.name) {
        setCity(normalizeCity(response.data.city.name));
        setLastSearchedCity(searchCity);
        const coordinates = {
          lat: response.data.city.coord.lat,
          lng: response.data.city.coord.lon
        };
        setWeatherDataList({
          list: groupWeatherByDay(response.data.list),
          coordinates
        });
        setError(null);
      } else {
        setError("Invalid city data received");
      }
    } catch (err) {
      setWeatherDataList(null);
      setError(axios.isAxiosError(err) ? err.response?.data?.message || err.message : "Failed to fetch weather data");
    }
  }, [unit, groupWeatherByDay]);

  useEffect(() => {
    if (lastSearchedCity) {
      fetchWeatherData(lastSearchedCity);
    }
  }, [unit, fetchWeatherData, lastSearchedCity]);

  return {
    city,
    weatherDataList,
    error,
    fetchWeatherData,
    setError
  };
}; 