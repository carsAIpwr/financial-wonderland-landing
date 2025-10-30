import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { BookOpen, ArrowRight } from "lucide-react";

const Sample = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />
      
      <main className="flex-1">
        <section className="py-20 bg-gradient-to-br from-primary/5 to-secondary/5">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center space-y-6 animate-fade-up">
              <h1 className="font-serif text-5xl md:text-6xl font-bold">
                Read a <span className="text-gradient-wonderland">Sample</span>
              </h1>
              <p className="text-xl text-muted-foreground leading-relaxed">
                Experience the magic of Carroll's voice meeting modern finance
              </p>
            </div>
          </div>
        </section>

        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto space-y-12">
              
              <Card className="shadow-elegant animate-fade-up">
                <CardContent className="p-12 space-y-8">
                  <div className="text-center space-y-4">
                    <h2 className="font-serif text-3xl font-bold">Chapter III</h2>
                    <h3 className="font-serif text-2xl text-primary">The Caucus-Race of Capital</h3>
                  </div>

                  <div className="prose prose-lg max-w-none space-y-6 text-foreground">
                    <p className="first-letter:text-6xl first-letter:font-serif first-letter:font-bold first-letter:text-primary first-letter:mr-2 first-letter:float-left">
                      They were indeed a queer-looking party that assembled on the bank—the birds with 
                      draggled feathers, the animals with their fur clinging close to them, and all 
                      dripping wet, cross, and uncomfortable. Alice found herself quite bewildered by 
                      the financial instruments scattered about the shore like so many seashells.
                    </p>

                    <p>
                      "What are these curious things?" asked Alice, picking up what appeared to be a 
                      promissory note, though it kept changing its denomination most disconcertingly.
                    </p>

                    <p>
                      "Why, those are derivatives, my dear," explained the Dodo, who seemed to be the 
                      authority on such matters. "They derive their value from something else entirely, 
                      you see. Rather like how a shadow derives its shape from the object that casts it, 
                      though considerably more useful in financial markets."
                    </p>

                    <p>
                      "But how does one race with capital?" Alice inquired, for she was now quite 
                      curious about this Caucus-Race they kept mentioning.
                    </p>

                    <p>
                      The Dodo pondered this for a moment, then suddenly exclaimed, "The best way to 
                      explain it is to do it!" And indeed, that was quite true, though Alice thought 
                      that an explanation beforehand might have been more prudent.
                    </p>

                    <p>
                      First, they marked out a race-course of sorts, though it was rather irregular in 
                      shape and seemed to curve back upon itself in the most perplexing manner—much like 
                      compound interest, the Dodo explained, which grows not in a straight line but in an 
                      ever-accelerating curve that loops back to reinvest its gains.
                    </p>

                    <p>
                      "There is no starting gun," announced the Dodo, "for in the market, one must begin 
                      when opportunity presents itself, not when some arbitrary signal sounds. And there 
                      is no finish line, for the race of capital accumulation continues indefinitely!"
                    </p>

                    <p>
                      This seemed most unsatisfactory to Alice, who was accustomed to races having both 
                      beginnings and endings, but she supposed that financial matters must operate by 
                      different rules than foot-races in her world.
                    </p>

                    <p>
                      Everyone started running at different times and stopped whenever they felt like it, 
                      which struck Alice as remarkably similar to how investors enter and exit markets 
                      according to their own strategies and risk tolerances. Some ran in circles—"chasing 
                      trends," the Dodo called it—while others ran in perfectly straight lines, which he 
                      termed "index investing."
                    </p>

                    <p>
                      "But who has won?" Alice asked after they had been running for approximately half 
                      an hour.
                    </p>

                    <p>
                      "Everybody has won," declared the Dodo solemnly, "and everybody must have prizes!"
                    </p>

                    <p>
                      This concept troubled Alice considerably. "But surely someone must have done better 
                      than the others?"
                    </p>

                    <p>
                      "Ah," said the Dodo wisely, "that depends entirely on how you measure success. Some 
                      gained absolute returns, others relative returns, and still others gained knowledge 
                      and experience, which are perhaps the most valuable prizes of all. In the Caucus-Race 
                      of Capital, one might finish with fewer coins but greater wisdom, and who is to say 
                      which runner truly won?"
                    </p>
                  </div>
                </CardContent>
              </Card>

              <div className="text-center space-y-6 animate-fade-up">
                <p className="text-xl text-muted-foreground italic">
                  Curious to see how Alice navigates the Mad Hatter's portfolio diversification 
                  or the Queen's tyrannical approach to market regulation?
                </p>
                <Button size="lg" className="bg-primary hover:bg-primary/90 text-lg px-12">
                  <BookOpen className="mr-2 h-5 w-5" />
                  Get the Full Book
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </div>

              <Card className="bg-muted/30 animate-fade-up">
                <CardContent className="p-8 space-y-4">
                  <h3 className="font-serif text-2xl font-bold">What Readers Are Saying</h3>
                  <div className="space-y-6">
                    <blockquote className="border-l-4 border-primary pl-4 italic text-muted-foreground">
                      "I genuinely couldn't believe this was written with AI collaboration. The Carroll 
                      voice is perfect, and the financial concepts are explained with such wit and clarity. 
                      A masterpiece!"
                    </blockquote>
                    <blockquote className="border-l-4 border-secondary pl-4 italic text-muted-foreground">
                      "Finally, a finance book that's actually enjoyable to read! The storytelling makes 
                      complex topics accessible without dumbing them down. Pure brilliance."
                    </blockquote>
                    <blockquote className="border-l-4 border-accent pl-4 italic text-muted-foreground">
                      "This book represents a watershed moment for AI in creative fields. The quality 
                      speaks for itself—this is literature, not just generated text."
                    </blockquote>
                  </div>
                </CardContent>
              </Card>

            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Sample;
