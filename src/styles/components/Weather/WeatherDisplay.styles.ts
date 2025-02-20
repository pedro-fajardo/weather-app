import styled from "styled-components";

/**
 * Styled Components for Weather Display
 * @module WeatherDisplayStyles
 */

/**
 * Main container using CSS Grid layout
 */
export const WeatherContainer = styled.div`
  align-items: start;
  display: grid;
  gap: ${({ theme }) => theme.spacing.md};
  grid-template-areas: 
    "cards map"
    "graph graph";
  grid-template-columns: 1fr 1fr;
  margin: ${({ theme }) => theme.spacing.lg};
  max-width: 1600px;
  padding: 0 ${({ theme }) => theme.spacing.lg};
  row-gap: 40px;
  width: 100%;

  @media (max-width: 1024px) {
    gap: 32px;
    grid-template-areas: 
      "cards"
      "map"
      "graph";
    grid-template-columns: 1fr;
    margin: ${({ theme }) => theme.spacing.md};
    margin-bottom: 40px;
    padding: 0;
  }
`;

export const CardsContainer = styled.div`
  background: rgba(255, 255, 255, 0.1);
  border-radius: 20px;
  box-shadow: 0 8px 32px rgba(31, 38, 135, 0.15);
  height: fit-content;
  overflow: hidden;
`;

export const MapContainer = styled.div`
  border-radius: 20px;
  box-shadow: 0 8px 32px rgba(31, 38, 135, 0.15);
  height: 100%;
  overflow: hidden;
  width: 100%;
`;

export const SectionContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
  height: 100%;

  @media (max-width: 768px) {
    gap: 20px;
  }

  &:nth-child(1) {
    grid-area: cards;
  }

  &:nth-child(2) {
    grid-area: map;
  }

  &:nth-child(2) ${MapContainer} {
    flex: 1;
  }
`;

export const SectionTitle = styled.h2`
  color: #1a237e;
  font-size: 1.4rem;
  font-weight: 600;
  margin-bottom: 16px;
  text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.1);

  @media (max-width: 768px) {
    margin-bottom: 20px;
    text-align: center;
  }
`;

export const GraphContainer = styled.div`
  display: flex;
  flex-direction: column;
  grid-area: graph;
`;

/**
 * Weather card component with hover effects
 */
export const WeatherCard = styled.div.attrs({ className: 'weather-card' })`
  align-items: center;
  background: rgba(255, 255, 255, 0.9);
  display: grid;
  grid-template-columns: 100px 80px 1fr 100px;
  padding: 16px 24px;
  transition: all 0.3s ease;
  width: 100%;

  @media (max-width: 768px) {
    grid-template-columns: 80px 60px 1fr 80px;
    padding: 12px 16px;
  }

  @media (max-width: 480px) {
    grid-template-columns: 70px 50px 1fr 70px;
    padding: 10px 12px;
  }

  &:hover {
    background: rgba(255, 255, 255, 1);
  }
`;

export const DateContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

export const DayText = styled.span`
  color: #1a237e;
  font-size: 1.2rem;
  font-weight: 600;
`;

export const DateText = styled.span`
  color: #666;
  font-size: 0.9rem;
`;

export const WeatherIcon = styled.div`
  height: 50px;
  width: 50px;
  
  img {
    height: 100%;
    object-fit: contain;
    width: 100%;
  }
`;

export const WeatherDescription = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
`;

export const MainDescription = styled.span`
  color: #1a237e;
  font-size: 1rem;
  font-weight: 500;
`;

export const SubDescription = styled.span`
  color: #666;
  font-size: 0.9rem;
`;

export const TemperatureContainer = styled.div`
  align-items: center;
  display: flex;
  gap: 12px;
  justify-content: flex-end;
`;

export const TempValue = styled.span<{ $isMax: boolean }>`
  color: ${props => props.$isMax ? '#1a237e' : '#666'};
  font-size: ${props => props.$isMax ? '1.4rem' : '1.2rem'};
  font-weight: ${props => props.$isMax ? '600' : '400'};
`;

export const CityTitle = styled.h2`
  color: Darkblue;
  font-family: 'Inter', sans-serif;
  font-size: 2.8rem;
  font-weight: 700;
  letter-spacing: -0.5px;
  margin: 24px 0 32px;
  position: relative;
  text-align: center;
  -webkit-background-clip: text;

  @media (max-width: 768px) {
    font-size: 2.4rem;
    margin: 20px 0 28px;
  }

  @media (max-width: 480px) {
    font-size: 2rem;
    margin: 16px 0 24px;
  }
`;

export const TempLabel = styled.p`
  color: #7986cb;
  font-size: 0.9em;
  font-weight: 600;
  text-transform: uppercase;
  margin-bottom: 8px;
  letter-spacing: 1px;
`;

export const CurrentTempContainer = styled.div`
  align-items: center;
  background: rgba(255, 255, 255, 0.9);
  border-radius: 20px;
  box-shadow: 0 8px 32px rgba(31, 38, 135, 0.15);
  display: flex;
  gap: 16px;
  justify-content: center;
  margin: 0 auto 32px;
  max-width: fit-content;
  padding: 16px 32px;
  text-align: center;

  @media (max-width: 768px) {
    gap: 12px;
    margin-bottom: 24px;
    padding: 12px 24px;
  }

  @media (max-width: 480px) {
    gap: 8px;
    margin-bottom: 20px;
    padding: 10px 20px;
    width: 90%;
  }
`;

export const CurrentTempLabel = styled.span`
  color: #5c6bc0;
  font-size: 1.4rem;
  font-weight: 500;
`;

export const CurrentTempValue = styled.span`
  color: #1a237e;
  font-size: 2.4rem;
  font-weight: 700;
  text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.1);
`;

export const CurrentWeatherIcon = styled.span`
  height: 70px;
  width: 70px;
  
  img {
    height: 100%;
    object-fit: contain;
    width: 100%;
  }
`;
