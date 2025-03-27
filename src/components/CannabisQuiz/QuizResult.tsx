
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

// Reliable direct links to GIFs with more stable hosting
const lowScoreGifs = [
  "/lovable-uploads/993e06a7-5b70-4ffa-a81a-69448a5239ac.png", // Using the uploaded fallback image
  "https://c.tenor.com/z5RLMmRxVzYAAAAd/baby-yoda-yoda.gif",
  "https://i.imgur.com/Sw2wTd7.gif",
];

const mediumScoreGifs = [
  "/lovable-uploads/993e06a7-5b70-4ffa-a81a-69448a5239ac.png", // Using the uploaded fallback image
  "https://i.imgur.com/xvIYn1D.gif",
  "https://i.imgur.com/jqg9EKT.gif",
];

const highScoreGifs = [
  "/lovable-uploads/993e06a7-5b70-4ffa-a81a-69448a5239ac.png", // Using the uploaded fallback image
  "https://i.imgur.com/E8Moh3h.gif",
  "https://i.imgur.com/yNvYI8F.gif",
];

// Guaranteed fallback image from the project
const FALLBACK_IMAGE = "/lovable-uploads/b82e779f-a705-4173-9aaf-efd7add99b2a.png";

const QuizResult: React.FC<QuizResultProps> = ({
  result,
  score,
  totalQuestions,
  onRestart,
}) => {
  const circleRef = useRef<SVGCircleElement>(null);
  const percentage = Math.round((score / totalQuestions) * 100);
  const [copied, setCopied] = useState(false);
  const [gifUrl, setGifUrl] = useState<string>(FALLBACK_IMAGE);
  const [gifLoaded, setGifLoaded] = useState(false);
  const couponCode = "CANNABISNOB50";
  
  // Initialize and load GIF
  useEffect(() => {
    // Select appropriate GIF category based on score
    const gifCategory = percentage < 33 
      ? lowScoreGifs 
      : percentage < 66 
        ? mediumScoreGifs 
        : highScoreGifs;
    
    // Start with the first GIF in the appropriate category
    const initialGif = gifCategory[0];
    setGifUrl(initialGif);
    
    // Preload the gif
    const img = new Image();
    img.onload = () => {
      setGifLoaded(true);
    };
    img.onerror = () => {
      console.error("Failed to load initial GIF, trying fallback...");
      setGifUrl(FALLBACK_IMAGE);
    };
    img.src = initialGif;
  }, [percentage]);

  useEffect(() => {
    if (circleRef.current) {
      const scoreOffset = 100 - percentage;
      circleRef.current.style.setProperty('--score-offset', `${scoreOffset}`);
    }
  }, [percentage]);

  const handleCopyCode = () => {
    navigator.clipboard.writeText(couponCode);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

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
      
      {/* GIF Display with proper fallback handling */}
      <div className="mb-6 flex justify-center">
        <img 
          src={gifLoaded ? gifUrl : FALLBACK_IMAGE}
          alt="Result reaction" 
          className="rounded-lg w-full max-w-sm shadow-md animate-fade-in"
          style={{ minHeight: "200px", objectFit: "cover" }}
          onError={(e) => {
            console.error("Image failed to load, using fallback");
            const target = e.target as HTMLImageElement;
            target.src = FALLBACK_IMAGE;
            setGifLoaded(true); // Prevent error loop
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
