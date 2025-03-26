
import React, { useEffect, useRef } from 'react';
import { QuizResult as QuizResultType } from './quizData';
import { Button } from '@/components/ui/button';
import { RefreshCw, Share2 } from 'lucide-react';

interface QuizResultProps {
  result: QuizResultType;
  score: number;
  totalQuestions: number;
  onRestart: () => void;
}

const QuizResult: React.FC<QuizResultProps> = ({
  result,
  score,
  totalQuestions,
  onRestart,
}) => {
  const circleRef = useRef<SVGCircleElement>(null);
  const percentage = Math.round((score / totalQuestions) * 100);

  useEffect(() => {
    if (circleRef.current) {
      const scoreOffset = 100 - percentage;
      circleRef.current.style.setProperty('--score-offset', `${scoreOffset}`);
    }
  }, [percentage]);

  return (
    <div className="text-center animate-scale-in">
      <div className="mb-8 flex justify-center">
        <div className="relative w-44 h-44">
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
                "#496e5d"
              }
            />
          </svg>
          <div className="absolute inset-0 flex items-center justify-center">
            <div>
              <div className="text-4xl font-bold text-[#1a2e35] dark:text-white">
                {score}/{totalQuestions}
              </div>
              <div className="text-sm text-gray-600 dark:text-gray-400">Punkte</div>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-[#f0f5f3] dark:bg-gray-700 rounded-lg p-6 mb-8">
        <h2 className="text-2xl font-bold text-[#1a2e35] dark:text-white mb-3">
          {result.title}
        </h2>
        
        <p className="text-gray-600 dark:text-gray-300 mb-0">
          {result.description}
        </p>
      </div>
      
      <div className="flex flex-col sm:flex-row justify-center gap-4">
        <Button 
          onClick={onRestart}
          className="bg-[#496e5d] hover:bg-[#345c4b] text-white transition-all rounded-lg"
        >
          <RefreshCw className="mr-2 h-4 w-4" />
          Test wiederholen
        </Button>
        
        <Button 
          onClick={() => {
            if (navigator.share) {
              navigator.share({
                title: 'Cannabis-Snob-Test',
                text: `Ich habe ${score} von ${totalQuestions} Punkten im Cannabis-Snob-Test erreicht! Teste dein Wissen auch!`,
                url: window.location.href,
              });
            }
          }}
          variant="outline"
          className="border-[#496e5d] text-[#496e5d] hover:bg-[#f0f5f3] dark:border-[#6c8d7c] dark:text-[#6c8d7c] dark:hover:bg-[#2c3e38] transition-all rounded-lg"
        >
          <Share2 className="mr-2 h-4 w-4" />
          Ergebnis teilen
        </Button>
      </div>
    </div>
  );
};

export default QuizResult;
