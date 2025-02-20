import React from 'react';
import { FeedbackContainer, CloseButton } from '../../styles/components/Feedback/Feedback.styles';

/**
 * Feedback Component Props
 * 
 * @interface FeedbackProps
 */
interface FeedbackProps {
  type: "error" | "info";
  message: string;
  onClose?: () => void;
}

/**
 * Feedback Component
 * 
 * Displays a feedback message with optional close button
 * 
 * @param {FeedbackProps} props - Component props
 * @returns {React.ReactElement} Feedback component
 */
const Feedback: React.FC<FeedbackProps> = ({ type, message, onClose }) => {
  return (
    <FeedbackContainer type={type}>
      <span role="alert">{message}</span>
      {onClose && (
        <CloseButton onClick={onClose} aria-label="Close">
          ×
        </CloseButton>
      )}
    </FeedbackContainer>
  );
};

export default Feedback; 