
import React, { useState } from 'react';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Check, Copy } from 'lucide-react';

const ResultCoupon: React.FC = () => {
  const [copied, setCopied] = useState(false);
  const couponCode = "CANNABISNOB50";

  const handleCopyCode = () => {
    navigator.clipboard.writeText(couponCode);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
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
  );
};

export default ResultCoupon;
