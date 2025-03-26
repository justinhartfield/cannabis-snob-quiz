
import React, { useEffect, useRef, useState } from 'react';
import { QuizResult as QuizResultType } from './quizData';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Check, Copy } from 'lucide-react';

interface QuizResultProps {
  result: QuizResultType;
  score: number;
  totalQuestions: number;
  onRestart: () => void;
}

// Fun GIFs for each score category
const lowScoreGifs = [
  "https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExbXV1bHA5MnA1aGdleXFyZjJnaG8ybzNoeXF5a2lmbmpobmd2MHZ6ciZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/jnQYWZ0T4mkhCmkzcn/giphy.gif",
  "https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExYnRkaW8xMTQ2cGFobHZxeHk0ejlqbXdnNXMxYnRmbDlqbDRsNmx5byZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/3oz8xLd9DJq2l2VFtu/giphy.gif",
  "https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExeWF5MGJqbWxsYnAydjBpZDZ2MXlnNWJjeWFyZm1lYm1icHBjazJvayZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/l0HlDRuNBcCCuBBDO/giphy.gif",
];

const mediumScoreGifs = [
  "https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExMjA3dXVvcHdjOW1tYnoxdDNkNDV2bW9ldnowNzMxcmNicDM0NWp4dSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/kdLyU5mq9mGfKWpIVh/giphy.gif",
  "https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExOHY0a3VvZngzZGlzY3dwaGk4ZXQydnRzYTFxbHczMXhnZDQ1bm1yNSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/RLWwOuPbqObupogOLB/giphy.gif",
  "https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExamFpN3I5YWpvczkzYW40Nm4yM2ZzMXI4aTgxZ2xhNTJnMmJrZTFieiZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/xT5LMRL7KSqp1wZoLm/giphy.gif",
];

const highScoreGifs = [
  "https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExYjVzOWUyOG8ydGs1aDV1c3JtdjZ5dGpvOGZucnB3aXhyYXFsYmNyaCZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/1wX5TF83zc9cTbTQvT/giphy.gif",
  "https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExbjB6YTNmNjc5NDUzZHh6dXJrdWQzOG41eDl1cDQ4aGtvcXZkeDE0aiZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/XreQmk7ETCak0/giphy.gif",
  "https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExMXRoOWRkamdkbWIzMmlzbWZ3c3d6Y24xM3pjeHdvOGUzaDc1dzl5YiZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/W9WSk4tEU1aJW/giphy.gif",
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
  
  const randomGif = getRandomGif();

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
      
      {/* Animated GIF based on score */}
      <div className="mb-6 flex justify-center">
        <img 
          src={randomGif} 
          alt="Result reaction" 
          className="rounded-lg w-full max-w-sm shadow-md animate-fade-in"
        />
      </div>

      <h2 className="text-2xl font-bold text-quiz-primary mb-2">
        {result.title}
      </h2>
      
      <p className="text-quiz-secondary mb-6">
        {result.description}
      </p>
      
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
