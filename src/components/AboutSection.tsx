import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { useState } from "react";

const AboutSection = () => {
  const [isFlipped, setIsFlipped] = useState(false);

  return (
    <section id="about" className="py-12 lg:py-16 bg-black">
      <div className="container mx-auto px-4 lg:px-8 max-w-7xl">
        {/* About Us Heading with Decorative Lines */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="relative mb-20"
        >
          {/* Centered heading with lines */}
          <div className="flex items-center justify-center gap-6">
            <div className="flex-1 h-px bg-gradient-to-r from-transparent via-border to-border" />

            {/* Left vertical decoration */}
            <div className="flex flex-col items-center gap-2">
              <div className="w-px h-4 bg-border" />
              <div className="w-2 h-2 rotate-45 bg-border" />
              <div className="w-px h-4 bg-border" />
            </div>

            <h2 className="text-4xl md:text-5xl font-serif text-foreground whitespace-nowrap">
              About Us
            </h2>

            {/* Right vertical decoration */}
            <div className="flex flex-col items-center gap-2">
              <div className="w-px h-4 bg-border" />
              <div className="w-2 h-2 rotate-45 bg-border" />
              <div className="w-px h-4 bg-border" />
            </div>

            <div className="flex-1 h-px bg-gradient-to-l from-transparent via-border to-border" />
          </div>
        </motion.div>

        {/* Two Column Layout */}
        <div className="grid lg:grid-cols-2 gap-16 mb-12 relative">
          {/* Left Column - TEDx JUET */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h3 className="text-xl font-semibold mb-6">
              <span className="text-primary">TED</span>
              <span className="text-sm align-super text-primary">x</span>
              <span className="text-foreground"> JUET</span>
            </h3>
            <div className="space-y-6 text-lg text-muted-foreground/90 leading-relaxed">
              <p>
                TEDxJUET, founded in 2024, brings the spirit of TED to the Jaypee University of Engineering and Technology community. It's a platform to inspire, motivate, and showcase talent, encouraging individuals to push their limits and shine like diamonds.
              </p>
              <p>
                As one of the most awaited annual events, it celebrates ideas that spark change & innovation.
              </p>
            </div>
          </motion.div>

          {/* Right Column - Image with Flip Card */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="relative"
          >
            {/* "What is TED and TEDx?" label above image - CLICKABLE */}
            <div
              onClick={() => setIsFlipped(!isFlipped)}
              className="absolute -top-10 right-0 text-sm md:text-base text-muted-foreground/80 cursor-pointer hover:text-primary transition-colors underline decoration-dotted underline-offset-4"
            >
              What is TED and TEDx?
            </div>

            {/* Flip Card Container */}
            <div
              className="relative"
              style={{
                perspective: '1000px',
              }}
            >
              {/* Card Inner */}
              <motion.div
                animate={{ rotateY: isFlipped ? 180 : 0 }}
                transition={{ duration: 0.6, type: "spring", stiffness: 100 }}
                style={{
                  transformStyle: 'preserve-3d',
                  position: 'relative',
                  width: '100%',
                  height: '320px', // Increased height for larger text
                }}
              >
                {/* Front of Card - Image Placeholder */}
                <div
                  style={{
                    backfaceVisibility: 'hidden',
                    position: 'absolute',
                    width: '100%',
                    height: '100%',
                  }}
                  className="border border-border/30 rounded-lg overflow-hidden bg-gradient-to-br from-card/20 to-card/5"
                >
                  {/* Image Placeholder - Replace with actual image */}
                  <div className="relative w-full h-full flex items-center justify-center bg-gradient-to-br from-primary/5 to-transparent">
                    {/* Placeholder content - you can replace this with an <img> tag */}
                    <div className="text-center p-8">
                      <div className="w-full h-32 bg-muted-foreground/10 rounded flex items-center justify-center mb-4">
                        <span className="text-muted-foreground/40 text-sm">TEDx Event Image</span>
                      </div>
                      <p className="text-sm text-muted-foreground/40">
                        (Replace with your event photo)
                      </p>
                    </div>
                  </div>
                </div>

                {/* Back of Card - Content */}
                <div
                  style={{
                    backfaceVisibility: 'hidden',
                    position: 'absolute',
                    width: '100%',
                    height: '100%',
                    transform: 'rotateY(180deg)',
                  }}
                  className="border border-border/30 rounded-lg p-8 bg-card/20 overflow-y-auto custom-scrollbar"
                >
                  <div className="space-y-6">
                    {/* TED */}
                    <div>
                      <h3 className="text-base font-semibold mb-2">
                        <span className="text-primary">TED</span>
                      </h3>
                      <p className="text-sm text-muted-foreground/90 leading-relaxed">
                        TED (Technology, Entertainment, and Design) began with topics like e-books and fractals but has evolved into a global platform for creativity and innovation. It now features a diverse range of voices, including business leaders, technicians, and philosophers.
                      </p>
                    </div>

                    {/* TEDx */}
                    <div>
                      <h3 className="text-base font-semibold mb-2">
                        <span className="text-primary">TED</span>
                        <span className="text-xs align-super text-primary">x</span>
                      </h3>
                      <p className="text-sm text-muted-foreground/90 leading-relaxed mb-2">
                        TEDx promotes "ideas worth spreading" through independently organized events worldwide. Driven by passionate individuals, these events bring fresh ideas and stories to inspire and spark meaningful conversations.
                      </p>
                      <p className="text-sm text-muted-foreground/90 leading-relaxed">
                        Guided by TED's principles, TEDx events follow specific guidelines and host over 3,000 events annually, making a global impact at the grassroots level.
                      </p>
                    </div>

                    <p className="text-xs text-muted-foreground/50 text-center pt-2">
                      Click to flip back
                    </p>
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>

        {/* Explore More Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex justify-start mt-8"
        >
          <Link to="/about">
            <Button
              variant="outline"
              size="default"
              className="border-foreground/30 text-foreground hover:bg-foreground/10 hover:border-foreground/50 transition-all duration-300 text-sm px-6"
            >
              Explore more
            </Button>
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutSection;
