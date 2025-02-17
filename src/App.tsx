import React, { useState, useEffect } from "react";
import styled, { ThemeProvider } from "styled-components";
import { theme } from "./styles/theme";
import axios from "axios";
import GlobalStyles from "./styles/GlobalStyles";
import WeatherSearch from "./components/Weather/WeatherSearch";
import WeatherDisplay from "./components/Weather/WeatherDisplay";
import { UnitContext } from "./context/UnitContext";

const AppContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  min-height: 100vh;
  background: linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%);
  padding: 20px;
`;

const AppTitle = styled.h1`
  color: #2c3e50;
  font-size: 2.8rem;
  font-weight: 700;
  margin: 24px 0;
  text-align: center;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.1);
`;

interface DailyWeatherData {
  id: string;
  date: string;
  minTemp: number;
  maxTemp: number;
}

const OPENWEATHER_API_KEY = "946d8a023c4ef35de0e6f97c57181751";

const App: React.FC = () => {
  const [unit, setUnit] = useState<"metric" | "imperial">("metric");
  const [city, setCity] = useState<string>("");
  const [weatherDataList, setWeatherDataList] = useState<any>(null);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (city) {
      handleSearch(city);
    }
  }, [unit]);

  const groupWeatherByDay = (weatherList: any[]): DailyWeatherData[] => {
    const dailyData: { [key: string]: { temps: number[], date: string } } = {};
    
    weatherList.forEach((item) => {
      // Get date without time
      const date = new Date(item.dt * 1000).toLocaleDateString('en-US');
      
      if (!dailyData[date]) {
        dailyData[date] = {
          temps: [],
          date: item.dt.toString()
        };
      }
      
      dailyData[date].temps.push(item.main.temp);
    });

    return Object.entries(dailyData).map(([date, data]) => ({
      id: crypto.randomUUID(),
      date: data.date,
      minTemp: Math.min(...data.temps),
      maxTemp: Math.max(...data.temps)
    }));
  };

  const handleSearch = async (searchCity: string) => {
    setCity(searchCity);
    try {
      const response = await axios.get(
        `https://api.openweathermap.org/data/2.5/forecast?q=${searchCity}&units=${unit}&appid=${OPENWEATHER_API_KEY}`
      );
      if (response.data) {
        if (response.data.city?.name) {
          setCity(response.data.city.name);
        } else {
          setError("Invalid city data received");
          return;
        }

        if (response.data.list && Array.isArray(response.data.list)) {
          const groupedData = groupWeatherByDay(response.data.list);
          setWeatherDataList(groupedData);
        } else {
          setError("Invalid weather data received");
          return;
        }
      }
      setError(null);
    } catch (err) {
      setWeatherDataList(null);
      setError("Failed to fetch weather data. Please try again.");
    }
  };

  return (
    <ThemeProvider theme={theme}>
      <UnitContext.Provider value={{ unit, setUnit }}>
        <GlobalStyles />
        <AppContainer>
          <AppTitle>Weather Forecast</AppTitle>
          <WeatherSearch onSearch={handleSearch} />
          <WeatherDisplay city={city} weatherDataList={weatherDataList} error={error} />
        </AppContainer>
      </UnitContext.Provider>
    </ThemeProvider>
  );
};

export default App;