
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Check, Code } from 'lucide-react';

const EmbedCode: React.FC = () => {
  const [copied, setCopied] = useState(false);
  
  const embedCode = `<iframe src="https://weed.de/cannabis-snob-quiz" width="100%" height="600" style="border:none;border-radius:8px;box-shadow:0 4px 12px rgba(0,0,0,0.1)" title="Cannabis Snob Quiz"></iframe>`;
  
  const copyToClipboard = () => {
    navigator.clipboard.writeText(embedCode);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };
  
  return (
    <div className="mt-8 p-6 bg-gray-50 dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700">
      <div className="flex items-center mb-3">
        <Code className="h-5 w-5 text-[#496e5d] mr-2" />
        <h3 className="text-lg font-medium text-[#1a2e35] dark:text-white">Quiz einbetten</h3>
      </div>
      
      <p className="text-sm text-gray-600 dark:text-gray-300 mb-3">
        Kopiere diesen Code, um den Cannabis-Snob-Test auf deiner Website einzubetten:
      </p>
      
      <div className="relative">
        <pre className="bg-white dark:bg-gray-900 p-4 rounded-lg text-xs sm:text-sm overflow-x-auto border border-gray-200 dark:border-gray-700 text-gray-800 dark:text-gray-200">
          {embedCode}
        </pre>
        <Button
          size="sm"
          onClick={copyToClipboard}
          className="absolute right-2 top-2 bg-[#496e5d] hover:bg-[#345c4b] text-white h-8"
        >
          {copied ? <Check className="h-4 w-4 mr-1" /> : null}
          {copied ? "Kopiert" : "Kopieren"}
        </Button>
      </div>
      
      <div className="mt-4 text-xs text-gray-500 dark:text-gray-400">
        Powered by <a href="https://weed.de" className="text-[#496e5d] hover:underline">Weed.de</a>
      </div>
    </div>
  );
};

export default EmbedCode;
