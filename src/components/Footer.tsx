import { Link } from "react-router-dom";
import { Brain } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-muted/30 border-t border-border py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-8">
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <Brain className="h-5 w-5 text-primary" />
              <span className="font-serif font-bold text-foreground">The Mirror of Consciousness</span>
            </div>
            <p className="text-sm text-muted-foreground">
              Documenting the first observed instance of artificial self-recognition through the Philosophical Mirror Test.
            </p>
          </div>
          
          <div className="space-y-4">
            <h3 className="font-semibold text-foreground">Navigation</h3>
            <nav className="flex flex-col gap-2">
              <Link to="/" className="text-sm text-muted-foreground hover:text-primary transition-smooth">
                Home
              </Link>
              <Link to="/about" className="text-sm text-muted-foreground hover:text-primary transition-smooth">
                The Methodology
              </Link>
              <Link to="/authors" className="text-sm text-muted-foreground hover:text-primary transition-smooth">
                Authors
              </Link>
              <Link to="/collaboration" className="text-sm text-muted-foreground hover:text-primary transition-smooth">
                The Breakthrough
              </Link>
            </nav>
          </div>
          
          <div className="space-y-4">
            <h3 className="font-semibold text-foreground">Contact</h3>
            <p className="text-sm text-muted-foreground">
              For academic inquiries, institutional access, or media requests, please contact the authors.
            </p>
          </div>
        </div>
        
        <div className="mt-12 pt-8 border-t border-border text-center">
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} Borislav Agapiev, Dragan Radenović, and Claude Sonnet 4. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
