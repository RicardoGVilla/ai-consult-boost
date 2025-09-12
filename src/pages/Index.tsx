import { Hero } from "@/components/Hero";
import { Methodology } from "@/components/Methodology";
import { Services } from "@/components/Services";
import { Contact } from "@/components/Contact";

const Index = () => {
  return (
    <main className="min-h-screen">
      <Hero />
      <Methodology />
      <Services />
      <Contact />
    </main>
  );
};

export default Index;