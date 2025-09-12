import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { 
  Workflow, 
  Database, 
  MessageSquare, 
  Shield, 
  Clock, 
  TrendingUp,
  ArrowRight 
} from "lucide-react";

const services = [
  {
    icon: Workflow,
    title: "Process Automation",
    description: "Transform manual workflows into intelligent, self-executing systems that work 24/7.",
    benefits: ["Reduce processing time by 90%", "Eliminate human errors", "Scale without limits"],
    popular: true
  },
  {
    icon: Database,
    title: "Data Integration",
    description: "Connect disparate systems and create unified data flows across your organization.",
    benefits: ["Real-time data sync", "Eliminate data silos", "Automated reporting"],
    popular: false
  },
  {
    icon: MessageSquare,
    title: "AI-Powered Chatbots",
    description: "Deploy intelligent conversational agents for customer service and internal support.",
    benefits: ["24/7 customer support", "Instant response times", "Multi-language support"],
    popular: false
  },
  {
    icon: Shield,
    title: "Compliance Automation",
    description: "Automate regulatory compliance and audit preparation processes.",
    benefits: ["Reduce compliance costs", "Ensure 100% accuracy", "Automated documentation"],
    popular: false
  },
  {
    icon: Clock,
    title: "Scheduling & Planning",
    description: "Intelligent resource allocation and dynamic scheduling systems.",
    benefits: ["Optimize resource usage", "Reduce scheduling conflicts", "Predictive planning"],
    popular: false
  },
  {
    icon: TrendingUp,
    title: "Analytics Automation",
    description: "Automated insights generation and performance monitoring dashboards.",
    benefits: ["Real-time insights", "Predictive analytics", "Automated alerts"],
    popular: true
  }
];

export const Services = () => {
  return (
    <section className="py-24 px-6 bg-secondary/50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Automation Services That
            <span className="block accent-text">Deliver Real Results</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            From simple task automation to complex AI-driven systems, we build solutions 
            that transform how your business operates.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <Card key={index} className="glow-card p-6 relative overflow-hidden group">
                {service.popular && (
                  <div className="absolute top-4 right-4 bg-primary text-primary-foreground text-xs px-2 py-1 rounded-full">
                    Popular
                  </div>
                )}
                
                <div className="mb-6">
                  <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors duration-300">
                    <Icon className="h-6 w-6 text-primary" />
                  </div>
                  
                  <h3 className="text-xl font-semibold mb-3">{service.title}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed mb-6">
                    {service.description}
                  </p>
                </div>

                <div className="space-y-2 mb-6">
                  {service.benefits.map((benefit, benefitIndex) => (
                    <div key={benefitIndex} className="flex items-center text-sm">
                      <div className="w-1.5 h-1.5 bg-primary rounded-full mr-2"></div>
                      <span className="text-muted-foreground">{benefit}</span>
                    </div>
                  ))}
                </div>

                <Button variant="ghost" className="w-full group-hover:bg-primary/10 transition-colors duration-300">
                  Learn More
                  <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform duration-300" />
                </Button>
              </Card>
            );
          })}
        </div>

        <div className="text-center mt-12">
          <Button variant="hero" size="xl">
            Schedule a Consultation
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
        </div>
      </div>
    </section>
  );
};