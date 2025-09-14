import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Bot, Workflow, Zap } from "lucide-react";

export const Services = () => {
  const services = [
    {
      icon: <Bot className="h-12 w-12 text-foreground" />,
      title: "AI Development",
      description: "Custom AI solutions tailored for your business, including intelligent chatbots, workflow automation, and seamless integrations that drive growth and optimize processes.",
    },
    {
      icon: <Workflow className="h-12 w-12 text-foreground" />,
      title: "Process Automation",
      description: "Streamline your operations with automated workflows. From supply chain optimization to administrative tasks, eliminate repetitive work and focus on what matters.",
    },
    {
      icon: <Zap className="h-12 w-12 text-foreground" />,
      title: "System Integration",
      description: "Connect your existing tools and platforms. API integrations, data synchronization, and custom solutions that make your tech stack work as one unified system.",
    },
  ];

  return (
    <section className="py-24 px-6">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl md:text-6xl font-bold text-foreground mb-16">
          Services
        </h2>

        <div className="space-y-16">
          {services.map((service, index) => (
            <div key={index} className="border-b border-border pb-16 last:border-b-0">
              <div className="mb-6">{service.icon}</div>
              <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
                {service.title}
              </h3>
              <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};