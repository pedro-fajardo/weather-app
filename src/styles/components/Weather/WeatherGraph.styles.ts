import styled from 'styled-components';

/**
 * Styled Components for Weather Graph
 * @module WeatherGraphStyles
 */

/**
 * Graph container with responsive height
 */
export const GraphContainer = styled.div`
  background: rgba(255, 255, 255, 0.9);
  border-radius: 20px;
  box-shadow: 0 8px 32px rgba(31, 38, 135, 0.15);
  height: 400px;
  padding: 20px;
  width: 100%;

  @media (max-width: 768px) {
    height: 300px;
    padding: 16px;
  }
`; 