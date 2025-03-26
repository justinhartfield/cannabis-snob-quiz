
import React from 'react';
import { QuizOption as QuizOptionType } from './quizData';

interface QuizOptionProps {
  option: QuizOptionType;
  onSelect: () => void;
  isSelected?: boolean;
  isDisabled?: boolean;
}

const QuizOption: React.FC<QuizOptionProps> = ({ 
  option, 
  onSelect, 
  isSelected = false, 
  isDisabled = false 
}) => {
  return (
    <button 
      className={`quiz-option w-full text-left transition-all ${
        isSelected ? 'bg-quiz-accent text-white' : ''
      }`}
      onClick={onSelect}
      disabled={isDisabled}
    >
      <div className="w-full break-words">
        {option.text}
      </div>
    </button>
  );
};

export default QuizOption;
