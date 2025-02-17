import React, { useState, useContext } from "react";
import styled from "styled-components";
import { UnitContext } from "../../context/UnitContext";
import { SearchContainer, Input, Button } from "../../styles/components/Weather/WeatherSearch.styles";

interface WeatherSearchProps {
  onSearch: (city: string) => void;
}

const WeatherSearch: React.FC<WeatherSearchProps> = ({ onSearch }) => {
  const [city, setCity] = useState("");
  const { unit, setUnit } = useContext(UnitContext);

  return (
    <SearchContainer>
      <Input
        type="text"
        placeholder="Enter city name..."
        value={city}
        onChange={(e) => setCity(e.target.value)}
      />
      <Button onClick={() => onSearch(city)}>Search</Button>
      <Button onClick={() => setUnit(unit === "metric" ? "imperial" : "metric")}>
        Toggle °C/°F
      </Button>
    </SearchContainer>
  );
};

export default WeatherSearch;
