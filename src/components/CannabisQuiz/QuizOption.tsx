
import React from 'react';
import { QuizOption as QuizOptionType } from './quizData';
import { Check, X } from 'lucide-react';

interface QuizOptionProps {
  option: QuizOptionType;
  onSelect: () => void;
  isSelected?: boolean;
  isDisabled?: boolean;
  showFeedback?: boolean;
}

const QuizOption: React.FC<QuizOptionProps> = ({ 
  option, 
  onSelect, 
  isSelected = false, 
  isDisabled = false,
  showFeedback = false
}) => {
  // Determine the styling based on selection and correctness
  const getButtonClass = () => {
    if (!showFeedback) {
      return isSelected ? 'bg-quiz-accent text-white' : '';
    }
    
    if (option.isCorrect) {
      return 'correct border-weed-green bg-weed-light-green/40 dark:bg-green-900/20';
    }
    
    if (isSelected && !option.isCorrect) {
      return 'incorrect border-red-500 bg-red-50 dark:bg-red-900/20';
    }
    
    return '';
  };
  
  return (
    <button 
      className={`quiz-option w-full text-left transition-all flex items-center ${getButtonClass()}`}
      onClick={onSelect}
      disabled={isDisabled}
    >
      {showFeedback && (
        <div className="flex-shrink-0 mr-2">
          {option.isCorrect ? (
            <Check className="h-5 w-5 text-weed-green" />
          ) : (
            isSelected && <X className="h-5 w-5 text-red-500" />
          )}
        </div>
      )}
      <div className="w-full break-words">
        {option.text}
      </div>
    </button>
  );
};

export default QuizOption;
