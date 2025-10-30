import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { BookOpen, Sparkles, Users, Award } from "lucide-react";
import heroImage from "@/assets/hero-wonderland.jpg";
import bookMockup from "@/assets/book-mockup.jpg";

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col">
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
        <div className="container mx-auto px-4 py-20 md:py-32 relative z-10">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6 animate-fade-up">
              <h1 className="font-serif text-5xl md:text-7xl font-bold leading-tight">
                <span className="text-gradient-wonderland">Alice</span> in{" "}
                <span className="text-gradient-gold">Financial</span>{" "}
                Wonderland
              </h1>
              <p className="text-xl text-muted-foreground leading-relaxed">
                Where Lewis Carroll meets Wall Street in a groundbreaking literary journey through the looking glass of modern finance
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="bg-primary hover:bg-primary/90 text-lg px-8">
                  <BookOpen className="mr-2 h-5 w-5" />
                  Get the Book
                </Button>
                <Button size="lg" variant="outline" className="text-lg px-8">
                  Read Sample Chapter
                </Button>
              </div>
              <p className="text-sm text-muted-foreground italic">
                By Borislav Agapiev & ChatGPT-4.5
              </p>
            </div>
            
            <div className="relative animate-fade-in">
              <img 
                src={bookMockup} 
                alt="Alice in Financial Wonderland Book Cover"
                className="w-full max-w-md mx-auto shadow-elegant rounded-lg animate-float"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12 animate-fade-up">
            <h2 className="font-serif text-4xl font-bold mb-4">
              A New Chapter in Literary Innovation
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              The highest quality human-AI collaboration you never thought possible
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mt-12">
            <Card className="shadow-elegant hover:shadow-glow transition-smooth animate-fade-up">
              <CardContent className="p-6 space-y-4">
                <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center">
                  <Sparkles className="h-6 w-6 text-primary" />
                </div>
                <h3 className="font-serif text-2xl font-bold">Carroll's Voice</h3>
                <p className="text-muted-foreground">
                  Written in the authentic spirit and whimsical style of Lewis Carroll, bringing financial concepts to life through literary magic
                </p>
              </CardContent>
            </Card>

            <Card className="shadow-elegant hover:shadow-glow transition-smooth animate-fade-up [animation-delay:150ms]">
              <CardContent className="p-6 space-y-4">
                <div className="h-12 w-12 rounded-full bg-secondary/10 flex items-center justify-center">
                  <Users className="h-6 w-6 text-secondary" />
                </div>
                <h3 className="font-serif text-2xl font-bold">Human-AI Synergy</h3>
                <p className="text-muted-foreground">
                  A pioneering collaboration between Borislav Agapiev and ChatGPT-4.5, setting new standards for creative AI partnerships
                </p>
              </CardContent>
            </Card>

            <Card className="shadow-elegant hover:shadow-glow transition-smooth animate-fade-up [animation-delay:300ms]">
              <CardContent className="p-6 space-y-4">
                <div className="h-12 w-12 rounded-full bg-accent/10 flex items-center justify-center">
                  <Award className="h-6 w-6 text-accent" />
                </div>
                <h3 className="font-serif text-2xl font-bold">Unprecedented Quality</h3>
                <p className="text-muted-foreground">
                  So masterfully crafted, you'll find it hard to believe AI played a role. A true testament to what's possible
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Quote Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <blockquote className="max-w-4xl mx-auto text-center space-y-6 animate-fade-up">
            <p className="font-serif text-3xl md:text-4xl italic text-foreground leading-relaxed">
              "Curiouser and curiouser! Down the rabbit hole of derivatives and dividends, where the Mad Hatter's tea party meets the trading floor, and the Cheshire Cat grins at compound interest."
            </p>
            <footer className="text-muted-foreground">
              — From Chapter III: The Caucus-Race of Capital
            </footer>
          </blockquote>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-primary/5 via-secondary/5 to-accent/5">
        <div className="container mx-auto px-4 text-center space-y-8 animate-fade-up">
          <h2 className="font-serif text-4xl md:text-5xl font-bold">
            Begin Your Journey Down the Rabbit Hole
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Experience the book that proves AI collaboration can create literary masterpieces
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-primary hover:bg-primary/90 text-lg px-12">
              Purchase Now
            </Button>
            <Button size="lg" variant="outline" className="text-lg px-12">
              Learn More About the Authors
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Index;
