
import React from 'react';
import { Button } from '@/components/ui/button';
import { Cannabis } from 'lucide-react';

interface QuizIntroProps {
  onStart: () => void;
}

const QuizIntro: React.FC<QuizIntroProps> = ({ onStart }) => {
  return (
    <div className="text-center animate-scale-in">
      <h2 className="text-2xl sm:text-3xl font-bold text-[#1a2e35] dark:text-white mb-6">
        Der Cannabis-Snob-Test
      </h2>
      
      <p className="text-gray-600 dark:text-gray-300 mb-8 max-w-md mx-auto">
        Glaubst du, du gehörst zur Cannabis-Königsklasse? Das werden wir sehen. Willkommen beim Weed.de Cannabis-Snob-Test.
      </p>
      
      <Button 
        onClick={onStart}
        className="bg-[#496e5d] hover:bg-[#345c4b] text-white transition-all px-8 py-6 h-auto text-lg rounded-lg flex items-center"
      >
        <Cannabis className="mr-2 h-5 w-5" />
        Test starten
      </Button>
    </div>
  );
};

export default QuizIntro;
