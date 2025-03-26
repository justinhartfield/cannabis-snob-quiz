
import React from 'react';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';

interface QuizIntroProps {
  onStart: () => void;
}

const QuizIntro: React.FC<QuizIntroProps> = ({ onStart }) => {
  return (
    <Button 
      onClick={onStart}
      className="w-full md:w-auto bg-black hover:bg-gray-800 text-white font-medium rounded-full px-6 py-3 transition-all flex items-center justify-center gap-2"
    >
      Test starten
      <ArrowRight className="w-4 h-4" />
    </Button>
  );
};

export default QuizIntro;
