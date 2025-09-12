import { Button } from "@/components/ui/button";
import { ArrowRight, Bot, Zap } from "lucide-react";
import heroBg from "@/assets/hero-bg.jpg";

export const Hero = () => {
  return (
    <section 
      className="relative min-h-screen flex items-center justify-center px-6 overflow-hidden"
      style={{
        backgroundImage: `url(${heroBg})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat'
      }}
    >
      {/* Background Overlay */}
      <div className="absolute inset-0 bg-background/80 backdrop-blur-sm"></div>
      
      {/* Background Elements */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-primary/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-accent/10 rounded-full blur-3xl"></div>
      
      {/* Header */}
      <header className="absolute top-0 left-0 right-0 z-50 p-6">
        <nav className="flex justify-between items-center max-w-7xl mx-auto">
          <div className="flex items-center space-x-2">
            <Bot className="h-8 w-8 text-primary" />
            <span className="text-xl font-bold">AutoConsult</span>
          </div>
          <Button variant="glass" size="lg">
            Get In Touch
            <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
        </nav>
      </header>

      {/* Main Content */}
      <div className="relative z-10 text-center max-w-6xl mx-auto">
        <div className="mb-8 inline-flex items-center px-4 py-2 rounded-full bg-primary/10 border border-primary/20">
          <Zap className="h-4 w-4 text-primary mr-2" />
          <span className="text-sm font-medium accent-text">Transforming Business Through Automation</span>
        </div>
        
        <h1 className="hero-text mb-8">
          We are not just a{" "}
          <span className="block">
            <span className="accent-text italic">Consulting</span>
            <span className="text-foreground"> Agency</span>
          </span>
        </h1>
        
        <p className="text-xl md:text-2xl text-muted-foreground mb-12 max-w-3xl mx-auto leading-relaxed">
          We are automation architects. We design, build, and deploy intelligent systems that 
          eliminate manual work and amplify your team's potential.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Button variant="hero" size="xl" className="min-w-[200px]">
            Start Your Automation Journey
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
          <Button variant="glass" size="xl" className="min-w-[200px]">
            See Our Process
          </Button>
        </div>
        
        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
          <div className="text-center">
            <div className="text-4xl font-bold accent-text mb-2">500+</div>
            <div className="text-muted-foreground">Processes Automated</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold accent-text mb-2">95%</div>
            <div className="text-muted-foreground">Time Reduction Average</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold accent-text mb-2">200+</div>
            <div className="text-muted-foreground">Companies Transformed</div>
          </div>
        </div>
      </div>
    </section>
  );
};