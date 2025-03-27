
import React from 'react';
import { QuizResult as QuizResultType } from './quizData';
import { Button } from '@/components/ui/button';
import { RefreshCw } from 'lucide-react';
import ShareOnSocial from './ShareOnSocial';
import ScoreCircle from './ScoreCircle';
import ResultAnimation from './ResultAnimation';
import ResultCoupon from './ResultCoupon';

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
  const percentage = Math.round((score / totalQuestions) * 100);

  return (
    <div className="text-center animate-scale-in">
      <div className="mb-6 flex justify-center">
        <ScoreCircle score={score} totalQuestions={totalQuestions} />
      </div>
      
      <ResultAnimation percentage={percentage} />

      <h2 className="text-2xl font-bold text-quiz-primary mb-2">
        {result.title}
      </h2>
      
      <p className="text-quiz-secondary mb-6">
        {result.description}
      </p>
      
      <ShareOnSocial 
        result={{
          title: result.title,
          score: score,
          totalQuestions: totalQuestions
        }} 
        isQuizComplete={true} 
      />
      
      <ResultCoupon />
      
      <Button 
        onClick={onRestart}
        className="bg-weed-green hover:bg-weed-dark-green text-white transition-all"
      >
        <RefreshCw className="h-4 w-4 mr-2" />
        Test wiederholen
      </Button>
    </div>
  );
};

export default QuizResult;
