
import React from 'react';
import { Button } from '@/components/ui/button';

interface QuizIntroProps {
  onStart: () => void;
}

const QuizIntro: React.FC<QuizIntroProps> = ({ onStart }) => {
  return (
    <Button 
      onClick={onStart}
      className="w-full bg-quiz-accent hover:bg-quiz-highlight text-white transition-all"
    >
      Test starten
    </Button>
  );
};

export default QuizIntro;
