
import React from 'react';
import { Check, X } from 'lucide-react';
import { cn } from '@/lib/utils';
import { QuizOption as QuizOptionType } from './quizData';

interface QuizOptionProps {
  option: QuizOptionType;
  isSelected: boolean;
  isRevealed: boolean;
  onSelect: (optionId: string) => void;
}

const QuizOption: React.FC<QuizOptionProps> = ({
  option,
  isSelected,
  isRevealed,
  onSelect,
}) => {
  const getOptionClass = () => {
    let className = 'quiz-option';
    
    if (isSelected) {
      className = cn(className, 'selected');
    }
    
    if (isRevealed) {
      if (option.isCorrect) {
        className = cn(className, 'correct');
      } else if (isSelected && !option.isCorrect) {
        className = cn(className, 'incorrect');
      }
    }
    
    return className;
  };

  return (
    <div
      className={getOptionClass()}
      onClick={() => !isRevealed && onSelect(option.id)}
    >
      <div className="flex items-center justify-between w-full">
        <span className="text-sm sm:text-base">{option.text}</span>
        {isRevealed && (
          <div className="ml-2 flex-shrink-0">
            {option.isCorrect ? (
              <Check className="h-5 w-5 text-green-500" />
            ) : (
              isSelected && <X className="h-5 w-5 text-red-500" />
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default QuizOption;
