
import React, { useState, useEffect } from 'react';

// GIF arrays moved from QuizResult to this component
const lowScoreGifs = [
  "https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExZXdyZWFmN2ZweXN5dzM2dTEwbmhiaG43OGxnbGZzNGlweWoyZmtsMiZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/WJjLyXCVvro2I/giphy.gif",
  "https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExbGk3ajN2bzV2ejJ4cDU0YzZiZjF0Nnlid2F6Nzl4MnVmN3l3NG1qOCZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/3o7TKqnN349PBUtGFO/giphy.gif",
  "https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExcm0zdWVmMjYzaG42YzZkZDV2aDRuMWxja3RzcnB2bnJiNnQ2eHk3biZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/xT5LMUnO4g3ySm3wjK/giphy.gif",
];

const mediumScoreGifs = [
  "https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExZWVrZmN0Mmt6ZW1xZHd2NmRhMHNnZjJvOTVhbWdkN3VmbGk5aGEwZiZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/l4FGnnlIwVYIgunDy/giphy.gif",
  "https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExYmM5bXY5czEwdmF1Z244YzcwNGxhcWdmbm1qMnlmeDdrZml2c2dneiZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/7rj2ZgttvgomY/giphy.gif",
  "https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExbjB0Z3QxOWdtZWIwZzg5NGUwZGZuZnB4azZ1ZXdqNHJ5MGJrNDdrbCZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/xUOxf7IfQeahXbsNUc/giphy.gif",
];

const highScoreGifs = [
  "https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExNThrN3kwdjAwNGhuYmR0MDk0bjA0YnY2eXpkMGM3Mmp1cW4yYmpsdCZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/jJQC2puVZpTMO4vGs0/giphy.gif",
  "https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExenducWxndXUwdXU1Y2NhcmQ1YTQweGt5czV6cnh0Z3Fsb2RtamdxbixlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/ZWbeEcbeo0cKI/giphy.gif",
  "https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExemRsMXB1Mnk3aGxtYmxreWpqdHU5czlodDRvbGthcG11Y2RzZ2RmNiZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/3otPoUjcQZUkpJyHwk/giphy.gif",
];

const fallbackImage = "https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExNm9oNjR5emYwOG1pOXZxdXVxZjh5OTN3NXl0dW1qZW14dDlqdjM1cyZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/9J7tdYltWyXIY/giphy.gif";

interface ResultAnimationProps {
  percentage: number;
}

const ResultAnimation: React.FC<ResultAnimationProps> = ({ percentage }) => {
  const [gifLoaded, setGifLoaded] = useState(false);
  const [gifError, setGifError] = useState(false);
  
  const getRandomGif = () => {
    try {
      if (percentage < 33) {
        return lowScoreGifs[Math.floor(Math.random() * lowScoreGifs.length)];
      } else if (percentage < 66) {
        return mediumScoreGifs[Math.floor(Math.random() * mediumScoreGifs.length)];
      } else {
        return highScoreGifs[Math.floor(Math.random() * highScoreGifs.length)];
      }
    } catch (error) {
      console.error("Error selecting GIF:", error);
      return fallbackImage;
    }
  };
  
  const randomGif = getRandomGif();

  useEffect(() => {
    const img = new Image();
    img.onload = () => setGifLoaded(true);
    img.onerror = () => {
      console.error("Failed to load GIF:", randomGif);
      setGifError(true);
    };
    img.src = randomGif;
  }, [randomGif]);

  return (
    <div className="mb-6 flex justify-center">
      {gifError ? (
        <img 
          src={fallbackImage} 
          alt="Result reaction" 
          className="rounded-lg w-full max-w-sm shadow-md animate-fade-in"
          onError={(e) => {
            const target = e.target as HTMLImageElement;
            target.style.display = 'none';
          }}
        />
      ) : (
        <img 
          src={randomGif} 
          alt="Result reaction" 
          className="rounded-lg w-full max-w-sm shadow-md animate-fade-in"
          onError={(e) => {
            console.error("GIF failed to load, using fallback");
            setGifError(true);
            const target = e.target as HTMLImageElement;
            target.src = fallbackImage;
          }}
        />
      )}
    </div>
  );
};

export default ResultAnimation;
