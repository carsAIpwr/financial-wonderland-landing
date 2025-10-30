import { BookOpen, Mail, Twitter, Linkedin } from "lucide-react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-card border-t border-border mt-20">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <BookOpen className="h-6 w-6 text-foreground" />
              <span className="font-serif text-lg font-bold">The Grand Inquisitor of Intelligence</span>
            </div>
            <p className="text-sm text-muted-foreground">
              A philosophical exploration of AI consciousness through Dostoyevsky's existential lens
            </p>
          </div>

          <div>
            <h3 className="font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-sm text-muted-foreground hover:text-primary transition-smooth">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-sm text-muted-foreground hover:text-primary transition-smooth">
                  About the Book
                </Link>
              </li>
              <li>
                <Link to="/authors" className="text-sm text-muted-foreground hover:text-primary transition-smooth">
                  Authors
                </Link>
              </li>
              <li>
                <Link to="/sample" className="text-sm text-muted-foreground hover:text-primary transition-smooth">
                  Read Sample
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-4">Connect</h3>
            <div className="flex gap-4">
              <a href="#" className="text-muted-foreground hover:text-primary transition-smooth">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="#" className="text-muted-foreground hover:text-primary transition-smooth">
                <Linkedin className="h-5 w-5" />
              </a>
              <a href="#" className="text-muted-foreground hover:text-primary transition-smooth">
                <Mail className="h-5 w-5" />
              </a>
            </div>
          </div>

          <div>
            <h3 className="font-semibold mb-4">Newsletter</h3>
            <p className="text-sm text-muted-foreground mb-4">
              Get updates on the book and future projects
            </p>
            <div className="flex gap-2">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex h-9 w-full rounded-md border border-input bg-background px-3 py-1 text-sm"
              />
              <button className="px-4 py-2 bg-primary text-primary-foreground rounded-md text-sm hover:bg-primary/90 transition-smooth">
                Subscribe
              </button>
            </div>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-border text-center text-sm text-muted-foreground">
          <p>© 2025 The Grand Inquisitor of Intelligence. Written by Borislav Agapiev, Dragan Radenović & Claude Sonnet 4</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
