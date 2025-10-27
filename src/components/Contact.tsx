import { useState } from "react";
import { InlineWidget } from "react-calendly";
import { Loader2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "sonner";

export const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    const form = e.currentTarget;
    const netlifyFormData = new FormData(form);

    try {
      const response = await fetch(form.action, {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: new URLSearchParams(netlifyFormData as any).toString(),
      });

      if (!response.ok) {
        throw new Error(`Form submission failed: ${response.statusText}`);
      }

      toast.success("Message sent successfully!");
      setFormData({ name: "", email: "", message: "" });
    } catch (error) {
      console.error("Form submission error:", error);
      toast.error("An error occurred. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-24 px-6">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl md:text-6xl font-bold text-foreground mb-16">
          Contact
        </h2>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          <div>
            <h3 className="text-xl md:text-2xl font-bold text-foreground mb-8">
              Let's discuss your automation needs
            </h3>
            
            <form
              name="contact"
              method="POST"
              action="/"
              data-netlify="true"
              onSubmit={handleSubmit}
              className="space-y-6"
            >
              {/* Netlify spam protection: honeypot field */}
              <p className="hidden">
                <label>
                  Don’t fill this out if you’re human: <input name="bot-field" />
                </label>
              </p>
              <input type="hidden" name="form-name" value="contact" />
              <div>
                <Label htmlFor="name" className="text-foreground">Name</Label>
                <Input 
                  id="name" 
                  name="name"
                  className="mt-2 bg-background border-border" 
                  placeholder="Your name" 
                  value={formData.name}
                  onChange={handleChange}
                  required
                />
              </div>
              
              <div>
                <Label htmlFor="email" className="text-foreground">Email</Label>
                <Input 
                  id="email" 
                  name="email"
                  type="email" 
                  className="mt-2 bg-background border-border" 
                  placeholder="your@email.com" 
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
              </div>
              
              <div>
                <Label htmlFor="message" className="text-foreground">Message</Label>
                <Textarea 
                  id="message" 
                  name="message"
                  className="mt-2 bg-background border-border min-h-[120px]" 
                  placeholder="Tell me about your automation challenges..."
                  value={formData.message}
                  onChange={handleChange}
                  required
                />
              </div>
              
              <Button 
                type="submit" 
                className="bg-foreground text-background hover:bg-foreground/90"
                disabled={isSubmitting}
              >
                {isSubmitting ? (
                  <>
                    <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                    Sending...
                  </>
                ) : (
                  "Send Message"
                )}
              </Button>
            </form>
          </div>
          
          <div className="space-y-8">
            <div>
              <h4 className="font-bold text-foreground mb-2">Email</h4>
              <p className="text-muted-foreground">ricardorgvillanueva@efficiencore.com
</p>
            </div>
            
            <div>
              <h4 className="font-bold text-foreground mb-4">Book a Free Consultation</h4>
              <div className="rounded-lg overflow-hidden">
                {/* 
                  IMPORTANT: Replace the URL below with your actual Calendly event link.
                */}
                <InlineWidget url="https://calendly.com/ricardorgvillanueva/free-consultation-ai-automate" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};