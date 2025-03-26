
import React, { useState } from 'react';
import CannabisQuiz from '@/components/CannabisQuiz/CannabisQuiz';

const Index = () => {
  const [showQuiz, setShowQuiz] = useState(false);
  
  const handleImageClick = () => {
    setShowQuiz(true);
  };
  
  return (
    <div className="min-h-screen flex flex-col items-center bg-white px-4 py-6">
      {!showQuiz ? (
        <img 
          src="/lovable-uploads/ec67627e-e66f-4239-80e1-2e1be7b1ef7d.png" 
          alt="Cannabis Snob Quiz" 
          onClick={handleImageClick}
          className="w-full max-w-2xl cursor-pointer hover:opacity-95 transition-opacity rounded-lg shadow-md"
        />
      ) : (
        <div className="w-full max-w-xl mb-8 flex flex-col items-center">
          <CannabisQuiz />
          
          <footer className="mt-8 flex flex-col items-center gap-2">
            <p className="text-sm text-quiz-secondary">
              Designed with precision for cannabis connoisseurs.
            </p>
            <a 
              href="https://weed.de" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="flex items-center gap-2 text-weed-green hover:text-weed-dark-green transition-colors"
            >
              <img 
                src="https://www.weed.de/_next/image?url=%2Fimages%2Flogo%2FweedLogoWhite.png&w=520&q=75" 
                alt="Weed.de Logo" 
                className="h-6" 
              />
              <span className="font-weed font-medium">Powered by Weed!</span>
            </a>
          </footer>
        </div>
      )}
    </div>
  );
};

export default Index;
