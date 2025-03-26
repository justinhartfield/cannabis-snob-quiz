
import React, { useState } from 'react';
import { QuizQuestion as QuizQuestionType } from './quizData';
import QuizOption from './QuizOption';
import { Button } from '@/components/ui/button';

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
      <h3 className="text-xl sm:text-2xl font-medium text-quiz-primary mb-4">
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
        <div className="text-sm italic text-quiz-secondary mb-4 animate-fade-in">
          {feedback}
        </div>
      )}
      
      {selectedOptionId !== null && !isRevealed && (
        <Button
          className="w-full transition-all bg-quiz-accent hover:bg-quiz-highlight text-white"
          onClick={handleSubmit}
        >
          Weiter
        </Button>
      )}
    </div>
  );
};

export default QuizQuestion;
