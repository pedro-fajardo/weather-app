import React from "react";
import { WeatherDisplayProps } from "../../types/weather";
import WeatherGraph from "./WeatherGraph";
import {
  WeatherContainer,
  WeatherCard,
  CityTitle,
  DateText,
  TemperatureContainer,
  TempValue,
  CardsContainer,
  MapContainer,
  GraphContainer,
  DateContainer,
  DayText,
  WeatherIcon,
  WeatherDescription,
  MainDescription,
  SubDescription,
  CurrentTempContainer,
  CurrentTempLabel,
  CurrentTempValue,
  CurrentWeatherIcon,
  SectionTitle,
  SectionContainer,
} from "../../styles/components/Weather/WeatherDisplay.styles";
import WeatherMap from './WeatherMap';

/**
 * Weather Display Component
 * 
 * Renders the complete weather information display including:
 * - City name and current temperature
 * - 5-day weather forecast cards
 * - Interactive temperature map
 * - Temperature evolution graph
 * 
 * @component
 * @param {WeatherDisplayProps} props - Component properties
 */

const getWeatherIcon = (icon: string) => {
  return `https://openweathermap.org/img/wn/${icon}@2x.png`;
};

const WeatherDisplay: React.FC<WeatherDisplayProps> = ({ weatherDataList, city }) => {
  return weatherDataList && Array.isArray(weatherDataList.list) && weatherDataList.list.length > 0 ? (
    <>
      <CityTitle>{city}</CityTitle>
      <CurrentTempContainer>
        <CurrentTempLabel>Current Temperature:</CurrentTempLabel>
        <CurrentTempValue>{Math.round(weatherDataList.list[0].currentTemp)}°</CurrentTempValue>
        <CurrentWeatherIcon>
          <img src={getWeatherIcon(weatherDataList.list[0].weather.icon)} alt={weatherDataList.list[0].weather.description} />
        </CurrentWeatherIcon>
      </CurrentTempContainer>
      <WeatherContainer>
        <SectionContainer>
          <SectionTitle>5-day Weather Forecast</SectionTitle>
          <CardsContainer>
            {weatherDataList.list.map((weather, index) => (
              <WeatherCard key={weather.id} style={{ animationDelay: `${index * 0.1}s` }}>
                <DateContainer>
                  <DayText>{new Date(parseInt(weather.date) * 1000).toLocaleDateString('en-US', { weekday: 'short' })}</DayText>
                  <DateText>{new Date(parseInt(weather.date) * 1000).toLocaleDateString('en-US', { month: 'numeric', day: 'numeric' })}</DateText>
                </DateContainer>
                <WeatherIcon>
                  <img src={getWeatherIcon(weather.weather.icon)} alt={weather.weather.description} />
                </WeatherIcon>
                <WeatherDescription>
                  <MainDescription>{weather.weather.main}</MainDescription>
                  <SubDescription>{weather.weather.description}</SubDescription>
                </WeatherDescription>
                <TemperatureContainer>
                  <TempValue $isMax={false}>{Math.round(weather.minTemp)}°</TempValue>
                  <TempValue $isMax={true}>{Math.round(weather.maxTemp)}°</TempValue>
                </TemperatureContainer>
              </WeatherCard>
            ))}
          </CardsContainer>
        </SectionContainer>
        
        <SectionContainer>
          <SectionTitle>Temperature Map</SectionTitle>
          <MapContainer>
            <WeatherMap
              city={city}
              coordinates={weatherDataList.coordinates}
              currentTemp={weatherDataList.list[0].maxTemp}
            />
          </MapContainer>
        </SectionContainer>
        
        <GraphContainer>
          <SectionTitle>5-day Temperature Evolution</SectionTitle>
          <WeatherGraph key={`graph-${city}`} weatherDataList={weatherDataList.list} />
        </GraphContainer>
      </WeatherContainer>
    </>
  ) : null;
};

export default WeatherDisplay;
