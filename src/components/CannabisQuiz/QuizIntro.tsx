
import React from 'react';
import { Button } from '@/components/ui/button';

interface QuizIntroProps {
  onStart: () => void;
}

const QuizIntro: React.FC<QuizIntroProps> = ({ onStart }) => {
  return (
    <div className="w-full h-screen">
      <img 
        src="/lovable-uploads/7eb64c3a-ba32-4b30-9070-b65886e7ed12.png" 
        alt="Cannabis Quiz" 
        className="w-full h-full object-contain"
        onClick={onStart}
      />
    </div>
  );
};

export default QuizIntro;
