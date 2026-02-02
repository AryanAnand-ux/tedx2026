import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useState, useEffect } from "react";

const HeroSection = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  // Generate random particle positions (static splatter effect like IIT)
  const particles = Array.from({ length: 150 }, (_, i) => ({
    id: i,
    x: Math.random() * 100,
    y: Math.random() * 100,
    size: Math.random() * 4 + 1,
    opacity: Math.random() * 0.6 + 0.2,
    delay: Math.random() * 2,
  }));

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-black"
      onMouseEnter={() => setIsHovering(true)}
      onMouseLeave={() => setIsHovering(false)}
    >
      {/* Base Background */}
      <div className="absolute inset-0 bg-black" />

      {/* Cursor Following Glow */}
      {isHovering && (
        <motion.div
          className="fixed w-96 h-96 pointer-events-none z-0"
          animate={{
            x: mousePosition.x - 192,
            y: mousePosition.y - 192,
          }}
          transition={{
            type: "spring",
            damping: 30,
            stiffness: 200,
          }}
        >
          <div className="w-full h-full bg-gradient-radial from-primary/30 via-primary/10 to-transparent rounded-full blur-3xl" />
        </motion.div>
      )}

      {/* Red Particle Splatter Effect (IIT Style) */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {particles.map((particle) => (
          <motion.div
            key={particle.id}
            initial={{ opacity: 0, scale: 0 }}
            animate={{
              opacity: particle.opacity,
              scale: 1,
              y: [0, -10, 0],
            }}
            transition={{
              opacity: { duration: 0.5, delay: particle.delay },
              scale: { duration: 0.5, delay: particle.delay },
              y: {
                duration: 3 + Math.random() * 2,
                repeat: Infinity,
                ease: "easeInOut",
                delay: particle.delay,
              }
            }}
            className="absolute bg-primary rounded-full"
            style={{
              left: `${particle.x}%`,
              top: `${particle.y}%`,
              width: `${particle.size}px`,
              height: `${particle.size}px`,
              boxShadow: `0 0 ${particle.size * 2}px rgba(255, 45, 32, 0.5)`,
            }}
          />
        ))}
      </div>

      {/* Additional Splatter Clusters (concentrated areas like IIT) */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Top Right Cluster */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
          className="absolute top-20 right-20 w-64 h-64"
        >
          <div className="absolute inset-0 bg-gradient-to-br from-primary/40 via-primary/20 to-transparent blur-2xl rounded-full" />
          {Array.from({ length: 30 }).map((_, i) => (
            <div
              key={i}
              className="absolute bg-primary rounded-full"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                width: `${Math.random() * 3 + 1}px`,
                height: `${Math.random() * 3 + 1}px`,
                opacity: Math.random() * 0.8,
              }}
            />
          ))}
        </motion.div>

        {/* Bottom Left Cluster */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.3 }}
          className="absolute bottom-32 left-20 w-72 h-72"
        >
          <div className="absolute inset-0 bg-gradient-to-tr from-primary/30 via-red-900/20 to-transparent blur-2xl rounded-full" />
          {Array.from({ length: 40 }).map((_, i) => (
            <div
              key={i}
              className="absolute bg-primary rounded-full"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                width: `${Math.random() * 4 + 1}px`,
                height: `${Math.random() * 4 + 1}px`,
                opacity: Math.random() * 0.7,
              }}
            />
          ))}
        </motion.div>

        {/* Right Side Splatter */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.6 }}
          className="absolute top-1/2 right-10 w-48 h-96 -translate-y-1/2"
        >
          <div className="absolute inset-0 bg-gradient-to-l from-primary/25 to-transparent blur-xl" />
          {Array.from({ length: 25 }).map((_, i) => (
            <div
              key={i}
              className="absolute bg-primary rounded-full"
              style={{
                left: `${Math.random() * 80}%`,
                top: `${Math.random() * 100}%`,
                width: `${Math.random() * 3 + 1}px`,
                height: `${Math.random() * 3 + 1}px`,
                opacity: Math.random() * 0.6,
              }}
            />
          ))}
        </motion.div>
      </div>

      {/* Content - Ultra Minimal */}
      <div className="relative z-10 container mx-auto px-4 text-center">
        {/* Branding */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mb-8"
        >
          <p className="text-lg md:text-xl font-medium tracking-wide text-foreground/90">
            <span className="text-primary">TED</span>
            <span className="text-sm align-super">x</span>
            <span className="text-foreground">JUET</span>
          </p>
        </motion.div>

        {/* Theme Name */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="font-display font-bold mb-6 tracking-tight"
          style={{ fontSize: 'clamp(3.5rem, 8vw, 6rem)' }}
        >
          <span className="text-foreground">Pratibimb</span>
        </motion.h1>

        {/* Devanagari Script */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="text-3xl md:text-4xl text-muted-foreground/80 mb-10 font-light"
        >
          ( प्रतिबिम्ब )
        </motion.p>

        {/* Tagline - Increased Size */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="text-xl md:text-2xl text-muted-foreground/90 mb-16 font-light tracking-wide max-w-2xl mx-auto"
        >
          Reflections of Tomorrow
        </motion.p>

        {/* Single CTA Button - Outlined like IIT */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
        >
          <Button
            variant="outline"
            size="lg"
            className="border-foreground/30 text-foreground hover:bg-foreground/10 hover:border-foreground/50 transition-all duration-300 px-8"
          >
            Book your Tickets
          </Button>
        </motion.div>

        {/* Minimal Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.2 }}
          className="absolute bottom-12 left-1/2 -translate-x-1/2"
        >
          <ChevronDown className="w-6 h-6 text-muted-foreground/50 animate-bounce" />
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
