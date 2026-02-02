import { Link } from "react-router-dom";
import { Mail, Phone, Linkedin, Youtube, Facebook, Twitter, Instagram } from "lucide-react";
import TedProgramsLinks from "./TedProgramsLinks";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer id="bottom" className="relative py-16 bg-card/50">
      {/* Decorative Top Line with Diamond */}
      <div className="absolute top-0 left-0 right-0 flex items-center justify-center -translate-y-1/2">
        <div className="w-full h-px bg-gradient-to-r from-transparent via-border to-transparent" />
        <div className="absolute w-2 h-2 rotate-45 bg-foreground/20 border border-foreground/10" />
      </div>

      <div className="container mx-auto px-4 lg:px-8">
        {/* Main Footer Content */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Brand & About */}
          <div className="lg:col-span-1">
            <Link
              to="/"
              onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
              className="inline-block mb-4 group select-none"
            >
              <span className="text-2xl font-black font-body tracking-tighter flex items-baseline">
                <span className="text-[#e62b1e]">TED</span>
                <span className="text-[#e62b1e] text-lg -translate-y-1 mx-px">x</span>
                <span className="text-white font-bold ml-1">JUET</span>
              </span>
            </Link>
            <p className="text-muted-foreground mb-4 text-sm leading-relaxed">
              TEDxJUET is an independently organized TED event, operating under
              license from TED. Our mission is to spread ideas worth sharing
              within the JUET community and beyond.
            </p>
            <p className="text-xs text-muted-foreground/70 italic">
              Pratibimb - Reflections of Tomorrow
            </p>
          </div>

          {/* TED Programs & Community Links */}
          <TedProgramsLinks />

          {/* Contact Us */}
          <div>
            <h3 className="font-display font-semibold text-foreground mb-4 text-lg">
              Contact Us
            </h3>
            <ul className="space-y-3">
              <li>
                <a
                  href="tel:+91XXXXXXXXXX"
                  className="text-muted-foreground hover:text-primary transition-colors text-sm flex items-center gap-2"
                >
                  <Phone className="w-4 h-4" />
                  +91 XXXXX XXXXX
                </a>
              </li>
              <li>
                <a
                  href="mailto:tedx@juet.ac.in"
                  className="text-muted-foreground hover:text-primary transition-colors text-sm flex items-center gap-2"
                >
                  <Mail className="w-4 h-4" />
                  tedx@juet.ac.in
                </a>
              </li>
            </ul>

            {/* Follow TED Social Links */}
            <div className="mt-6">
              <h4 className="font-display font-semibold text-foreground mb-3 text-sm">
                Follow TED
              </h4>
              <div className="flex gap-3">
                <a
                  href="https://www.linkedin.com/company/tedxjuet"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted-foreground hover:text-primary transition-colors"
                  aria-label="LinkedIn"
                >
                  <Linkedin className="w-5 h-5" />
                </a>
                <a
                  href="https://www.youtube.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted-foreground hover:text-primary transition-colors"
                  aria-label="YouTube"
                >
                  <Youtube className="w-5 h-5" />
                </a>
                <a
                  href="https://www.facebook.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted-foreground hover:text-primary transition-colors"
                  aria-label="Facebook"
                >
                  <Facebook className="w-5 h-5" />
                </a>
                <a
                  href="https://twitter.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted-foreground hover:text-primary transition-colors"
                  aria-label="Twitter"
                >
                  <Twitter className="w-5 h-5" />
                </a>
                <a
                  href="https://www.instagram.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted-foreground hover:text-primary transition-colors"
                  aria-label="Instagram"
                >
                  <Instagram className="w-5 h-5" />
                </a>
              </div>
              <a
                href="https://blog.ted.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary transition-colors text-sm inline-block mt-3"
              >
                TED Blog
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-border">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-muted-foreground text-sm text-center md:text-left">
              © {currentYear} TEDxJUET. All rights reserved.
            </p>
            <p className="text-muted-foreground/70 text-xs text-center md:text-right">
              This independent TEDx event is operated under license from TED.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
