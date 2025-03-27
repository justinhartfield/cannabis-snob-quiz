
import React, { useEffect, useRef } from 'react';

interface ScoreCircleProps {
  score: number;
  totalQuestions: number;
}

const ScoreCircle: React.FC<ScoreCircleProps> = ({ score, totalQuestions }) => {
  const circleRef = useRef<SVGCircleElement>(null);
  const percentage = Math.round((score / totalQuestions) * 100);

  useEffect(() => {
    if (circleRef.current) {
      const scoreOffset = 100 - percentage;
      circleRef.current.style.setProperty('--score-offset', `${scoreOffset}`);
    }
  }, [percentage]);

  return (
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
  );
};

export default ScoreCircle;
