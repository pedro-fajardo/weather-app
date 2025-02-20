import React, { useContext } from 'react';
import { Formik, Form, Field } from 'formik';
import * as Yup from 'yup';
import { WeatherSearchProps } from '../../types/weather';
import { SearchContainer, SearchInput, SearchButton, ErrorMessage, InputWrapper, UnitContainer, UnitLabel, Switch, ErrorMessageContainer } from '../../styles/components/Weather/WeatherSearch.styles';
import { UnitContext } from '../../context/UnitContext';

/**
 * Weather Search Component
 * 
 * Provides city search functionality with:
 * - Search input field
 * - Search button
 * - Unit toggle (Celsius/Fahrenheit)
 * 
 * @component
 * @param {WeatherSearchProps} props - Component properties
 * @param {Function} props.onSearch - Search callback function
 */
const WeatherSearch: React.FC<WeatherSearchProps> = ({ onSearch }) => {
  const { unit, setUnit } = useContext(UnitContext);

  const toggleUnit = () => {
    setUnit(unit === 'metric' ? 'imperial' : 'metric');
  };

  return (
    <Formik
      initialValues={{ city: '' }}
      validationSchema={Yup.object({
        city: Yup.string()
          .min(3, 'City name must be at least 3 characters')
          .max(50, 'City name cannot exceed 50 characters')
          .required('Please enter a city name'),
      })}
      onSubmit={(values, { setSubmitting }) => {
        onSearch(values.city);
        setSubmitting(false);
      }}
    >
      {({ errors, isSubmitting, isValid }) => (
        <Form>
          <SearchContainer>
            <InputWrapper>
              <Field
                as={SearchInput}
                name="city"
                type="text"
                placeholder="Enter city name..."
              />
              <SearchButton
                type="submit"
                disabled={isSubmitting || !isValid}
              >
                Search
              </SearchButton>
              <UnitContainer>
                <UnitLabel>{unit === 'metric' ? 'ºC' : 'ºF'}</UnitLabel>
                <Switch 
                  checked={unit === 'imperial'} 
                  onChange={toggleUnit} 
                  disabled={isSubmitting}
                />
                <UnitLabel>{unit === 'metric' ? 'ºF' : 'ºC'}</UnitLabel>
              </UnitContainer>
            </InputWrapper>
            {errors.city ? (
              <ErrorMessageContainer>
                <ErrorMessage>{errors.city}</ErrorMessage>
              </ErrorMessageContainer>
            ) : (
              <ErrorMessageContainer />
            )}
          </SearchContainer>
        </Form>
      )}
    </Formik>
  );
};

export default WeatherSearch;
