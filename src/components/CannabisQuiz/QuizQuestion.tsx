
import React, { useState } from 'react';
import { QuizQuestion as QuizQuestionType } from './quizData';
import QuizOption from './QuizOption';
import { useToast } from '@/hooks/use-toast';
import { useIsMobile } from '@/hooks/use-mobile';

interface QuizQuestionProps {
  question: QuizQuestionType;
  onAnswer: (questionId: string, optionId: string, isCorrect: boolean) => void;
}

const QuizQuestion: React.FC<QuizQuestionProps> = ({ question, onAnswer }) => {
  const [selectedOption, setSelectedOption] = useState<string | null>(null);
  const { toast } = useToast();
  const isMobile = useIsMobile();
  
  const handleOptionSelect = (optionId: string, isCorrect: boolean) => {
    setSelectedOption(optionId);
    
    // Display feedback toast
    const feedbackText = isCorrect 
      ? question.feedbackCorrect 
      : question.feedbackIncorrect;
    
    toast({
      title: feedbackText,
      duration: 1500,
    });
    
    // Delay proceeding to next question
    setTimeout(() => {
      onAnswer(question.id, optionId, isCorrect);
      setSelectedOption(null); // Reset for next question
    }, 1200);
  };
  
  return (
    <div className="animate-fade-in">
      <h2 className="text-xl sm:text-2xl font-bold text-quiz-primary mb-6 break-words">
        {question.question}
      </h2>
      <div className="space-y-3">
        {question.options.map((option) => (
          <QuizOption
            key={option.id}
            option={option}
            isSelected={selectedOption === option.id}
            isDisabled={selectedOption !== null}
            onSelect={() => handleOptionSelect(option.id, option.isCorrect)}
          />
        ))}
      </div>
    </div>
  );
};

export default QuizQuestion;
