import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";

export const Contact = () => {
  return (
    <section className="py-24 px-6">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl md:text-6xl font-bold text-foreground mb-16">
          Contact
        </h2>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          <div>
            <h3 className="text-xl md:text-2xl font-bold text-foreground mb-8">
              Let's discuss your automation needs
            </h3>
            
            <form className="space-y-6">
              <div>
                <Label htmlFor="name" className="text-foreground">Name</Label>
                <Input 
                  id="name" 
                  className="mt-2 bg-background border-border" 
                  placeholder="Your name" 
                />
              </div>
              
              <div>
                <Label htmlFor="email" className="text-foreground">Email</Label>
                <Input 
                  id="email" 
                  type="email" 
                  className="mt-2 bg-background border-border" 
                  placeholder="your@email.com" 
                />
              </div>
              
              <div>
                <Label htmlFor="message" className="text-foreground">Message</Label>
                <Textarea 
                  id="message" 
                  className="mt-2 bg-background border-border min-h-[120px]" 
                  placeholder="Tell me about your automation challenges..."
                />
              </div>
              
              <Button 
                type="submit" 
                className="bg-foreground text-background hover:bg-foreground/90"
              >
                Send Message
              </Button>
            </form>
          </div>
          
          <div className="space-y-8">
            <div>
              <h4 className="font-bold text-foreground mb-2">Email</h4>
              <p className="text-muted-foreground">hello@ai-automate.com</p>
            </div>
            
            <div>
              <h4 className="font-bold text-foreground mb-2">Response Time</h4>
              <p className="text-muted-foreground">Within 24 hours</p>
            </div>
            
            <div>
              <h4 className="font-bold text-foreground mb-2">Free Consultation</h4>
              <p className="text-muted-foreground">
                30-minute strategy call to discuss your automation opportunities
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};