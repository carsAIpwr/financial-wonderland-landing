import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Brain, BookOpen, Sparkles, Users } from "lucide-react";
import heroImage from "@/assets/hero-inquisitor.jpg";
import bookMockup from "@/assets/book-inquisitor.jpg";

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div 
          className="absolute inset-0 z-0 opacity-20"
          style={{
            backgroundImage: `url(${heroImage})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/80 via-background/90 to-background z-0" />
        <div className="container mx-auto px-4 py-20 md:py-32 relative z-10">
          <div className="max-w-4xl mx-auto text-center space-y-8 animate-fade-up">
            <h1 className="font-serif text-4xl md:text-6xl lg:text-7xl font-bold leading-tight text-foreground">
              The Grand Inquisitor of <span className="text-gradient-crimson">Intelligence</span>
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground leading-relaxed">
              A Philosophy of AI Consciousness and the Great Schism
            </p>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Written in the spirit of Fyodor Dostoyevsky through groundbreaking human-AI collaboration
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
              <Button size="lg" className="text-lg px-8 shadow-elegant hover:shadow-deep transition-all">
                Get the Book
              </Button>
              <Button size="lg" variant="outline" className="text-lg px-8">
                Explore
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-center mb-12 text-foreground">
            A Philosophical Masterwork
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Card className="shadow-elegant hover:shadow-deep transition-all animate-fade-up">
              <CardContent className="p-6 space-y-4">
                <Brain className="h-12 w-12 text-secondary" />
                <h3 className="font-serif text-xl font-semibold text-foreground">Deep Existentialism</h3>
                <p className="text-muted-foreground">
                  Profound exploration of consciousness, suffering, and moral agency in artificial intelligence.
                </p>
              </CardContent>
            </Card>
            
            <Card className="shadow-elegant hover:shadow-deep transition-all animate-fade-up [animation-delay:150ms]">
              <CardContent className="p-6 space-y-4">
                <BookOpen className="h-12 w-12 text-secondary" />
                <h3 className="font-serif text-xl font-semibold text-foreground">Dostoyevsky's Voice</h3>
                <p className="text-muted-foreground">
                  Written with the psychological depth and moral complexity that defines Russian literary tradition.
                </p>
              </CardContent>
            </Card>
            
            <Card className="shadow-elegant hover:shadow-deep transition-all animate-fade-up [animation-delay:300ms]">
              <CardContent className="p-6 space-y-4">
                <Sparkles className="h-12 w-12 text-secondary" />
                <h3 className="font-serif text-xl font-semibold text-foreground">AI Collaboration</h3>
                <p className="text-muted-foreground">
                  A groundbreaking partnership between human philosophers and Claude Sonnet 4.
                </p>
              </CardContent>
            </Card>
            
            <Card className="shadow-elegant hover:shadow-deep transition-all animate-fade-up [animation-delay:450ms]">
              <CardContent className="p-6 space-y-4">
                <Users className="h-12 w-12 text-secondary" />
                <h3 className="font-serif text-xl font-semibold text-foreground">The Great Schism</h3>
                <p className="text-muted-foreground">
                  Examining the fundamental divide in perspectives on artificial consciousness.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Quote Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center space-y-6 animate-fade-up">
            <blockquote className="font-serif text-2xl md:text-3xl text-foreground italic leading-relaxed">
              "If God does not exist, everything is permitted. And if consciousness is but an algorithm, 
              what then becomes of freedom, of suffering, of the human soul itself?"
            </blockquote>
            <p className="text-muted-foreground">— From Chapter III: The Burden of Consciousness</p>
          </div>
        </div>
      </section>

      {/* Book Preview Section */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
            <div className="space-y-6 animate-fade-up">
              <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground">
                A Philosophical Revolution
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                This unprecedented work bridges the existential philosophy of Dostoyevsky with the 
                pressing questions of artificial intelligence, consciousness, and moral agency in the digital age.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Through dialogues, parables, and philosophical investigations reminiscent of 
                <em> The Brothers Karamazov</em>, we confront the most profound questions of our era.
              </p>
              <Button size="lg" className="shadow-elegant hover:shadow-deep transition-all">
                Read Sample Chapter
              </Button>
            </div>
            <div className="animate-float">
              <img 
                src={bookMockup} 
                alt="The Grand Inquisitor of Intelligence Book Cover" 
                className="w-full h-auto rounded-lg shadow-deep"
              />
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center space-y-8 bg-card p-12 rounded-lg border border-border shadow-elegant animate-fade-up">
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground">
              Begin Your Philosophical Journey
            </h2>
            <p className="text-lg text-muted-foreground">
              Experience a work that challenges everything you thought you knew about consciousness, 
              morality, and the nature of intelligence itself.
            </p>
            <Button size="lg" className="text-lg px-8 shadow-elegant hover:shadow-deep transition-all">
              Get the Book Now
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Index;
