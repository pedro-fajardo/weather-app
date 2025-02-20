import styled from "styled-components";

interface AppContainerProps {
  weatherCondition?: string;
}

export const AppContainer = styled.div<AppContainerProps>`
  padding: 2rem;
  min-height: 100vh;
  background: linear-gradient(
    rgba(255, 255, 255, 0.5),
    rgba(255, 255, 255, 0.5)
  ),
  url(${({ weatherCondition }) => getWeatherBackground(weatherCondition)});
  background-size: cover;
  background-position: center;
  background-attachment: fixed;
  display: flex;
  flex-direction: column;
  align-items: center;
  transition: background-image 0.5s ease-in-out;
`;

const getWeatherBackground = (condition?: string) => {
  const backgrounds = {
    'clear': '/images/weather/clear.jpg',
    'clouds': '/images/weather/clouds.jpg',
    'rain': '/images/weather/rain.jpg',
    'snow': '/images/weather/snow.jpg',
    'thunderstorm': '/images/weather/thunder.jpg',
    'mist': '/images/weather/mist.jpg',
    'default': '/images/weather/default.jpg'
  };

  if (!condition) return backgrounds.default;
  const key = condition.toLowerCase();
  return backgrounds[key as keyof typeof backgrounds] || backgrounds.default;
};

export const AppTitle = styled.h1`
  text-align: center;
  margin-bottom: 2rem;
  color: ${({ theme }) => theme.colors.primary};
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.1);
`;

export const ContentWrapper = styled.div`
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
  display: flex;
  justify-content: center;
`; 