
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Mail } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

const NewsletterCTA = () => {
  const [isHovered, setIsHovered] = useState(false);
  const { toast } = useToast();
  
  const handleCTAClick = () => {
    // Open the WEED newsletter signup page in a new tab
    window.open('https://www.weed.de/newsletteranmeldung', '_blank');
    
    // Show a toast confirmation
    toast({
      title: "Vielen Dank für dein Interesse!",
      description: "Du wirst zur Anmeldeseite weitergeleitet.",
      duration: 3000,
    });
  };
  
  return (
    <div className="w-full p-4 mt-6 mb-4 rounded-lg bg-gradient-to-r from-weed-green/10 to-weed-light-green/30 border border-weed-green/20">
      <div className="flex flex-col items-center text-center">
        <div className="mb-3 flex items-center justify-center w-10 h-10 rounded-full bg-weed-green/20">
          <Mail className="h-5 w-5 text-weed-green" />
        </div>
        <h3 className="text-lg font-bold text-quiz-primary mb-2">Cannabis News direkt in dein Postfach</h3>
        <p className="text-sm text-quiz-secondary mb-4">
          Erhalte exklusive Tipps, Rezepte, Gutscheine und die neuesten Entwicklungen rund um Cannabis
        </p>
        <Button 
          onClick={handleCTAClick}
          className="bg-weed-green hover:bg-weed-dark-green text-white transition-all flex items-center gap-2"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          <Mail className={`h-4 w-4 ${isHovered ? 'animate-pulse' : ''}`} />
          Newsletter abonnieren
        </Button>
      </div>
    </div>
  );
};

export default NewsletterCTA;
