
import React from 'react';
import { Button } from '@/components/ui/button';

interface QuizIntroProps {
  onStart: () => void;
}

const QuizIntro: React.FC<QuizIntroProps> = ({ onStart }) => {
  return (
    <div className="text-center animate-scale-in">
      <h2 className="text-2xl sm:text-3xl font-bold text-quiz-primary mb-2">
        Der Cannabis-Snob-Test
      </h2>
      
      <p className="text-quiz-secondary mb-6">
        Glaubst du, du gehörst zur Cannabis-Königsklasse? Das werden wir sehen. Willkommen beim Weed.de Cannabis-Snob-Test.
      </p>
      
      <Button 
        onClick={onStart}
        className="bg-quiz-accent hover:bg-quiz-highlight text-white transition-all"
      >
        Test starten
      </Button>
    </div>
  );
};

export default QuizIntro;
