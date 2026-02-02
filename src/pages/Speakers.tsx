import { motion } from "framer-motion";
import { useState } from "react";
import { ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SEO from "@/components/SEO";
import SectionHeading from "@/components/SectionHeading";

// Define Speaker interface
interface Speaker {
  name: string;
  role: string;
  image: string;
  bio?: string;
}

// Speakers organized by year
const speakersByYear: Record<number, Speaker[]> = {
  2026: [
    {
      name: "Aravind Gupta",
      role: "Toy Inventor & Educator",
      image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=400&q=80",
      bio: "Padma Shri awardee who turns trash into toys to teach science to children. He has designed over 1000 science toys from waste material and has authored numerous books on science activities.",
    },
    {
      name: "Dr. Sonal Mansingh",
      role: "Indian Classical Dancer",
      image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=400&q=80",
      bio: "Legendary Odissi and Bharatanatyam dancer, choreographer, and teacher. A Member of Parliament and recipient of the Padma Vibhushan, she has dedicated her life to preserving Indian cultural heritage.",
    },
    {
      name: "Ritesh Agarwal",
      role: "Founder & CEO, OYO",
      image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&q=80",
      bio: "One of the world's youngest self-made billionaires, transforming the global hospitality industry. His journey from a dropout to leading a hospitality chain is a testament to entrepreneurial grit.",
    },
    {
      name: "Masba Gupta",
      role: "Fashion Designer & Actor",
      image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=400&q=80",
      bio: "Renowned fashion designer known for her quirky prints and modern aesthetic. She has redefined Indian fashion and is also a celebrated actor, breaking stereotypes in the industry.",
    },
    {
      name: "Prukalpa Sankar",
      role: "Co-founder, Atlan",
      image: "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?w=400&q=80",
      bio: "Data scientist and entrepreneur making data accessible for teams around the world. Atlan is a pioneering data collaboration workspace used by organizations globally.",
    },
  ],
  2025: [
    {
      name: "Dr. Priya Sharma",
      role: "AI Researcher & Author",
      image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&q=80",
      bio: "Leading researcher in ethical AI development, exploring the intersection of human cognition and artificial intelligence. She has published over 50 papers on neural networks and consciousness.",
    },
    {
      name: "Arjun Mehta",
      role: "Social Entrepreneur",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&q=80",
      bio: "Founded initiatives impacting 100,000+ rural lives through sustainable technology and education models. Recipient of the National Service Award for his contributions to rural development.",
    },
    {
      name: "Kavita Reddy",
      role: "Climate Scientist",
      image: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?w=400&q=80",
      bio: "IPCC contributor working on predictive climate models and sustainable urban planning solutions. Her work focuses on adapting coastal cities to rising sea levels.",
    },
    {
      name: "Vikram Singh",
      role: "Paralympic Gold Medalist",
      image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&q=80",
      bio: "India's first visually impaired gold medalist, now mentoring young athletes to break barriers. He champions inclusivity in sports and has established a foundation for differently-abled athletes.",
    },
    {
      name: "Ananya Desai",
      role: "Neuroscientist & Poet",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&q=80",
      bio: "Bridging neuroscience and art to reveal how creativity reshapes our neural pathways. Her unique approach combines scientific rigor with artistic expression.",
    },
    {
      name: "Rohit Kapoor",
      role: "Space Engineer at ISRO",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&q=80",
      bio: "Key engineer in ISRO's lunar missions, now leading India's interplanetary exploration dreams. He is passionate about space education and inspiring the next generation of scientists.",
    },
    {
      name: "Meera Patel",
      role: "Digital Rights Activist",
      image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=400&q=80",
      bio: "Fighting for digital rights and online privacy across South Asia through policy and awareness. She advocates for data sovereignty and user privacy in the digital age.",
    },
    {
      name: "Sanjay Kulkarni",
      role: "Philosopher & Educator",
      image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=400&q=80",
      bio: "Reinterpreting Vedantic philosophy to address contemporary challenges in mental health and purpose. His lectures bridge ancient wisdom with modern psychological insights.",
    },
  ],
  2024: [
    {
      name: "Rajesh Kumar",
      role: "Sustainability Expert",
      image: "https://images.unsplash.com/photo-1519345182560-3f2917c472ef?w=400&q=80",
    },
    {
      name: "Sneha Iyer",
      role: "Healthcare Innovator",
      image: "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?w=400&q=80",
    },
    {
      name: "Aditya Rao",
      role: "EdTech Founder",
      image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&q=80",
    },
    {
      name: "Nisha Sen",
      role: "Wildlife Conservationist",
      image: "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?w=400&q=80",
    },
  ],
  2023: [
    {
      name: "Karan Malhotra",
      role: "FinTech Pioneer",
      image: "https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?w=400&q=80",
    },
    {
      name: "Pooja Nair",
      role: "Classical Musician",
      image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=400&q=80",
    },
    {
      name: "Amit Chatterjee",
      role: "Urban Planner",
      image: "https://images.unsplash.com/photo-1463453091185-61582044d556?w=400&q=80",
    },
  ],
  2022: [
    {
      name: "Divya Krishnan",
      role: "Biotechnology Researcher",
      image: "https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?w=400&q=80",
    },
    {
      name: "Rahul Bose",
      role: "Documentary Filmmaker",
      image: "https://images.unsplash.com/photo-1531427186611-ecfd6d936c79?w=400&q=80",
    },
  ],
};

interface Speaker {
  name: string;
  role: string;
  image: string;
}

const years = [2026, 2025, 2024, 2023, 2022];

const Speakers = () => {
  const [selectedYear, setSelectedYear] = useState<number>(2026);
  const currentSpeakers = speakersByYear[selectedYear] || [];

  return (
    <div className="min-h-screen bg-background">
      <SEO
        title="Speakers | TEDxJUET 2025"
        description="Meet our inspiring speakers for TEDxJUET 2025. Innovators, thought leaders, and change makers sharing ideas worth spreading."
        canonical="https://tedxjuet.com/speakers"
      />
      <Navbar />

      <main className="pt-24 lg:pt-28">
        <div className="container mx-auto px-4 lg:px-8 mb-8 relative z-30">

        </div>

        {/* Main Content Container - Centered with max-width */}
        <div className="flex flex-col lg:flex-row gap-16 lg:gap-24 items-start relative z-10 max-w-5xl mx-auto">
          {/* Left Column - Year Selector with Decorative Border */}
          <div className="w-full lg:w-40 flex-shrink-0 lg:sticky lg:top-24">
            <div className="text-center mb-8">
              <SectionHeading className="!gap-3">
                <h1 className="text-3xl font-display text-white tracking-wide">
                  Speakers
                </h1>
              </SectionHeading>
            </div>

            <div className="relative border border-white/20 py-8 px-4 flex lg:flex-col flex-row flex-wrap justify-center items-center gap-6 lg:min-h-[400px]">
              {/* Decorative Corners */}
              <div className="absolute -top-1 -left-1 w-2 h-2 bg-white rounded-full" />
              <div className="absolute -top-1 -right-1 w-2 h-2 bg-white rounded-full" />
              <div className="absolute -bottom-1 -left-1 w-2 h-2 bg-white rounded-full" />
              <div className="absolute -bottom-1 -right-1 w-2 h-2 bg-white rounded-full" />

              {/* Mid-point decorations */}
              <div className="absolute top-1/2 -left-1 w-2 h-2 bg-white/50 rotate-45 -translate-y-1/2" />
              <div className="absolute top-1/2 -right-1 w-2 h-2 bg-white/50 rotate-45 -translate-y-1/2" />

              {years.map((year) => (
                <button
                  key={year}
                  onClick={() => setSelectedYear(year)}
                  className={`text-xl font-display transition-all duration-300 relative py-1 ${selectedYear === year
                    ? "text-white scale-110 font-bold"
                    : "text-white/40 hover:text-white/70"
                    }`}
                >
                  {year}
                  {selectedYear === year && (
                    <motion.div
                      layoutId="activeYear"
                      className="absolute lg:-right-6 lg:top-1/2 lg:-translate-y-1/2 lg:left-auto lg:bottom-auto -bottom-2 left-1/2 -translate-x-1/2 w-2 h-2 bg-primary rotate-45"
                    />
                  )}
                </button>
              ))}
            </div>
          </div>

          {/* Right Column - Speakers List */}
          <div className="flex-1 min-h-[50vh]">
            <motion.div
              key={selectedYear}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
              className="space-y-12"
            >
              {currentSpeakers.map((speaker, index) => (
                <motion.div
                  key={speaker.name}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="flex flex-col sm:flex-row gap-8 items-start group"
                >
                  {/* Speaker Image - Made Smaller */}
                  <div className="w-full sm:w-48 aspect-square shrink-0 overflow-hidden bg-muted relative">
                    <img
                      src={speaker.image}
                      alt={speaker.name}
                      className="w-full h-full object-cover filter grayscale group-hover:grayscale-0 transition-all duration-500"
                    />
                  </div>

                  {/* Speaker Info */}
                  <div className="flex-1 pt-1">
                    <h3 className="text-3xl font-display text-primary mb-2">
                      {speaker.name}
                    </h3>
                    <p className="text-base text-white/90 mb-3 font-medium leading-relaxed">
                      {speaker.role}
                    </p>
                    <p className="text-muted-foreground text-sm leading-relaxed max-w-xl">
                      {speaker.bio}
                    </p>
                  </div>
                </motion.div>
              ))}

              {/* Empty State */}
              {currentSpeakers.length === 0 && (
                <div className="text-center py-20 border border-white/10">
                  <p className="text-muted-foreground text-lg">
                    No speakers announced for the year {selectedYear} yet.
                  </p>
                </div>
              )}
            </motion.div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Speakers;
