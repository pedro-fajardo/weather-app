import React from "react";
import { WeatherDisplayProps } from "../../types/weather";
import {
  WeatherContainer,
  WeatherCard,
  CityTitle,
  DateText,
  TemperatureContainer,
  Temperature,
  TempLabel,
  TempValue,
  WeatherError,
} from "../../styles/components/Weather/WeatherDisplay.styles";

const WeatherDisplay: React.FC<WeatherDisplayProps> = ({ weatherDataList, city, error }) => {
   if (error) return (
     <WeatherError>
       <span role="alert" style={{ color: 'white' }}>
         Error: {error}
       </span>
     </WeatherError>
   );
 
   const formatDate = (timestamp: string) => {
     const date = new Date(parseInt(timestamp) * 1000);
     return date.toLocaleDateString('en-US', {
       weekday: 'short',
       month: 'short',
       day: 'numeric'
     });
   };
 
   return weatherDataList?.length > 0 ? (
     <>
       <CityTitle>{city}</CityTitle>
       <WeatherContainer>
         {weatherDataList.map((weather) => (
           <WeatherCard key={weather.id}>
             <DateText>{formatDate(weather.date.toString())}</DateText>
             <TemperatureContainer>
               <Temperature>
                 <TempLabel>Min</TempLabel>
                 <TempValue isMax={false}>{Math.round(weather.minTemp)}°</TempValue>
               </Temperature>
               <Temperature>
                 <TempLabel>Max</TempLabel>
                 <TempValue isMax={true}>{Math.round(weather.maxTemp)}°</TempValue>
               </Temperature>
             </TemperatureContainer>
           </WeatherCard>
         ))}
       </WeatherContainer>
     </>
   ) : null;
 };
 
 export default WeatherDisplay;
 