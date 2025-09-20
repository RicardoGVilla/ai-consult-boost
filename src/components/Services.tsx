import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Bot, Workflow, Zap } from "lucide-react";

export const Services = () => {
  const services = [
    {
      title: "Workflow Automations",
      description: "Save time and reduce errors by automating repetitive tasks, letting your team focus on what truly matters. Automate welcome emails, follow-up reminders, and client data transfer from website forms to your CRM. Sync information across apps like email, spreadsheets, and project management tools for seamless operations."
    },
    {
      title: "Digital Presence Creation",
      description: "Build a strong online presence that highlights your brand and attracts the right clients. Whether it’s a landing page, online portfolio, or a full website, we create responsive, user-friendly sites designed to integrate with automation tools and online services."
    },
    {
      title: "Chatbot & Website Integration",
      description: "Enhance your website with an intelligent chatbot that engages visitors, answers questions, and captures leads automatically. Provide instant support 24/7 and gather information from potential clients without manual effort."
    },
    {
      title: "Appointment Scheduling",
      description: "Simplify your booking process with a dedicated appointment scheduling system. Clients can book directly online, sync with your calendar, receive confirmations, and get automated reminders, reducing no-shows and saving you time."
    },
    {
      title: "Billing & Payments",
      description: "Simplify your financial operations with automated billing and payment solutions. Generate invoices, accept credit cards or e-transfers, set up recurring subscriptions, and send payment reminders—all integrated with your existing systems to keep finances organized and reduce manual work."
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