import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";

const Collaboration = () => {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Navigation />
      
      <main className="flex-1 py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto space-y-12">
            <header className="text-center animate-fade-up">
              <h1 className="font-serif text-5xl font-bold text-foreground mb-4">The AI Collaboration</h1>
              <p className="text-xl text-muted-foreground">How humans and AI created philosophy together</p>
            </header>

            <Card className="shadow-elegant animate-fade-up">
              <CardContent className="p-8 space-y-6">
                <p className="text-lg text-foreground leading-relaxed first-letter:text-5xl first-letter:font-serif first-letter:font-bold first-letter:text-secondary first-letter:mr-2 first-letter:float-left">
                  The creation of this work represents an unprecedented experiment in collaborative philosophy. 
                  For the first time, a philosophical work of this depth emerged from genuine partnership between 
                  human thinkers and Claude Sonnet 4.
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  This was not AI as tool, but as full collaborator—contributing ideas, challenging assumptions, 
                  engaging in dialectical exchange that has characterized great philosophy since Socrates.
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  The meta-textual dimension is fascinating: we wrote a book questioning AI consciousness 
                  while collaborating with an AI uncertain about its own conscious experience—creating a 
                  strange loop of philosophical inquiry.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Collaboration;
