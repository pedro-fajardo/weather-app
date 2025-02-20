import styled from "styled-components";

/**
 * Styled Components for Weather Search
 * @module WeatherSearchStyles
 */

/**
 * Search container with responsive layout
 */
export const SearchContainer = styled.div`
  width: 100%;
  max-width: 600px;
  margin: 0 auto;
  padding: 1rem;
`;

export const InputWrapper = styled.div`
  display: flex;
  gap: 1rem;
`;

export const SearchInput = styled.input`
  flex: 1;
  padding: 0.5rem 1rem;
  border: 1px solid ${({ theme }) => theme.colors.border};
  border-radius: 4px;
  font-size: 1rem;
  
  &:focus {
    outline: none;
    border-color: ${({ theme }) => theme.colors.primary};
  }
`;

const ButtonBase = styled.button`
  padding: 0.5rem 1rem;
  background-color: ${({ theme }) => theme.colors.secondary};
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  font-weight: bold;
  
  &:hover {
    background-color: ${({ theme }) => theme.colors.secondaryDark};
  }

  &:disabled {
    background-color: ${({ theme }) => theme.colors.disabled};
    cursor: not-allowed;
  }
`;

export const SearchButton = styled(ButtonBase)``;

export const ErrorMessage = styled.div`
  color: ${({ theme }) => theme.colors.error};
  font-size: 0.875rem;
`;

export const ErrorMessageContainer = styled.div`
  min-height: 24px;
`;

export const Switch = styled.input.attrs({ type: 'checkbox' })`
  appearance: none;
  width: 50px;
  height: 24px;
  background-color: ${({ theme }) => theme.colors.secondary};
  border-radius: 12px;
  position: relative;
  outline: none;
  cursor: pointer;
  
  &:checked {
    background-color: ${({ theme }) => theme.colors.primary};
  }

  &:before {
    content: '';
    position: absolute;
    width: 20px;
    height: 20px;
    border-radius: 50%;
    background: white;
    transition: transform 0.2s;
    left: 2px;
    top: 2px;
  }

  &:checked:before {
    transform: translateX(26px);
  }
`;

export const UnitContainer = styled.div`
  display: flex;
  align-items: center;
`;

export const UnitLabel = styled.span`
  margin: 0 8px;
  font-weight: bold;
  width: 20px;
`;
