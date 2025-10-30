import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { User, Bot, Handshake } from "lucide-react";

const Authors = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />
      
      <main className="flex-1">
        <section className="py-20 bg-gradient-to-br from-primary/5 to-secondary/5">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center space-y-6 animate-fade-up">
              <h1 className="font-serif text-5xl md:text-6xl font-bold">
                Meet the <span className="text-gradient-gold">Authors</span>
              </h1>
              <p className="text-xl text-muted-foreground leading-relaxed">
                A pioneering partnership between human creativity and artificial intelligence
              </p>
            </div>
          </div>
        </section>

        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-5xl mx-auto space-y-16">
              
              {/* Borislav Agapiev */}
              <Card className="shadow-elegant overflow-hidden animate-fade-up">
                <div className="grid md:grid-cols-5 gap-8">
                  <div className="md:col-span-2 bg-gradient-to-br from-primary/10 to-secondary/10 p-8 flex items-center justify-center">
                    <div className="h-48 w-48 rounded-full bg-primary/20 flex items-center justify-center">
                      <User className="h-24 w-24 text-primary" />
                    </div>
                  </div>
                  <CardContent className="md:col-span-3 p-8 space-y-4">
                    <h2 className="font-serif text-4xl font-bold">Borislav Agapiev</h2>
                    <p className="text-xl text-primary font-semibold">Human Author & Visionary</p>
                    <div className="space-y-4 text-muted-foreground">
                      <p>
                        Borislav Agapiev brings a unique blend of literary passion and financial 
                        expertise to this groundbreaking project. With a deep appreciation for classical 
                        literature and a keen understanding of modern finance, he conceived the ambitious 
                        vision of merging Lewis Carroll's whimsical storytelling with practical financial 
                        education.
                      </p>
                      <p>
                        His role as the human author involved carefully guiding the narrative direction, 
                        ensuring authenticity to Carroll's style, and maintaining the delicate balance 
                        between entertainment and education. Borislav's editorial vision and creative 
                        leadership were essential in achieving the book's unprecedented quality.
                      </p>
                      <p>
                        A pioneer in exploring the potential of human-AI collaboration, Borislav saw 
                        not just the opportunity to create a unique book, but to demonstrate what becomes 
                        possible when human creativity and artificial intelligence work in true partnership.
                      </p>
                    </div>
                  </CardContent>
                </div>
              </Card>

              {/* ChatGPT-4.5 */}
              <Card className="shadow-elegant overflow-hidden animate-fade-up">
                <div className="grid md:grid-cols-5 gap-8">
                  <div className="md:col-span-2 bg-gradient-to-br from-secondary/10 to-accent/10 p-8 flex items-center justify-center order-last md:order-first">
                    <div className="h-48 w-48 rounded-full bg-secondary/20 flex items-center justify-center">
                      <Bot className="h-24 w-24 text-secondary" />
                    </div>
                  </div>
                  <CardContent className="md:col-span-3 p-8 space-y-4 order-first md:order-last">
                    <h2 className="font-serif text-4xl font-bold">ChatGPT-4.5</h2>
                    <p className="text-xl text-secondary font-semibold">AI Co-Author & Creative Partner</p>
                    <div className="space-y-4 text-muted-foreground">
                      <p>
                        ChatGPT-4.5 represents the cutting edge of language AI, capable of understanding 
                        nuanced literary styles and generating creative content that captures the essence 
                        of historical authors. For this project, it was trained to internalize Lewis 
                        Carroll's distinctive voice, from his playful wordplay to his philosophical depth.
                      </p>
                      <p>
                        The AI's contribution went far beyond simple text generation. It engaged in 
                        iterative creative dialogue with Borislav, suggesting narrative directions, 
                        refining metaphors, and ensuring each chapter maintained both literary quality 
                        and educational value. The result is prose so natural that readers consistently 
                        express amazement at AI involvement.
                      </p>
                      <p>
                        This collaboration marks a significant milestone in demonstrating AI's potential 
                        as a genuine creative partner rather than just a tool. ChatGPT-4.5's role in 
                        this book challenges our assumptions about creativity, authorship, and the future 
                        of literature.
                      </p>
                    </div>
                  </CardContent>
                </div>
              </Card>

              {/* The Collaboration */}
              <div className="mt-16 animate-fade-up">
                <div className="text-center mb-12">
                  <div className="inline-flex h-16 w-16 rounded-full bg-accent/20 items-center justify-center mb-4">
                    <Handshake className="h-8 w-8 text-accent" />
                  </div>
                  <h2 className="font-serif text-4xl font-bold mb-4">The Partnership</h2>
                  <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                    How human and artificial intelligence came together to create something extraordinary
                  </p>
                </div>

                <Card className="shadow-elegant">
                  <CardContent className="p-8 space-y-6">
                    <div className="prose prose-lg max-w-none">
                      <p className="text-muted-foreground">
                        The creation of "Alice in Financial Wonderland" was truly a collaborative journey. 
                        Borislav would present concepts, themes, and creative directions, while ChatGPT-4.5 
                        would generate text that Borislav then refined, expanded, or redirected. This 
                        iterative process continued through multiple rounds until each passage achieved 
                        the perfect balance of style, substance, and storytelling.
                      </p>
                      <p className="text-muted-foreground">
                        What makes this collaboration unique is the genuine synergy achieved. Neither 
                        Borislav alone nor the AI alone could have created this book. It required human 
                        vision, editorial judgment, and creative leadership combined with AI's vast 
                        knowledge, linguistic capability, and tireless ability to iterate and refine.
                      </p>
                      <p className="text-muted-foreground">
                        The result is a book that stands as proof of concept for a new era of creative 
                        collaboration—one where artificial intelligence doesn't replace human creativity 
                        but amplifies it, enabling works of quality and ambition that push the boundaries 
                        of what's possible.
                      </p>
                    </div>
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

export default Authors;
