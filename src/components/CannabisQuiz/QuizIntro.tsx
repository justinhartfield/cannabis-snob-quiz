
import React from 'react';
import { Button } from '@/components/ui/button';

interface QuizIntroProps {
  onStart: () => void;
}

const QuizIntro: React.FC<QuizIntroProps> = ({ onStart }) => {
  return (
    <div className="text-center animate-scale-in py-10">
      <h2 className="text-2xl sm:text-3xl font-bold text-quiz-primary mb-2">
        Der Cannabis-Snob-Test
      </h2>
      
      <p className="text-quiz-secondary mb-6">
        Glaubst du, du gehörst zur Cannabis-Königsklasse? Das werden wir sehen. Willkommen beim Weed.de Cannabis-Snob-Test.
      </p>
      
      <Button 
        onClick={onStart}
        className="bg-[#2c5623] hover:bg-[#224519] text-white text-lg py-6 px-10 rounded-full transition-all shadow-md"
      >
        Start Quiz
      </Button>
    </div>
  );
};

export default QuizIntro;
