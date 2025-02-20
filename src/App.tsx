import React, { useState, useEffect } from "react";
import { ThemeProvider } from "styled-components";
import { theme } from "./styles/theme";
import GlobalStyles from "./styles/GlobalStyles";
import WeatherSearch from "./components/Weather/WeatherSearch";
import WeatherDisplay from "./components/Weather/WeatherDisplay";
import { UnitContext } from "./context/UnitContext";
import { DEFAULT_SETTINGS } from "./config/constants";
import { useWeatherData } from "./hooks/useWeatherData";
import Feedback from './components/Feedback/Feedback';
import { AppContainer, AppTitle } from "./styles/components/App.styles";
import ImagePreloader from './components/ImagePreloader';

/**
 * Weather Forecast Application
 * 
 * Main application component that handles:
 * - Weather data fetching from OpenWeather API
 * - State management for weather data and UI
 * - Data processing and grouping
 * - Error handling
 * - Unit context for temperature unit management
 * - Image preloader for loading images
 * - Theme provider for styling
 * - App container for styling
 * - App title for styling
 * 
 * @component
 */

const App: React.FC = () => {
  const [unit, setUnit] = useState<"metric" | "imperial">(DEFAULT_SETTINGS.UNITS);
  const { city, weatherDataList, error, fetchWeatherData, setError } = useWeatherData(unit);
  const [currentCondition, setCurrentCondition] = useState<string | undefined>(undefined);
  const handleCloseError = () => {
    setError(null);
  };

  useEffect(() => {
    const currentCondition = weatherDataList?.list?.[0]?.weather?.main?.toLowerCase() ?? undefined;
    setCurrentCondition(currentCondition);
  }, [weatherDataList]);

  return (
    <>
      <ImagePreloader />
      <ThemeProvider theme={theme}>
        <UnitContext.Provider value={{ unit, setUnit }}>
          <GlobalStyles />
          <AppContainer weatherCondition={currentCondition}>
            <AppTitle>Weather Forecast App</AppTitle>
            {error && (
              <Feedback 
                type="error" 
                message={error} 
                onClose={handleCloseError}
              />
            )}
            <WeatherSearch
              onSearch={fetchWeatherData}
            />
            {weatherDataList && (
              <WeatherDisplay
                city={city}
                weatherDataList={weatherDataList}
              />
            )}
          </AppContainer>
        </UnitContext.Provider>
      </ThemeProvider>
    </>
  );
};

export default App;