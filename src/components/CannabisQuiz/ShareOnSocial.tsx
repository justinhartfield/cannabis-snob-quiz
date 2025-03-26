
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Facebook, Twitter, Share2, Instagram } from 'lucide-react';

interface ShareOnSocialProps {
  result?: {
    title: string;
    score: number;
    totalQuestions: number;
  };
  currentQuestion?: string;
  isQuizComplete?: boolean;
}

// Custom TikTok Icon component
const TikTokIcon = () => (
  <svg 
    width="16" 
    height="16" 
    viewBox="0 0 24 24" 
    fill="none" 
    xmlns="http://www.w3.org/2000/svg"
    className="h-4 w-4 mr-2"
  >
    <path 
      d="M19.589 6.686C19.3007 6.51223 19.0353 6.29629 18.8035 6.04223C18.5716 5.78817 18.3764 5.50016 18.2256 5.18734C17.7971 4.33682 17.5779 3.39181 17.587 2.435V2H13.0463V15.8438C13.0463 16.8404 12.5668 17.7957 11.7322 18.3947C10.8976 18.9936 9.83808 19.1641 8.85707 18.8571C7.87606 18.5502 7.07553 17.7975 6.67113 16.8283C6.26673 15.8592 6.30122 14.7758 6.76557 13.835C7.22993 12.8942 8.08489 12.1922 9.10038 11.9057C10.1159 11.6191 11.1979 11.7726 12.0984 12.3265V7.66511C11.2646 7.51587 10.4136 7.46793 9.57043 7.5227C8.03446 7.635 6.57188 8.13433 5.31847 8.97453C4.06505 9.81473 3.05926 10.9666 2.39253 12.3201C1.66919 13.8267 1.39283 15.5044 1.59883 17.1582C1.80482 18.812 2.48675 20.3761 3.56519 21.65C4.39537 22.7008 5.45358 23.5375 6.65864 24.1L6.67113 24.0844C8.12699 24.7439 9.74304 24.9962 11.3382 24.809C12.9334 24.6218 14.448 24.0037 15.724 23.0194C16.7765 22.2129 17.622 21.1668 18.1922 19.9652C18.7624 18.7637 19.0389 17.4437 18.9998 16.1113V9.17535C20.2099 9.95632 21.5882 10.422 23.0121 10.5215V6.0215C21.6754 6.04255 20.5399 5.55305 19.589 6.686Z" 
      fill="currentColor"
    />
  </svg>
);

// Custom Snapchat Icon component
const SnapchatIcon = () => (
  <svg 
    width="16" 
    height="16" 
    viewBox="0 0 24 24" 
    fill="none" 
    xmlns="http://www.w3.org/2000/svg"
    className="h-4 w-4 mr-2"
  >
    <path 
      d="M12.206 0h-.03A6.15 6.15 0 0 0 8.884 1.196a6.003 6.003 0 0 0-2.181 3.652c-.133.499-.167 1.012-.128 1.524.013.139.028.278.04.417.016.192.033.389.033.584 0 .234-.139.441-.366.441-.113 0-.236-.029-.38-.086-.185-.067-.39-.118-.583-.119-.121 0-.244.014-.366.035-.311.05-.599.202-.81.434-.311.343-.401.787-.241 1.182.252.619.883 1.019 1.801 1.149.138.02.28.037.401.087.186.08.29.182.266.361-.022.164-.098.342-.183.542-.1.234-.211.485-.308.779-.038.118-.11.205-.224.254-.512.216-1.074.332-1.644.345h-.008a3.38 3.38 0 0 1-.582-.052 2.907 2.907 0 0 0-.543-.026 2.9 2.9 0 0 0-1.344.342c-.502.273-.93.77-1.248 1.455a3.58 3.58 0 0 0-.31 1.543c.077.933.628 1.736 1.566 2.277.935.535 2.076.821 3.292.825 1.402 0 2.387-.288 3.11-.563.12-.046.234-.09.344-.131.507-.195.822-.382 1.116-.557.467-.28.816-.535 1.31-.535h.04c.483 0 .825.254 1.31.536.294.175.61.362 1.116.557.11.042.224.086.344.13.722.276 1.707.564 3.11.564 1.216-.004 2.357-.29 3.292-.825.938-.541 1.489-1.344 1.566-2.277.094-.536.008-1.073-.31-1.543-.318-.685-.746-1.182-1.248-1.455a2.908 2.908 0 0 0-1.343-.342 2.916 2.916 0 0 0-.542.026 3.38 3.38 0 0 1-.583.052h-.008c-.57-.013-1.131-.128-1.644-.345-.113-.049-.187-.136-.224-.254-.095-.294-.209-.545-.308-.779-.086-.2-.162-.378-.183-.542-.025-.18.08-.28.266-.361.12-.05.261-.066.4-.086.918-.131 1.55-.532 1.8-1.15.16-.394.07-.838-.24-1.182a1.42 1.42 0 0 0-.81-.434 1.298 1.298 0 0 0-.366-.035c-.193 0-.399.051-.583.12-.144.056-.267.085-.38.085-.196 0-.363-.203-.366-.441 0-.195.017-.392.033-.584.013-.139.028-.278.04-.417.04-.512.006-1.025-.127-1.524A6.005 6.005 0 0 0 15.3 1.195 6.15 6.15 0 0 0 12.206 0Zm.006 19.903H12.2c-.803 0-1.39.588-1.39 1.391 0 .22.055.431.154.619.153.29.4.515.716.618a1.43 1.43 0 0 0 1.039-.001c.316-.101.563-.328.715-.617.1-.188.153-.4.153-.62 0-.802-.587-1.39-1.39-1.39Z" 
      fill="currentColor"
    />
  </svg>
);

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
          <TikTokIcon />
          TikTok
        </Button>
        
        <Button 
          onClick={shareOnSnapchat}
          className="bg-[#FFFC00] hover:opacity-90 text-black"
          size="sm"
        >
          <SnapchatIcon />
          Snapchat
        </Button>
      </div>
    </div>
  );
};

export default ShareOnSocial;
