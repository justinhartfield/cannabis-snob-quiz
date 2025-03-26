
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Facebook, Twitter, Share2, Instagram, TikTok, Snapchat } from 'lucide-react';

interface ShareOnSocialProps {
  result?: {
    title: string;
    score: number;
    totalQuestions: number;
  };
  currentQuestion?: string;
  isQuizComplete?: boolean;
}

const ShareOnSocial: React.FC<ShareOnSocialProps> = ({ 
  result, 
  currentQuestion,
  isQuizComplete = false 
}) => {
  const baseUrl = "https://cannabissnob.de";
  const [isShareMenuOpen, setIsShareMenuOpen] = useState(false);
  
  // Determine share text based on whether sharing a result or a question
  const getShareText = () => {
    if (isQuizComplete && result) {
      return `Ich habe ${result.score} von ${result.totalQuestions} Punkten im Cannabis Snob Quiz erreicht! ${result.title} Kannst du das toppen? ${baseUrl}`;
    }
    return `Teste dein Cannabis-Wissen! Ich spiele gerade den Cannabis Snob Quiz: ${baseUrl} ${currentQuestion ? `Aktuelle Frage: "${currentQuestion}"` : ''}`;
  };
  
  const shareText = getShareText();
  
  const shareOnFacebook = () => {
    const url = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(baseUrl)}&quote=${encodeURIComponent(shareText)}`;
    window.open(url, '_blank', 'width=600,height=400');
  };
  
  const shareOnX = () => {
    const url = `https://twitter.com/intent/tweet?text=${encodeURIComponent(shareText)}`;
    window.open(url, '_blank', 'width=600,height=400');
  };
  
  const shareOnInstagram = () => {
    // Instagram doesn't support direct link sharing, so we'll provide instructions
    alert("Instagram unterstützt keine direkte Link-Teilen-Funktion. Kopiere den Link und teile ihn in deiner Instagram-Story oder deinem Profil.");
    navigator.clipboard.writeText(shareText);
  };
  
  const shareOnTikTok = () => {
    // TikTok doesn't have a direct share API like other platforms
    alert("TikTok unterstützt keine direkte Link-Teilen-Funktion. Kopiere den Link und teile ihn in deinem TikTok-Video oder Profil.");
    navigator.clipboard.writeText(shareText);
  };
  
  const shareOnSnapchat = () => {
    alert("Snapchat unterstützt keine direkte Link-Teilen-Funktion. Kopiere den Link und teile ihn in deinem Snap.");
    navigator.clipboard.writeText(shareText);
  };
  
  const toggleShareMenu = () => {
    setIsShareMenuOpen(!isShareMenuOpen);
  };
  
  return (
    <div className="mt-6 p-4 bg-gray-50 dark:bg-gray-800 rounded-md border border-gray-200 dark:border-gray-700">
      <h3 className="text-lg font-medium mb-2 text-quiz-primary">
        {isQuizComplete ? 'Teile dein Ergebnis' : 'Teile diese Frage'}
      </h3>
      <p className="text-sm text-quiz-secondary mb-3">
        {isQuizComplete 
          ? 'Fordere deine Freunde heraus! Teile dein Ergebnis auf Social Media:'
          : 'Finde heraus, ob deine Freunde diese Frage beantworten können:'}
      </p>
      
      <div className="flex flex-wrap gap-2 justify-center">
        <Button 
          onClick={shareOnFacebook}
          className="bg-[#1877F2] hover:bg-[#0e66d0] text-white"
          size="sm"
        >
          <Facebook className="h-4 w-4 mr-2" />
          Facebook
        </Button>
        
        <Button 
          onClick={shareOnX}
          className="bg-black hover:bg-gray-800 text-white"
          size="sm"
        >
          <Twitter className="h-4 w-4 mr-2" />
          X
        </Button>
        
        <Button 
          onClick={shareOnInstagram}
          className="bg-gradient-to-r from-[#833AB4] via-[#FD1D1D] to-[#FCAF45] hover:opacity-90 text-white"
          size="sm"
        >
          <Instagram className="h-4 w-4 mr-2" />
          Instagram
        </Button>
        
        <Button 
          onClick={shareOnTikTok}
          className="bg-black hover:bg-gray-800 text-white"
          size="sm"
        >
          <TikTok className="h-4 w-4 mr-2" />
          TikTok
        </Button>
        
        <Button 
          onClick={shareOnSnapchat}
          className="bg-[#FFFC00] hover:opacity-90 text-black"
          size="sm"
        >
          <Snapchat className="h-4 w-4 mr-2" />
          Snapchat
        </Button>
      </div>
    </div>
  );
};

export default ShareOnSocial;
