
import React, { useState } from 'react';
import { QuizQuestion as QuizQuestionType } from './quizData';
import QuizOption from './QuizOption';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';

interface QuizQuestionProps {
  question: QuizQuestionType;
  onAnswer: (questionId: string, selectedOptionId: string, isCorrect: boolean) => void;
}

const QuizQuestion: React.FC<QuizQuestionProps> = ({ question, onAnswer }) => {
  const [selectedOptionId, setSelectedOptionId] = useState<string | null>(null);
  const [isRevealed, setIsRevealed] = useState(false);
  const [feedback, setFeedback] = useState<string | null>(null);

  const handleOptionSelect = (optionId: string) => {
    if (isRevealed) return;
    setSelectedOptionId(optionId);
  };

  const handleSubmit = () => {
    if (!selectedOptionId) return;
    
    const selectedOption = question.options.find(option => option.id === selectedOptionId);
    if (!selectedOption) return;
    
    setIsRevealed(true);
    setFeedback(
      selectedOption.isCorrect 
        ? question.feedbackCorrect 
        : question.feedbackIncorrect
    );
    
    setTimeout(() => {
      onAnswer(question.id, selectedOptionId, selectedOption.isCorrect);
    }, 1500);
  };

  return (
    <div className="animate-fade-in">
      <h3 className="text-xl sm:text-2xl font-medium text-[#1a2e35] dark:text-white mb-6">
        {question.question}
      </h3>
      
      <div className="space-y-3 mb-6">
        {question.options.map((option) => (
          <QuizOption
            key={option.id}
            option={option}
            isSelected={selectedOptionId === option.id}
            isRevealed={isRevealed}
            onSelect={handleOptionSelect}
          />
        ))}
      </div>
      
      {feedback && (
        <div className="p-4 rounded-lg bg-[#f0f5f3] dark:bg-gray-700 text-[#1a2e35] dark:text-gray-200 mb-6 animate-fade-in">
          {feedback}
        </div>
      )}
      
      {!isRevealed && (
        <Button
          className="w-full transition-all bg-[#496e5d] hover:bg-[#345c4b] text-white rounded-lg py-5 h-auto"
          disabled={!selectedOptionId}
          onClick={handleSubmit}
        >
          Weiter
          <ArrowRight className="ml-2 h-5 w-5" />
        </Button>
      )}
    </div>
  );
};

export default QuizQuestion;
