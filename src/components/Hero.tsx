import { Button } from "@/components/ui/button";
import { Bot } from "lucide-react";
import { ThemeToggle } from "@/components/ThemeToggle";

export const Hero = () => {
  return (
    <div className="min-h-screen flex flex-col">
      {/* Header */}
      <header className="p-6">
        <nav className="flex justify-between items-center max-w-6xl mx-auto">
          <div className="flex items-center space-x-3">
            <span className="text-xl font-bold text-foreground">AI-Automate</span>
          </div>
          <ThemeToggle />
        </nav>
      </header>

      {/* Main Content */}
      <main className="flex-1 flex items-center justify-center px-6">
        <div className="max-w-6xl mx-auto">
          <div className="space-y-8">
            <h1 className="text-6xl md:text-8xl lg:text-9xl font-bold text-foreground leading-none tracking-tight">
              AI
              <br />
              Automate
              <br />
              Agency
            </h1>
            
            <div className="space-y-4 text-xl md:text-2xl text-muted-foreground max-w-2xl">
              <p><span className="font-bold text-foreground">optimise</span> processes</p>
              <p><span className="font-bold text-foreground">automate</span> workflows</p>
              <p><span className="font-bold text-foreground">elevate</span> businesses</p>
            </div>
            
            <div className="pt-8">
              <Button 
                size="lg" 
                className="bg-foreground text-background hover:bg-foreground/90"
              >
                Get Started
              </Button>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};