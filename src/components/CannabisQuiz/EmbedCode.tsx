
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Check } from 'lucide-react';

const EmbedCode: React.FC = () => {
  const [copied, setCopied] = useState(false);
  
  const embedCode = `<iframe src="https://lovable.dev/projects/4819821c-a733-4f03-b04d-bf2ff9351d85" width="100%" height="600" style="border:none;border-radius:8px;box-shadow:0 4px 12px rgba(0,0,0,0.1)" title="Cannabis Snob Quiz"></iframe>`;
  
  const copyToClipboard = () => {
    navigator.clipboard.writeText(embedCode);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };
  
  return (
    <div className="mt-8 p-4 bg-gray-50 dark:bg-gray-800 rounded-md border border-gray-200 dark:border-gray-700">
      <h3 className="text-lg font-medium mb-2 text-quiz-primary">Quiz einbetten</h3>
      <p className="text-sm text-quiz-secondary mb-3">
        Kopiere diesen Code, um den Quiz auf deiner Website einzubetten:
      </p>
      <div className="relative">
        <pre className="bg-white dark:bg-gray-900 p-3 rounded text-xs sm:text-sm overflow-x-auto border border-gray-200 dark:border-gray-700">
          {embedCode}
        </pre>
        <Button
          size="sm"
          onClick={copyToClipboard}
          className="absolute right-2 top-2 bg-quiz-accent hover:bg-quiz-highlight text-white h-8"
        >
          {copied ? <Check className="h-4 w-4 mr-1" /> : null}
          {copied ? "Kopiert" : "Kopieren"}
        </Button>
      </div>
    </div>
  );
};

export default EmbedCode;
