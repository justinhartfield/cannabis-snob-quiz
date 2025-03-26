
import React from 'react';
import CannabisQuiz from '@/components/CannabisQuiz/CannabisQuiz';

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col items-center bg-[#f2fce2] dark:from-gray-900 dark:to-gray-800 px-4 py-12">
      <div className="absolute top-5 left-5">
        <img 
          src="/lovable-uploads/52535607-07ec-41dc-8adf-cd16ec9365d0.png" 
          alt="Cannabis Leaf" 
          className="h-10 w-10"
        />
      </div>
      
      <header className="mb-8 text-center max-w-3xl">
        <h1 className="text-5xl sm:text-6xl font-bold text-[#2c5623] mb-4">
          Bist du ein<br />Cannabis-Snob?
        </h1>
        <p className="text-xl text-[#2c5623] mb-2">
          Mach den Test und finde es Heraus!
        </p>
      </header>
      
      <main className="w-full max-w-xl mb-8 relative">
        <div className="absolute -z-10 bottom-0 left-0 right-0 overflow-hidden">
          <img 
            src="/lovable-uploads/52535607-07ec-41dc-8adf-cd16ec9365d0.png" 
            alt="Cannabis Illustration" 
            className="w-full"
          />
        </div>
        <CannabisQuiz />
      </main>
      
      <footer className="text-center mt-auto pt-8 flex flex-col items-center gap-2">
        <p className="text-sm text-[#2c5623]">
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
  );
};

export default Index;
