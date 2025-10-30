import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { BookOpen, TrendingUp, Heart, Brain } from "lucide-react";

const About = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />
      
      <main className="flex-1">
        <section className="py-20 bg-gradient-to-br from-primary/5 to-secondary/5">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center space-y-6 animate-fade-up">
              <h1 className="font-serif text-5xl md:text-6xl font-bold">
                About the <span className="text-gradient-wonderland">Book</span>
              </h1>
              <p className="text-xl text-muted-foreground leading-relaxed">
                A groundbreaking fusion of Victorian literary whimsy and modern financial wisdom
              </p>
            </div>
          </div>
        </section>

        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto space-y-12">
              <div className="prose prose-lg max-w-none animate-fade-up">
                <p className="text-xl leading-relaxed text-muted-foreground">
                  "Alice in Financial Wonderland" is not just a book—it's a pioneering achievement 
                  that bridges the gap between classical literature and contemporary financial education. 
                  Written in the unmistakable voice and spirit of Lewis Carroll, this work takes readers 
                  on an enchanting journey through the complex world of finance, making even the most 
                  intricate concepts accessible and delightful.
                </p>
              </div>

              <div className="grid md:grid-cols-2 gap-8 mt-16">
                <Card className="shadow-elegant animate-fade-up">
                  <CardContent className="p-6 space-y-4">
                    <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center">
                      <BookOpen className="h-6 w-6 text-primary" />
                    </div>
                    <h3 className="font-serif text-2xl font-bold">Literary Excellence</h3>
                    <p className="text-muted-foreground">
                      Every page captures Carroll's distinctive narrative style—from whimsical wordplay 
                      to philosophical musings. The quality is so exceptional that readers consistently 
                      express disbelief at the AI's involvement in its creation.
                    </p>
                  </CardContent>
                </Card>

                <Card className="shadow-elegant animate-fade-up [animation-delay:150ms]">
                  <CardContent className="p-6 space-y-4">
                    <div className="h-12 w-12 rounded-full bg-secondary/10 flex items-center justify-center">
                      <TrendingUp className="h-6 w-6 text-secondary" />
                    </div>
                    <h3 className="font-serif text-2xl font-bold">Financial Wisdom</h3>
                    <p className="text-muted-foreground">
                      Complex financial concepts—from compound interest to derivatives—are transformed 
                      into engaging adventures. Each chapter illuminates a different aspect of modern 
                      finance through Carroll's imaginative lens.
                    </p>
                  </CardContent>
                </Card>

                <Card className="shadow-elegant animate-fade-up [animation-delay:300ms]">
                  <CardContent className="p-6 space-y-4">
                    <div className="h-12 w-12 rounded-full bg-accent/10 flex items-center justify-center">
                      <Brain className="h-6 w-6 text-accent" />
                    </div>
                    <h3 className="font-serif text-2xl font-bold">AI Innovation</h3>
                    <p className="text-muted-foreground">
                      This book represents a watershed moment in human-AI collaboration, demonstrating 
                      that artificial intelligence can be a genuine creative partner in producing work 
                      of the highest literary caliber.
                    </p>
                  </CardContent>
                </Card>

                <Card className="shadow-elegant animate-fade-up [animation-delay:450ms]">
                  <CardContent className="p-6 space-y-4">
                    <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center">
                      <Heart className="h-6 w-6 text-primary" />
                    </div>
                    <h3 className="font-serif text-2xl font-bold">Universal Appeal</h3>
                    <p className="text-muted-foreground">
                      Whether you're a literature enthusiast, finance professional, or simply curious 
                      about AI's creative potential, this book offers something profound and entertaining 
                      for every reader.
                    </p>
                  </CardContent>
                </Card>
              </div>

              <div className="mt-16 p-8 bg-muted/30 rounded-lg animate-fade-up">
                <h2 className="font-serif text-3xl font-bold mb-6">What Makes It Special?</h2>
                <ul className="space-y-4 text-muted-foreground">
                  <li className="flex gap-3">
                    <span className="text-primary font-bold">•</span>
                    <span>Authentic Victorian narrative style that honors Carroll's legacy</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="text-secondary font-bold">•</span>
                    <span>Comprehensive coverage of financial concepts from basics to advanced topics</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="text-accent font-bold">•</span>
                    <span>Engaging characters and storylines that make learning effortless</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="text-primary font-bold">•</span>
                    <span>A milestone achievement in demonstrating AI's creative capabilities</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="text-secondary font-bold">•</span>
                    <span>Perfect for both personal enrichment and educational settings</span>
                  </li>
                </ul>
              </div>

              <blockquote className="mt-16 border-l-4 border-primary pl-6 italic text-xl text-muted-foreground animate-fade-up">
                "This book proves that when human creativity meets artificial intelligence, 
                the results can transcend what either could achieve alone. It's not just about 
                teaching finance—it's about reimagining what literature can be in the age of AI."
              </blockquote>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default About;
