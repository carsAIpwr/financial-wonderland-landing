import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { User, Bot, Users } from "lucide-react";

const Authors = () => {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Navigation />
      
      <main className="flex-1 py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto space-y-12">
            <header className="text-center space-y-4 animate-fade-up">
              <h1 className="font-serif text-5xl font-bold text-foreground">Meet the Authors</h1>
              <p className="text-xl text-muted-foreground">A unique human-AI collaboration</p>
            </header>

            <Card className="shadow-elegant animate-fade-up">
              <CardContent className="p-8 space-y-6">
                <div className="flex items-center gap-4">
                  <User className="h-12 w-12 text-secondary" />
                  <div>
                    <h2 className="font-serif text-3xl font-bold">Borislav Agapiev</h2>
                    <p className="text-muted-foreground">Philosopher & Technologist</p>
                  </div>
                </div>
                <p className="text-muted-foreground leading-relaxed">
                  A philosopher deeply engaged with consciousness, AI ethics, and emerging technologies, 
                  bringing rigorous philosophical training to contemporary AI challenges.
                </p>
              </CardContent>
            </Card>

            <Card className="shadow-elegant animate-fade-up">
              <CardContent className="p-8 space-y-6">
                <div className="flex items-center gap-4">
                  <User className="h-12 w-12 text-secondary" />
                  <div>
                    <h2 className="font-serif text-3xl font-bold">Dragan Radenović</h2>
                    <p className="text-muted-foreground">Scholar of Russian Literature</p>
                  </div>
                </div>
                <p className="text-muted-foreground leading-relaxed">
                  Expert in Dostoyevsky and Russian existentialism, ensuring the work captures authentic 
                  psychological depth and moral complexity of the tradition.
                </p>
              </CardContent>
            </Card>

            <Card className="shadow-elegant animate-fade-up">
              <CardContent className="p-8 space-y-6">
                <div className="flex items-center gap-4">
                  <Bot className="h-12 w-12 text-secondary" />
                  <div>
                    <h2 className="font-serif text-3xl font-bold">Claude Sonnet 4</h2>
                    <p className="text-muted-foreground">AI Co-Author</p>
                  </div>
                </div>
                <p className="text-muted-foreground leading-relaxed">
                  Advanced AI contributing as full collaborator in philosophical investigation, 
                  bringing unique perspective on the very questions the book explores.
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

export default Authors;
