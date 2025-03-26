
import React from 'react';
import CannabisQuiz from '@/components/CannabisQuiz/CannabisQuiz';

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col items-center bg-gradient-to-b from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800 px-4 py-12">
      <header className="mb-8 text-center max-w-2xl">
        <h1 className="text-3xl sm:text-4xl font-bold text-quiz-primary mb-4">
          Cannabis-Snob-Quiz Widget
        </h1>
        <p className="text-quiz-secondary">
          Ein elegantes, einbettbares Quiz-Widget, das du auf deiner Website verwenden kannst, 
          um herauszufinden, ob deine Besucher echte Cannabis-Kenner sind.
        </p>
      </header>
      
      <main className="w-full max-w-xl mb-8">
        <CannabisQuiz />
      </main>
      
      <footer className="text-center mt-auto pt-8 flex flex-col items-center gap-2">
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
            src="https://i.imgur.com/C4R4h3Z.png" 
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
