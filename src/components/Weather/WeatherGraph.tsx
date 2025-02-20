import React, { useContext } from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import { UnitContext } from '../../context/UnitContext';
import { WeatherGraphProps } from '../../types/weather';
import { GraphContainer } from '../../styles/components/Weather/WeatherGraph.styles';

/**
 * Weather Graph Component
 * 
 * Renders a line graph showing:
 * - Temperature evolution over 5 days
 * - Min/Max temperature points
 * - Temperature trends
 * 
 * Uses Recharts for graph rendering
 * 
 * @component
 * @param {WeatherGraphProps} props - Component properties
 */
const WeatherGraph: React.FC<WeatherGraphProps> = ({ weatherDataList }) => {
  const { unit } = useContext(UnitContext);

  if (!weatherDataList) return null;

  const formatDate = (timestamp: string) => {
    const date = new Date(parseInt(timestamp) * 1000);
    return date.toLocaleDateString('en-US', {
      weekday: 'short',
      month: 'short',
      day: 'numeric'
    });
  };

  const data = weatherDataList.map(day => ({
    date: formatDate(day.date),
    'Min Temperature': Math.round(day.minTemp),
    'Max Temperature': Math.round(day.maxTemp),
  }));

  return (
    <GraphContainer>
      <ResponsiveContainer width="100%" height="100%">
        <LineChart
          data={data}
          margin={{
            top: 5,
            right: 30,
            left: 20,
            bottom: 5,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="date" />
          <YAxis unit={unit === 'metric' ? '°C' : '°F'} />
          <Tooltip />
          <Legend />
          <Line
            type="monotone"
            dataKey="Min Temperature"
            stroke="blue"
            strokeWidth={2}
            dot={{ r: 4 }}
          />
          <Line
            type="monotone"
            dataKey="Max Temperature"
            stroke="red"
            strokeWidth={2}
            dot={{ r: 4 }}
          />
        </LineChart>
      </ResponsiveContainer>
    </GraphContainer>
  );
};

export default WeatherGraph; 