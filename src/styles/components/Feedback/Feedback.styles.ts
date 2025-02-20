import styled, { keyframes } from 'styled-components';

/**
 * Styled Components for Feedback Messages
 * @module FeedbackStyles
 */

/**
 * Props interface for feedback container
 */
interface FeedbackContainerProps {
  type: "error" | "info";
}

const slideDown = keyframes`
  from {
    transform: translate(-50%, -100%);
  }
  to {
    transform: translate(-50%, 0);
  }
`;

/**
 * Feedback message container with conditional styling
 */
export const FeedbackContainer = styled.div<FeedbackContainerProps>`
  align-items: center;
  animation: ${slideDown} 0.3s ease-out;
  background: ${({ type }) => type === "error" ? "#DC2626" : "#3B82F6"};
  border-radius: 4px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
  color: white;
  display: flex;
  font-size: 1.1rem;
  font-weight: 500;
  gap: 12px;
  justify-content: space-between;
  left: 50%;
  margin-top: 24px;
  max-width: 700px;
  padding: 16px 24px;
  position: fixed;
  top: 0;
  transform: translate(-50%, 0);
  width: calc(100% - 48px);
  z-index: 1000;

  @media (max-width: 768px) {
    font-size: 1rem;
    margin-top: 20px;
    padding: 14px 20px;
    width: calc(100% - 40px);
  }

  @media (max-width: 480px) {
    margin-top: 16px;
    padding: 12px 16px;
    width: calc(100% - 32px);
  }

  span {
    flex: 1;
  }
`;

export const CloseButton = styled.button`
  background: none;
  border: none;
  color: white;
  cursor: pointer;
  font-size: 1.4rem;
  opacity: 0.8;
  padding: 4px;

  &:hover {
    opacity: 1;
  }
`; 