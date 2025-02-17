import styled from "styled-components";
import { TempValueProps } from "../../../types/weather";

export const WeatherContainer = styled.div`
   display: flex;
   flex-wrap: wrap;
   gap: ${({ theme }) => theme.spacing.lg};
   justify-content: center;
   margin: ${({ theme }) => theme.spacing.lg};
   padding: 0 ${({ theme }) => theme.spacing.lg};
   max-width: 1200px;
`;

export const WeatherCard = styled.div`
   background: ${({ theme }) => theme.colors.white};
   padding: ${({ theme }) => theme.spacing.lg};
   border-radius: ${({ theme }) => theme.borderRadius.lg};
   box-shadow: ${({ theme }) => theme.shadows.md};
   text-align: center;
   width: 220px;
   transition: transform 0.2s ease;

   &:hover {
      transform: translateY(-5px);
      box-shadow: ${({ theme }) => theme.shadows.lg};
   }
`;

export const WeatherError = styled.div`
    border: 2px solid #ff0000;
    background-color:rgb(174, 23, 23);
    padding: 1rem;
    text-align: center;
    border-radius: 4px;
	 width: 45%
`;

export const CityTitle = styled.h1`
   text-align: center;
   margin: 24px 0;
   color: #2c3e50;
   font-size: 2.5rem;
   font-weight: 700;
`;

export const DateText = styled.p`
   color: #7f8c8d;
   margin: 12px 0;
   font-size: 1.1em;
   font-weight: 500;
`;

export const TemperatureContainer = styled.div`
   display: flex;
   justify-content: space-around;
   margin: 16px 0;
   padding: 8px;
   background: #f8f9fa;
   border-radius: 12px;
`;

export const Temperature = styled.div`
   text-align: center;
   padding: 8px 16px;
`;

export const TempLabel = styled.p`
   color: #95a5a6;
   font-size: 0.9em;
   font-weight: 600;
   text-transform: uppercase;
   margin-bottom: 4px;
`;

export const TempValue = styled.h3<TempValueProps>`
   margin: 0;
   font-size: 1.8em;
   font-weight: 700;
   color: ${(props) => (props.isMax ? "#e74c3c" : "#3498db")};
`;
