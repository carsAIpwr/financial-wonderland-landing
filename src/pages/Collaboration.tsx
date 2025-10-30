import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Lightbulb, GitBranch, Sparkles, Target, RefreshCw, Award } from "lucide-react";

const Collaboration = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />
      
      <main className="flex-1">
        <section className="py-20 bg-gradient-to-br from-primary/5 to-secondary/5">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center space-y-6 animate-fade-up">
              <h1 className="font-serif text-5xl md:text-6xl font-bold">
                The <span className="text-gradient-wonderland">AI Collaboration</span> Story
              </h1>
              <p className="text-xl text-muted-foreground leading-relaxed">
                Behind the scenes of a groundbreaking human-AI creative partnership
              </p>
            </div>
          </div>
        </section>

        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto space-y-16">
              
              <div className="prose prose-lg max-w-none animate-fade-up">
                <p className="text-xl leading-relaxed text-muted-foreground">
                  "Alice in Financial Wonderland" represents more than just a book—it's a proof of concept 
                  for what becomes possible when human creativity and artificial intelligence work together 
                  in true partnership. This page pulls back the curtain to reveal the fascinating process 
                  behind its creation.
                </p>
              </div>

              <div className="space-y-8">
                <h2 className="font-serif text-4xl font-bold text-center mb-12 animate-fade-up">
                  The Creative Process
                </h2>

                <Card className="shadow-elegant animate-fade-up">
                  <CardContent className="p-8 space-y-4">
                    <div className="flex items-start gap-4">
                      <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                        <Lightbulb className="h-6 w-6 text-primary" />
                      </div>
                      <div>
                        <h3 className="font-serif text-2xl font-bold mb-2">1. Vision & Concept</h3>
                        <p className="text-muted-foreground">
                          Borislav began with a bold vision: to create a book that would teach financial 
                          concepts through the beloved lens of Lewis Carroll's literary style. This required 
                          not just understanding finance and literature, but recognizing how Carroll's 
                          whimsical approach to logic and language could illuminate complex financial topics.
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="shadow-elegant animate-fade-up">
                  <CardContent className="p-8 space-y-4">
                    <div className="flex items-start gap-4">
                      <div className="h-12 w-12 rounded-full bg-secondary/10 flex items-center justify-center flex-shrink-0">
                        <Target className="h-6 w-6 text-secondary" />
                      </div>
                      <div>
                        <h3 className="font-serif text-2xl font-bold mb-2">2. AI Training & Direction</h3>
                        <p className="text-muted-foreground">
                          ChatGPT-4.5 was carefully prompted to internalize Carroll's voice. This involved 
                          extensive analysis of Carroll's original works, identifying his characteristic 
                          patterns: wordplay, logical paradoxes, nonsense verse, philosophical asides, and 
                          the particular rhythm of his prose. The AI learned not just to mimic these patterns, 
                          but to apply them meaningfully to financial concepts.
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="shadow-elegant animate-fade-up">
                  <CardContent className="p-8 space-y-4">
                    <div className="flex items-start gap-4">
                      <div className="h-12 w-12 rounded-full bg-accent/10 flex items-center justify-center flex-shrink-0">
                        <GitBranch className="h-6 w-6 text-accent" />
                      </div>
                      <div>
                        <h3 className="font-serif text-2xl font-bold mb-2">3. Iterative Co-Creation</h3>
                        <p className="text-muted-foreground">
                          Each chapter emerged through an iterative dialogue. Borislav would outline a 
                          financial concept to explore. The AI would generate draft text in Carroll's style. 
                          Borislav would review, provide feedback, suggest refinements, and redirect where 
                          needed. The AI would revise. This cycle continued—sometimes dozens of times per 
                          chapter—until each passage achieved the perfect synthesis of education and entertainment.
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="shadow-elegant animate-fade-up">
                  <CardContent className="p-8 space-y-4">
                    <div className="flex items-start gap-4">
                      <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                        <RefreshCw className="h-6 w-6 text-primary" />
                      </div>
                      <div>
                        <h3 className="font-serif text-2xl font-bold mb-2">4. Refinement & Polish</h3>
                        <p className="text-muted-foreground">
                          Borislav's role as human editor was crucial in the final stages. While the AI 
                          generated consistently high-quality prose, it was human judgment that ensured 
                          narrative coherence, appropriate pacing, and that perfect balance between 
                          accessibility and sophistication. Every word in the final manuscript was reviewed, 
                          considered, and approved by Borislav.
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="shadow-elegant animate-fade-up">
                  <CardContent className="p-8 space-y-4">
                    <div className="flex items-start gap-4">
                      <div className="h-12 w-12 rounded-full bg-secondary/10 flex items-center justify-center flex-shrink-0">
                        <Sparkles className="h-6 w-6 text-secondary" />
                      </div>
                      <div>
                        <h3 className="font-serif text-2xl font-bold mb-2">5. Synergy & Magic</h3>
                        <p className="text-muted-foreground">
                          The magic of this collaboration lies in what neither could achieve alone. The AI 
                          brought tireless creativity, vast knowledge, and the ability to generate endless 
                          variations. Borislav brought vision, judgment, understanding of audience, and the 
                          human touch that transforms good writing into great literature. Together, they 
                          created something genuinely new.
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>

              <div className="mt-16 animate-fade-up">
                <Card className="bg-gradient-to-br from-primary/10 to-secondary/10 shadow-elegant">
                  <CardContent className="p-12 space-y-6 text-center">
                    <div className="inline-flex h-16 w-16 rounded-full bg-accent/20 items-center justify-center">
                      <Award className="h-8 w-8 text-accent" />
                    </div>
                    <h2 className="font-serif text-3xl font-bold">Why This Matters</h2>
                    <div className="space-y-4 text-muted-foreground max-w-2xl mx-auto">
                      <p>
                        This book challenges common assumptions about AI and creativity. Many believe AI 
                        can only produce derivative or mediocre content. "Alice in Financial Wonderland" 
                        proves otherwise—demonstrating that when used thoughtfully, AI can be a genuine 
                        creative partner capable of contributing to work of the highest quality.
                      </p>
                      <p>
                        More importantly, it offers a glimpse of the future. As AI capabilities continue 
                        to advance, collaborations like this one will become more common, enabling creators 
                        to achieve ambitions previously impossible. The question is not whether AI will 
                        replace human creativity, but how humans and AI working together will expand the 
                        boundaries of what's creatively possible.
                      </p>
                      <p className="font-semibold text-foreground">
                        "Alice in Financial Wonderland" is not the end of this journey—it's the beginning.
                      </p>
                    </div>
                  </CardContent>
                </Card>
              </div>

              <div className="mt-16 space-y-8 animate-fade-up">
                <h2 className="font-serif text-4xl font-bold text-center">Lessons Learned</h2>
                
                <div className="grid md:grid-cols-2 gap-6">
                  <Card className="shadow-elegant">
                    <CardContent className="p-6 space-y-3">
                      <h3 className="font-serif text-xl font-bold text-primary">Clear Vision Required</h3>
                      <p className="text-sm text-muted-foreground">
                        Success required Borislav to have a crystal-clear vision of what the book should 
                        achieve. Vague goals would have produced vague results.
                      </p>
                    </CardContent>
                  </Card>

                  <Card className="shadow-elegant">
                    <CardContent className="p-6 space-y-3">
                      <h3 className="font-serif text-xl font-bold text-secondary">Iteration is Key</h3>
                      <p className="text-sm text-muted-foreground">
                        The first draft was never the final draft. Excellence emerged through persistent 
                        refinement and the willingness to try again until it was right.
                      </p>
                    </CardContent>
                  </Card>

                  <Card className="shadow-elegant">
                    <CardContent className="p-6 space-y-3">
                      <h3 className="font-serif text-xl font-bold text-accent">Human Judgment Essential</h3>
                      <p className="text-sm text-muted-foreground">
                        The AI generated the prose, but human editorial judgment determined which prose 
                        made it into the book and ensured overall coherence.
                      </p>
                    </CardContent>
                  </Card>

                  <Card className="shadow-elegant">
                    <CardContent className="p-6 space-y-3">
                      <h3 className="font-serif text-xl font-bold text-primary">AI Amplifies Creativity</h3>
                      <p className="text-sm text-muted-foreground">
                        Rather than limiting creativity, the AI expanded what was possible—enabling 
                        explorations and variations that would have taken years manually.
                      </p>
                    </CardContent>
                  </Card>
                </div>
              </div>

            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Collaboration;
