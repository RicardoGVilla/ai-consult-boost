import { CheckCircle } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const webProjects: string[] = [
  "Custom-designed and fully responsive websites tailored to your brand.",
  "Ongoing optimization and maintenance for speed, security, and reliability.",
  "Chatbot integration to improve customer engagement and automate support.",
];

const automationProjects: string[] = [
  "Streamlined business processes through intelligent automation.",
  "Invoice scanning and data extraction to eliminate manual data entry.",
  "Automated email alerts, reporting, and notifications.",
  "Custom workflows that connect your apps and tools seamlessly.",
  "Integration with accounting systems (e.g., QuickBooks) for real-time synchronization.",
  "Web scraping solutions for data collection and competitive insights.",
];

export const Projects = () => {
  return (
    <section id="projects" className="py-24 px-6 bg-background/50">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-4xl md:text-6xl font-bold text-foreground mb-16 text-center">
          Our Experience
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Web Development Column */}
          <Card className="flex flex-col">
            <CardHeader>
              <CardTitle className="text-2xl">Web Development</CardTitle>
            </CardHeader>
            <CardContent className="flex-grow">
              <ul className="space-y-4">
                {webProjects.map((item, index) => (
                  <li key={index} className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-primary mr-3 mt-1 flex-shrink-0" />
                    <span className="text-base text-muted-foreground">{item}</span>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>

          {/* Automation Column */}
          <Card className="flex flex-col">
            <CardHeader>
              <CardTitle className="text-2xl">Automation & Workflow Optimization</CardTitle>
            </CardHeader>
            <CardContent className="flex-grow">
              <ul className="space-y-4">
                {automationProjects.map((item, index) => (
                  <li key={index} className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-primary mr-3 mt-1 flex-shrink-0" />
                    <span className="text-base text-muted-foreground">{item}</span>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};