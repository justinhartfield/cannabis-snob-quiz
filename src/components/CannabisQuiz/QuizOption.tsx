
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
    let className = 'relative flex items-center space-x-3 px-5 py-4 rounded-lg transition-all cursor-pointer border';
    
    if (isSelected) {
      className = cn(className, 'border-[#496e5d] bg-[#f0f5f3] dark:bg-[#2c3e38]');
    } else {
      className = cn(className, 'border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 hover:border-[#6c8d7c] dark:hover:border-[#6c8d7c]');
    }
    
    if (isRevealed) {
      if (option.isCorrect) {
        className = cn(className, 'border-green-500 bg-green-50 dark:bg-green-900/20');
      } else if (isSelected && !option.isCorrect) {
        className = cn(className, 'border-red-500 bg-red-50 dark:bg-red-900/20');
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
        <span className="text-sm sm:text-base text-[#1a2e35] dark:text-gray-200">{option.text}</span>
        {isRevealed && (
          <div className="ml-2 flex-shrink-0">
            {option.isCorrect ? (
              <div className="bg-green-100 dark:bg-green-800/30 p-1 rounded-full">
                <Check className="h-5 w-5 text-green-600 dark:text-green-400" />
              </div>
            ) : (
              isSelected && (
                <div className="bg-red-100 dark:bg-red-800/30 p-1 rounded-full">
                  <X className="h-5 w-5 text-red-600 dark:text-red-400" />
                </div>
              )
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default QuizOption;
