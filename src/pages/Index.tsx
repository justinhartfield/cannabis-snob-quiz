
import React from 'react';
import CannabisQuiz from '@/components/CannabisQuiz/CannabisQuiz';
import { NavigationMenu, NavigationMenuContent, NavigationMenuItem, NavigationMenuLink, NavigationMenuList, NavigationMenuTrigger } from '@/components/ui/navigation-menu';
import { Search } from 'lucide-react';
import { Input } from '@/components/ui/input';

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col bg-[#f8f9fa] dark:bg-gray-900">
      {/* Navigation Bar */}
      <header className="bg-white dark:bg-gray-800 border-b border-gray-200 dark:border-gray-700 py-4 px-6 md:px-12">
        <div className="container mx-auto flex justify-between items-center">
          <div className="flex items-center space-x-8">
            <img src="/lovable-uploads/d9714a91-cb81-44d6-a610-af965d6e975d.png" alt="Weed.de Logo" className="h-8" />
            
            <NavigationMenu className="hidden md:flex">
              <NavigationMenuList>
                <NavigationMenuItem>
                  <NavigationMenuTrigger className="text-gray-800 dark:text-gray-200">PRODUKTE</NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <div className="p-4 w-[400px]">
                      <div className="grid gap-3">
                        <NavigationMenuLink href="#" className="block p-2 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-md">Cannabis Produkte</NavigationMenuLink>
                        <NavigationMenuLink href="#" className="block p-2 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-md">Strains</NavigationMenuLink>
                      </div>
                    </div>
                  </NavigationMenuContent>
                </NavigationMenuItem>
                <NavigationMenuItem>
                  <NavigationMenuTrigger className="text-gray-800 dark:text-gray-200">STANDORTE</NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <div className="p-4 w-[400px]">
                      <div className="grid gap-3">
                        <NavigationMenuLink href="#" className="block p-2 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-md">Apotheken</NavigationMenuLink>
                        <NavigationMenuLink href="#" className="block p-2 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-md">Ärzte</NavigationMenuLink>
                      </div>
                    </div>
                  </NavigationMenuContent>
                </NavigationMenuItem>
                <NavigationMenuItem>
                  <NavigationMenuTrigger className="text-gray-800 dark:text-gray-200">MARKEN</NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <div className="p-4 w-[400px]">
                      <div className="grid gap-3">
                        <NavigationMenuLink href="#" className="block p-2 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-md">Bekannte Marken</NavigationMenuLink>
                      </div>
                    </div>
                  </NavigationMenuContent>
                </NavigationMenuItem>
                <NavigationMenuItem>
                  <NavigationMenuLink href="#" className="text-gray-800 dark:text-gray-200 px-4 py-2">WISSEN</NavigationMenuLink>
                </NavigationMenuItem>
              </NavigationMenuList>
            </NavigationMenu>
          </div>
          
          <div className="flex items-center space-x-4">
            <div className="relative rounded-full border border-gray-300 dark:border-gray-600 px-3 py-1.5 flex items-center w-full max-w-[200px]">
              <input type="text" placeholder="Suche" className="bg-transparent border-none outline-none text-sm w-full" />
              <Search className="h-4 w-4 text-gray-500 dark:text-gray-400" />
            </div>
          </div>
        </div>
      </header>
      
      <main className="flex-1 container mx-auto px-4 py-12">
        <div className="max-w-3xl mx-auto">
          <div className="rounded-2xl bg-white dark:bg-gray-800 shadow-lg overflow-hidden border border-gray-200 dark:border-gray-700 p-6 md:p-10">
            <div className="text-center mb-6">
              <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-4">
                Der Cannabis-Snob-Test
              </h1>
              <div className="flex justify-center mb-4">
                <img src="/lovable-uploads/4590b59d-73ef-4197-a90c-ab934f90964f.png" alt="Cannabis" className="h-24 rounded-lg" />
              </div>
              <p className="text-gray-600 dark:text-gray-300 max-w-lg mx-auto">
                Finde deinen Weg! Teste dein Cannabis-Wissen und entdecke, ob du zur Cannabis-Königsklasse gehörst.
              </p>
            </div>
            
            <CannabisQuiz />
          </div>
        </div>
      </main>
      
      <footer className="bg-[#1a2e35] text-white py-10 px-6 md:px-12">
        <div className="container mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-6 md:mb-0">
              <img src="/lovable-uploads/d9714a91-cb81-44d6-a610-af965d6e975d.png" alt="Weed.de Logo" className="h-8 mb-4" />
              <p className="text-gray-400 text-sm">
                Entdecke die aufregende Welt des Cannabis!
              </p>
            </div>
            <div className="text-center md:text-right text-sm text-gray-400">
              <p>&copy; {new Date().getFullYear()} Weed.de - Alle Rechte vorbehalten</p>
              <p>Designed with precision for cannabis connoisseurs.</p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
