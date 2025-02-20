import styled from "styled-components";

/**
 * Styled Components for Weather Search
 * @module WeatherSearchStyles
 */

export const SearchContainer = styled.div`
  width: 100%;
  max-width: 800px;
  margin: 0 auto;
  padding: 1rem;

  @media (max-width: 768px) {
    padding: 0.5rem;
    max-width: 100%; 
  }
`;

export const InputWrapper = styled.div`
  display: flex;
  gap: 1rem;
  width: 100%;
  min-width: 100%;

  @media (max-width: 768px) {
    flex-direction: column;
    gap: 0.5rem;
    width: 100vw;
    max-width: 85vw;
    margin: 0;
    padding: 0;
  }
`;

export const FormContent = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

export const SearchInput = styled.input`
  flex: 1;
  padding: 0.75rem 1rem;
  border: 1px solid ${({ theme }) => theme.colors.border};
  border-radius: 4px;
  font-size: 1.2rem;
  width: 100%;
  box-sizing: border-box;

  &:focus {
    outline: none;
    border-color: ${({ theme }) => theme.colors.primary};
  }

  @media (max-width: 768px) {
    font-size: 1rem;
    min-width: 100%;
  }

  @media (max-width: 480px) {
    width: 100%;
    font-size: 1.1rem;
  }
`;

const ButtonBase = styled.button`
  padding: 0.75rem 1.5rem;
  background-color: ${({ theme }) => theme.colors.secondary};
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  font-weight: bold;
  font-size: 1.2rem;
  width: auto;
  box-sizing: border-box; 

  &:hover {
    background-color: ${({ theme }) => theme.colors.secondaryDark};
  }

  &:disabled {
    background-color: ${({ theme }) => theme.colors.disabled};
    cursor: not-allowed;
  }

  @media (max-width: 768px) {
    width: 100%;
    padding: 0.8rem 1.5rem;
    font-size: 1rem;
    min-width: 100%;
  }

  @media (max-width: 480px) {
    width: 100%;
    padding: 0.8rem 1.5rem;
    font-size: 1.1rem;
  }
`;

export const SearchButton = styled(ButtonBase)`
  flex-shrink: 0;
`;

export const ErrorMessage = styled.div`
  color: ${({ theme }) => theme.colors.error};
  font-size: 1rem;

  @media (max-width: 768px) {
    font-size: 0.9rem;
  }

  @media (max-width: 480px) {
    font-size: 0.9rem;
    word-break: break-word;
  }
`;

export const ErrorMessageContainer = styled.div`
  min-height: 24px;
  width: 100%;
  margin-top: 0.5rem;
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

  @media (max-width: 768px) {
    width: 40px;
    height: 20px;
  }

  @media (max-width: 480px) {
    width: 50px;
    height: 24px;
  }
`;

export const UnitContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  white-space: nowrap;

  @media (max-width: 768px) {
    margin-top: 0.5rem;
    justify-content: center;
  }
`;

export const UnitLabel = styled.span`
  margin: 0 8px;
  font-weight: bold;
  width: 20px;

  @media (max-width: 768px) {
    margin: 4px 8px;
  }
`;
