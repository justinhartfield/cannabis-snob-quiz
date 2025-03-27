
import React, { useState } from 'react';
import CannabisQuiz from '@/components/CannabisQuiz/CannabisQuiz';
import NewsletterCTA from '@/components/NewsletterCTA';
import { Home } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Index = () => {
  const [showQuiz, setShowQuiz] = useState(false);
  
  const handleImageClick = () => {
    setShowQuiz(true);
  };
  
  const handleHomeClick = () => {
    setShowQuiz(false);
  };
  
  return (
    <div className="min-h-screen flex flex-col items-center bg-white px-4 py-6">
      {/* Weed.de logo at the very top */}
      <div className="w-full flex justify-center mb-6">
        <a 
          href="https://weed.de" 
          target="_blank" 
          rel="noopener noreferrer"
        >
          <img 
            src="https://www.weed.de/_next/image?url=%2Fimages%2Flogo%2FweedLogoWithText.png&w=520&q=75" 
            alt="Weed.de Full Logo" 
            className="h-10 sm:h-12 hover:opacity-90 transition-opacity" 
          />
        </a>
      </div>

      {/* Persistent home button - fixed at bottom right */}
      {showQuiz && (
        <Button
          variant="outline"
          size="icon"
          className="fixed bottom-4 right-4 z-50 rounded-full shadow-md bg-white hover:bg-weed-light-green"
          onClick={handleHomeClick}
          aria-label="Go to home"
        >
          <Home className="h-5 w-5 text-weed-green" />
        </Button>
      )}

      {!showQuiz ? (
        <div className="flex flex-col items-center w-full">
          <img 
            src="/lovable-uploads/ec67627e-e66f-4239-80e1-2e1be7b1ef7d.png" 
            alt="Cannabis Snob Quiz" 
            onClick={handleImageClick}
            className="w-full max-w-2xl cursor-pointer hover:opacity-95 transition-opacity rounded-lg shadow-md mb-4"
          />
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
          </footer>
        </div>
      )}
    </div>
  );
};

export default Index;
