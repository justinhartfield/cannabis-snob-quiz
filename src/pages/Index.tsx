
import React, { useState } from 'react';
import CannabisQuiz from '@/components/CannabisQuiz/CannabisQuiz';
import NewsletterCTA from '@/components/NewsletterCTA';

const Index = () => {
  const [showQuiz, setShowQuiz] = useState(false);
  
  const handleImageClick = () => {
    setShowQuiz(true);
  };
  
  return (
    <div className="min-h-screen flex flex-col items-center bg-white px-4 py-6">
      {!showQuiz ? (
        <div className="flex flex-col items-center w-full">
          <img 
            src="/lovable-uploads/ec67627e-e66f-4239-80e1-2e1be7b1ef7d.png" 
            alt="Cannabis Snob Quiz" 
            onClick={handleImageClick}
            className="w-full max-w-2xl cursor-pointer hover:opacity-95 transition-opacity rounded-lg shadow-md mb-4"
          />
          
          {/* Added Weed logo with text below the main image */}
          <div className="mt-4 mb-8">
            <img 
              src="https://www.weed.de/_next/image?url=%2Fimages%2Flogo%2FweedLogoWithText.png&w=520&q=75" 
              alt="Weed.de Full Logo" 
              className="h-10 sm:h-12" 
            />
          </div>
        </div>
      ) : (
        <div className="w-full max-w-xl mb-8 flex flex-col items-center">
          <CannabisQuiz />
          
          <NewsletterCTA />
          
          <footer className="mt-4 flex flex-col items-center gap-2">
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
            
            {/* New Weed logo with text below the footer */}
            <div className="mt-4">
              <img 
                src="https://www.weed.de/_next/image?url=%2Fimages%2Flogo%2FweedLogoWithText.png&w=520&q=75" 
                alt="Weed.de Full Logo" 
                className="h-10 sm:h-12" 
              />
            </div>
          </footer>
        </div>
      )}
    </div>
  );
};

export default Index;
