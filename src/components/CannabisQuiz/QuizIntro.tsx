
import React from 'react';
import { Button } from '@/components/ui/button';

interface QuizIntroProps {
  onStart: () => void;
}

const QuizIntro: React.FC<QuizIntroProps> = ({ onStart }) => {
  return (
    <div className="relative h-screen flex flex-col items-center justify-between">
      {/* Background Image */}
      <img 
        src="/lovable-uploads/e72b1989-b903-482d-89ef-c5304649d7c0.png" 
        alt="Cannabis Quiz Background" 
        className="absolute inset-0 w-full h-full object-cover z-0"
      />
      
      {/* Content Container */}
      <div className="relative z-10 flex flex-col items-center justify-center h-full w-full max-w-3xl mx-auto px-4">
        {/* Logo in top left */}
        <div className="absolute top-4 left-4">
          <img 
            src="https://www.weed.de/_next/image?url=%2Fimages%2Flogo%2FweedLogoWhite.png&w=520&q=75" 
            alt="Weed.de Logo" 
            className="h-12"
          />
        </div>
        
        {/* Main Title */}
        <div className="text-center mb-10 mt-16">
          <h1 className="text-4xl sm:text-6xl font-bold text-quiz-primary mb-6 leading-tight">
            Bist du ein<br />Cannabis-Snob?
          </h1>
          <p className="text-xl text-quiz-primary mb-6">
            Mach den Test und finde es Heraus!
          </p>
        </div>
        
        {/* Button */}
        <Button 
          onClick={onStart}
          className="bg-quiz-primary hover:bg-green-800 text-white font-medium px-8 py-3 text-lg rounded-full transition-all"
        >
          Start Quiz
        </Button>
      </div>
      
      {/* Footer */}
      <div className="relative z-10 w-full bg-quiz-primary py-4">
        <div className="container mx-auto px-4">
          <p className="text-white text-left">About</p>
        </div>
      </div>
    </div>
  );
};

export default QuizIntro;
