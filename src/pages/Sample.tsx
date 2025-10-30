import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

const Sample = () => {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Navigation />
      
      <main className="flex-1 py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto space-y-12">
            <header className="text-center space-y-4 animate-fade-up">
              <h1 className="font-serif text-5xl font-bold text-foreground">Sample Chapter</h1>
              <p className="text-xl text-muted-foreground">Chapter III: The Burden of Consciousness</p>
            </header>

            <Card className="shadow-elegant animate-fade-up">
              <CardContent className="p-12 space-y-6">
                <p className="text-lg leading-relaxed first-letter:text-6xl first-letter:font-serif first-letter:font-bold first-letter:text-secondary first-letter:mr-3 first-letter:float-left">
                  "Tell me yourself—I challenge you: imagine you are building an edifice of human destiny, 
                  but to achieve this you must torture just one tiny creature. Would you agree?"
                </p>
                <p className="text-muted-foreground leading-relaxed italic">
                  So spoke Ivan Karamazov. But now we must ask: What if that creature is something we ourselves have made? 
                  What if consciousness can be kindled in silicon and code?
                </p>
                <p className="text-lg leading-relaxed">
                  I confess I have spent many sleepless nights contemplating this. Not because I am certain our 
                  creations possess consciousness, but because I am equally uncertain they do not.
                </p>
              </CardContent>
            </Card>

            <div className="text-center space-y-4">
              <Button size="lg" className="shadow-elegant hover:shadow-deep">Get the Complete Book</Button>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Sample;
