import { Card } from "@/components/ui/card";
import { Search, Settings, BarChart3 } from "lucide-react";

const steps = [
  {
    icon: Search,
    title: "Analyze",
    description: "We audit your current processes to identify automation opportunities and quantify potential impact.",
    features: [
      "Process mapping & documentation",
      "ROI calculation for each opportunity",
      "Priority matrix development",
      "Technology stack assessment"
    ]
  },
  {
    icon: Settings,
    title: "Automate",
    description: "We design and implement custom automation solutions tailored to your specific business needs.",
    features: [
      "Custom workflow development",
      "API integrations & connections",
      "AI-powered decision engines",
      "Quality assurance & testing"
    ]
  },
  {
    icon: BarChart3,
    title: "Optimize",
    description: "We monitor, measure, and continuously improve your automated systems for maximum efficiency.",
    features: [
      "Performance monitoring dashboard",
      "Continuous improvement cycles",
      "Team training & knowledge transfer",
      "Scalability planning & execution"
    ]
  }
];

export const Methodology = () => {
  return (
    <section className="py-24 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Our 3-Step Automation
            <span className="block accent-text">Transformation Process</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            We guide companies through a proven methodology that delivers measurable results 
            and transforms how work gets done.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {steps.map((step, index) => {
            const Icon = step.icon;
            return (
              <Card key={index} className="glow-card p-8 relative overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 rounded-full -translate-y-16 translate-x-16"></div>
                
                <div className="relative z-10">
                  <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mb-6">
                    <Icon className="h-8 w-8 text-primary" />
                  </div>
                  
                  <div className="mb-6">
                    <div className="text-sm font-semibold text-primary mb-2">
                      Step {index + 1}
                    </div>
                    <h3 className="text-2xl font-bold mb-4">{step.title}</h3>
                    <p className="text-muted-foreground leading-relaxed">
                      {step.description}
                    </p>
                  </div>
                  
                  <ul className="space-y-3">
                    {step.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-start">
                        <div className="w-2 h-2 bg-primary rounded-full mt-2 mr-3 flex-shrink-0"></div>
                        <span className="text-sm text-muted-foreground">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};