import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Bot, Workflow, Zap } from "lucide-react";

export const Services = () => {
  const services = [
    {
      title: "AI Development",
      description: "Crafting intelligent solutions for small to medium-sized businesses, including custom chatbots, AI tools, and seamless integrations. These solutions drive growth, optimize processes, and enhance communication, elevating your business impact."
    },
    {
      title: "Lead Generation",
      description: "AI-powered lead generation solutions that help businesses acquire and manage leads efficiently. By leveraging custom chatbots and personalized integrations, the lead process is streamlined, allowing more focus on growth and client success."
    },
    {
      title: "System Integration",
      description: "Seamlessly connecting tools, apps, and platforms through API integrations, data synchronization, and custom workflows. Ensures the tech stack works as a unified system, improving efficiency and reducing manual work."
    },
    {
      title: "Data & Reporting Automation",
      description: "Transforming raw data into actionable insights with automated reporting. Data collection, aggregation, and visualization are streamlined, helping businesses track performance, make informed decisions, and focus on strategic growth."
    }
       
  ];

  return (
    <section className="py-24 px-6">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl md:text-6xl font-bold text-foreground mb-16">
          Services
        </h2>

        <div className="space-y-6">
          {services.map((service, index) => (
            <div key={index} className="border-b border-border pb-6 last:border-b-0">
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