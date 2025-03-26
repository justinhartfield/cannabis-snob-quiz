
import React, { useState, useEffect } from 'react';
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
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Reset state when question changes
  useEffect(() => {
    setSelectedOptionId(null);
    setIsRevealed(false);
    setFeedback(null);
    setIsSubmitting(false);
  }, [question.id]);

  const handleOptionSelect = (optionId: string) => {
    if (isRevealed || isSubmitting) return;
    setSelectedOptionId(optionId);
  };

  const handleSubmit = () => {
    if (!selectedOptionId || isSubmitting) return;
    
    setIsSubmitting(true);
    const selectedOption = question.options.find(option => option.id === selectedOptionId);
    if (!selectedOption) {
      setIsSubmitting(false);
      return;
    }
    
    setIsRevealed(true);
    setFeedback(
      selectedOption.isCorrect 
        ? question.feedbackCorrect 
        : question.feedbackIncorrect
    );
    
    // Ensure we only call onAnswer once
    setTimeout(() => {
      onAnswer(question.id, selectedOptionId, selectedOption.isCorrect);
    }, 1500);
  };

  return (
    <div className="animate-fade-in">
      <h3 className="text-xl sm:text-2xl font-semibold text-weed-dark mb-4 font-weed">
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
        <div className="text-sm italic text-weed-gray mb-4 animate-fade-in font-weed">
          {feedback}
        </div>
      )}
      
      {selectedOptionId !== null && !isRevealed && !isSubmitting && (
        <Button
          className="w-full transition-all bg-weed-green hover:bg-weed-dark-green text-white font-weed font-medium"
          onClick={handleSubmit}
        >
          Weiter
        </Button>
      )}
    </div>
  );
};

export default QuizQuestion;
