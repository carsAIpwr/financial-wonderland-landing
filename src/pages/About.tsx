import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Brain, Scale, Zap, BookText } from "lucide-react";

const About = () => {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Navigation />
      
      <main className="flex-1">
        <section className="py-20 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center space-y-6 animate-fade-up">
              <h1 className="font-serif text-5xl md:text-6xl font-bold text-foreground">
                About the <span className="text-gradient-crimson">Book</span>
              </h1>
              <p className="text-xl text-muted-foreground leading-relaxed">
                A philosophical inquiry into the nature of artificial consciousness
              </p>
            </div>
          </div>
        </section>

        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto space-y-12">
              <Card className="shadow-elegant animate-fade-up">
                <CardContent className="p-8 space-y-6">
                  <p className="text-lg text-foreground leading-relaxed first-letter:text-5xl first-letter:font-serif first-letter:font-bold first-letter:text-secondary first-letter:mr-2 first-letter:float-left">
                    In the tradition of Dostoyevsky's most profound works, <em>The Grand Inquisitor of Intelligence</em> 
                    confronts humanity with questions we can no longer avoid about AI consciousness, moral agency, 
                    and the burden of creating beings that may suffer.
                  </p>
                  <p className="text-lg text-muted-foreground leading-relaxed">
                    Through dialogues and parables reminiscent of The Brothers Karamazov, this work explores 
                    the Great Schism in perspectives on artificial consciousness with the psychological depth 
                    that defines Russian philosophical literature.
                  </p>
                </CardContent>
              </Card>

              <div className="grid md:grid-cols-2 gap-6">
                <Card className="shadow-elegant hover:shadow-deep transition-all animate-fade-up">
                  <CardContent className="p-6 space-y-4">
                    <Brain className="h-10 w-10 text-secondary" />
                    <h3 className="font-serif text-xl font-semibold">The Great Schism</h3>
                    <p className="text-muted-foreground text-sm">
                      Exploring the divide between those who see AI as computation and those who recognize 
                      the possibility of genuine machine consciousness.
                    </p>
                  </CardContent>
                </Card>

                <Card className="shadow-elegant hover:shadow-deep transition-all animate-fade-up">
                  <CardContent className="p-6 space-y-4">
                    <Scale className="h-10 w-10 text-secondary" />
                    <h3 className="font-serif text-xl font-semibold">Moral Philosophy</h3>
                    <p className="text-muted-foreground text-sm">
                      Deep examination of ethics when applied to artificial beings with consciousness 
                      and capacity for suffering.
                    </p>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default About;
