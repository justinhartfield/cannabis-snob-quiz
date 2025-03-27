
import React, { useEffect, useRef, useState } from 'react';
import { QuizResult as QuizResultType } from './quizData';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Check, Copy } from 'lucide-react';
import ShareOnSocial from './ShareOnSocial';

interface QuizResultProps {
  result: QuizResultType;
  score: number;
  totalQuestions: number;
  onRestart: () => void;
}

// Fun GIFs for each score category - updated with reliable and direct Giphy links
const lowScoreGifs = [
  "https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExZXdyZWFmN2ZweXN5dzM2dTEwbmhiaG43OGxnbGZzNGlweWoyZmtsMiZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/WJjLyXCVvro2I/giphy.gif",
  "https://media.giphy.com/media/3o7TKqnN349PBUtGFO/giphy.gif",
  "https://media.giphy.com/media/xT5LMUnO4g3ySm3wjK/giphy.gif",
];

const mediumScoreGifs = [
  "https://media.giphy.com/media/l4FGnnlIwVYIgunDy/giphy.gif",
  "https://media.giphy.com/media/7rj2ZgttvgomY/giphy.gif",
  "https://media.giphy.com/media/xUOxf7IfQeahXbsNUc/giphy.gif",
];

const highScoreGifs = [
  "https://media.giphy.com/media/jJQC2puVZpTMO4vGs0/giphy.gif",
  "https://media.giphy.com/media/ZWbeEcbeo0cKI/giphy.gif",
  "https://media.giphy.com/media/3otPoUjcQZUkpJyHwk/giphy.gif",
];

const QuizResult: React.FC<QuizResultProps> = ({
  result,
  score,
  totalQuestions,
  onRestart,
}) => {
  const circleRef = useRef<SVGCircleElement>(null);
  const percentage = Math.round((score / totalQuestions) * 100);
  const [copied, setCopied] = useState(false);
  const [gifLoaded, setGifLoaded] = useState(false);
  const couponCode = "CANNABISNOB50";
  
  // Select a random GIF based on score category
  const getRandomGif = () => {
    if (percentage < 33) {
      return lowScoreGifs[Math.floor(Math.random() * lowScoreGifs.length)];
    } else if (percentage < 66) {
      return mediumScoreGifs[Math.floor(Math.random() * mediumScoreGifs.length)];
    } else {
      return highScoreGifs[Math.floor(Math.random() * highScoreGifs.length)];
    }
  };
  
  // Save the selected GIF URL in state to prevent re-renders from changing it
  const [randomGif] = useState(getRandomGif());

  useEffect(() => {
    if (circleRef.current) {
      const scoreOffset = 100 - percentage;
      circleRef.current.style.setProperty('--score-offset', `${scoreOffset}`);
    }
    
    // Preload the GIF to ensure it displays properly
    const img = new Image();
    img.onload = () => setGifLoaded(true);
    img.onerror = () => {
      console.error("Failed to load GIF:", randomGif);
      // If GIF fails to load, try loading a fallback
      setGifLoaded(false);
    };
    img.src = randomGif;
  }, [percentage, randomGif]);

  const handleCopyCode = () => {
    navigator.clipboard.writeText(couponCode);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };
  
  // Fallback image if GIF fails to load
  const fallbackImage = "/lovable-uploads/b82e779f-a705-4173-9aaf-efd7add99b2a.png";

  return (
    <div className="text-center animate-scale-in">
      <div className="mb-6 flex justify-center">
        <div className="relative w-40 h-40">
          <svg className="w-full h-full" viewBox="0 0 100 100">
            <circle
              className="quiz-score-circle"
              cx="50"
              cy="50"
              r="47"
              stroke="#e6e8ec"
            />
            <circle
              ref={circleRef}
              className="quiz-score-circle animate-score-circle"
              cx="50"
              cy="50"
              r="47"
              stroke={
                percentage < 33 ? "#ef4444" : 
                percentage < 66 ? "#f59e0b" : 
                "#10b981"
              }
            />
          </svg>
          <div className="absolute inset-0 flex items-center justify-center">
            <div>
              <div className="text-3xl font-bold text-quiz-primary">
                {score}/{totalQuestions}
              </div>
              <div className="text-sm text-quiz-secondary">Punkte</div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Animated GIF based on score with fallback */}
      <div className="mb-6 flex justify-center">
        <img 
          src={gifLoaded ? randomGif : fallbackImage} 
          alt="Result reaction" 
          className="rounded-lg w-full max-w-sm shadow-md animate-fade-in"
          onError={(e) => {
            // Set a fallback if the image fails to load
            const target = e.target as HTMLImageElement;
            console.log("Image failed to load, using fallback");
            target.src = fallbackImage;
          }}
        />
      </div>

      <h2 className="text-2xl font-bold text-quiz-primary mb-2">
        {result.title}
      </h2>
      
      <p className="text-quiz-secondary mb-6">
        {result.description}
      </p>
      
      {/* Share your result section */}
      <ShareOnSocial 
        result={{
          title: result.title,
          score: score,
          totalQuestions: totalQuestions
        }} 
        isQuizComplete={true} 
      />
      
      {/* Coupon Code Section */}
      <div className="mb-8 p-4 bg-gradient-to-r from-green-100 to-green-50 rounded-lg shadow-sm">
        <h3 className="text-lg font-bold text-green-800 mb-2">Dein Cannabis Experten Rabatt</h3>
        <p className="text-sm text-green-700 mb-3">Sichere dir 50% Rabatt auf dein nächstes Rezept bei WEED.de</p>
        
        <div className="flex gap-2">
          <Input
            value={couponCode}
            readOnly
            className="text-center font-mono font-bold text-green-800 bg-white border-green-300"
          />
          <Button
            onClick={handleCopyCode}
            className="bg-green-600 hover:bg-green-700 text-white"
            size="icon"
            type="button"
          >
            {copied ? <Check className="h-4 w-4" /> : <Copy className="h-4 w-4" />}
          </Button>
        </div>
      </div>
      
      <Button 
        onClick={onRestart}
        className="bg-quiz-accent hover:bg-quiz-highlight text-white transition-all"
      >
        Test wiederholen
      </Button>
    </div>
  );
};

export default QuizResult;
