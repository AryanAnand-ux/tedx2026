import { motion } from "framer-motion";
import { ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import GallerySection from "@/components/GallerySection";
import SEO from "@/components/SEO";
import SectionHeading from "@/components/SectionHeading";

// Core Team - 6 key leadership positions
const coreTeam = [
  {
    name: "John Doe",
    role: "Overall Head & Licensee",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&q=80"
  },
  {
    name: "Sarah Smith",
    role: "Content & Curation Core",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=300&q=80"
  },
  {
    name: "Mike Johnson",
    role: "Design & Branding Core",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=300&q=80"
  },
  {
    name: "Emily Davis",
    role: "PR & Marketing Core",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=300&q=80"
  },
  {
    name: "David Wilson",
    role: "Partnerships & Collaborations Core",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=300&q=80"
  },
  {
    name: "Lisa Brown",
    role: "Hospitality & Logistics Core",
    image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=300&q=80"
  },
];

// Department Teams
const departments = {
  contentCuration: [
    { name: "Alex Turner", image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=300&q=80" },
    { name: "Rachel Green", image: "https://images.unsplash.com/photo-1517841905240-472988babdf9?w=300&q=80" },
    { name: "Tom Hardy", image: "https://images.unsplash.com/photo-1519345182560-3f2917c472ef?w=300&q=80" },
    { name: "Nina Patel", image: "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?w=300&q=80" },
    { name: "Chris Evans", image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&q=80" },
    { name: "Maya Singh", image: "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?w=300&q=80" },
  ],
  designBranding: [
    { name: "Oliver Queen", image: "https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?w=300&q=80" },
    { name: "Sophia Chen", image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=300&q=80" },
    { name: "James Wilson", image: "https://images.unsplash.com/photo-1463453091185-61582044d556?w=300&q=80" },
    { name: "Emma Watson", image: "https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?w=300&q=80" },
    { name: "Lucas Gray", image: "https://images.unsplash.com/photo-1531427186611-ecfd6d936c79?w=300&q=80" },
    { name: "Zoe Martinez", image: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?w=300&q=80" },
  ],
  prMarketing: [
    { name: "Ryan Cooper", image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=300&q=80" },
    { name: "Mia Taylor", image: "https://images.unsplash.com/photo-1488426862026-3ee34a7d66df?w=300&q=80" },
    { name: "Ethan Hunt", image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=300&q=80" },
    { name: "Ava Anderson", image: "https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?w=300&q=80" },
    { name: "Noah Brown", image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&q=80" },
  ],
  partnerships: [
    { name: "Liam White", image: "https://images.unsplash.com/photo-1519345182560-3f2917c472ef?w=300&q=80" },
    { name: "Isabella Lee", image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=300&q=80" },
    { name: "Mason Kim", image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=300&q=80" },
    { name: "Amelia Clark", image: "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?w=300&q=80" },
    { name: "Elijah Scott", image: "https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?w=300&q=80" },
    { name: "Harper Young", image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=300&q=80" },
  ],
  hospitality: [
    { name: "Jacob Hall", image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=300&q=80" },
    { name: "Charlotte Adams", image: "https://images.unsplash.com/photo-1517841905240-472988babdf9?w=300&q=80" },
    { name: "William Baker", image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=300&q=80" },
    { name: "Lily Nelson", image: "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?w=300&q=80" },
    { name: "Benjamin Carter", image: "https://images.unsplash.com/photo-1531427186611-ecfd6d936c79?w=300&q=80" },
    { name: "Grace Mitchell", image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=300&q=80" },
    { name: "Henry Roberts", image: "https://images.unsplash.com/photo-1463453091185-61582044d556?w=300&q=80" },
  ],
};

const About = () => {
  return (
    <div className="min-h-screen bg-background">
      <SEO
        title="About Us | TEDxJUET 2025"
        description="Learn about TEDxJUET, our team, and the Pratibimb theme. Discover our mission to spread ideas worth sharing at JUET, Guna."
        canonical="https://tedxjuet.com/about"
      />
      <Navbar />

      <main className="pt-20 bg-black min-h-screen">
        {/* Hero Section */}
        <section className="py-12 lg:py-16 bg-black">
          <div className="container mx-auto px-4 lg:px-8">


            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <SectionHeading className="mb-4">
                <h2 className="text-4xl md:text-5xl font-display text-white whitespace-nowrap">
                  About Us
                </h2>
              </SectionHeading>
            </motion.div>
          </div>
        </section>

        {/* Combined Motto & Vision Section */}
        <section className="py-8 bg-black">
          <div className="container mx-auto px-4 lg:px-8 max-w-4xl">
            {/* Our Motto */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-center mb-16"
            >
              <SectionHeading className="mb-6">
                <h2 className="text-3xl md:text-4xl font-display text-primary whitespace-nowrap">
                  Our Motto
                </h2>
              </SectionHeading>

              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <p>
                  <span className="text-primary font-semibold">"Ideas Worth Sharing"</span> : We believe that for humankind to truly progress and achieve our potential, the exchange of ideas between people is essential.
                </p>
                <p>
                  TED helps us list the problems people face even in the remotest corners of the world. This promotes discussions to come up with solutions and ideas from pioneers and amateurs in different backgrounds. Most ideas often end up being ignored or rejected, and even the ones that are accepted are often not implemented.
                </p>
                <p>
                  We aim to play our little role in guiding these embryos & nurture them with the hope that they help us progress & march forward.
                </p>
              </div>
            </motion.div>

            {/* Our Vision */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-center mb-20"
            >
              <SectionHeading className="mb-6">
                <h2 className="text-3xl md:text-4xl font-display text-primary whitespace-nowrap">
                  Our Vision
                </h2>
              </SectionHeading>

              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <p>
                  At TEDxJUET, we envision a generation, only bounded by our imagination and dreams. A generation that can play a vital role in the conveyor belt of ideas, entertainment, design and technology.
                </p>
                <p>
                  We create opportunities for our students and staff to meet the people who got their hands dirty in this conveyor belt and inspire them to get their hands dirty as well.
                </p>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Team Section */}
        <section className="py-20 lg:py-28">
          <div className="container mx-auto px-4 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-center mb-16"
            >
              <SectionHeading className="mb-4">
                <h2 className="text-3xl md:text-4xl font-serif text-foreground whitespace-nowrap">
                  Team
                </h2>
              </SectionHeading>
            </motion.div>

            {/* Core Team */}
            <div className="mb-20">
              <h3 className="text-2xl md:text-3xl font-display font-semibold text-foreground mb-12 text-center">
                Core Team
              </h3>
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 max-w-6xl mx-auto">
                {coreTeam.map((member, index) => (
                  <motion.div
                    key={member.name}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: index * 0.05 }}
                    className="text-center"
                  >
                    <div className="relative w-full aspect-square rounded-full overflow-hidden bg-muted mb-3">
                      <img
                        src={member.image}
                        alt={member.name}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <h4 className="font-semibold text-primary text-sm mb-1">{member.name}</h4>
                    <p className="text-xs text-muted-foreground">{member.role}</p>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Content and Curation */}
            <DepartmentSection
              title="Content and Curation"
              members={departments.contentCuration}
            />

            {/* Design and Branding */}
            <DepartmentSection
              title="Design and Branding"
              members={departments.designBranding}
            />

            {/* PR and Marketing */}
            <DepartmentSection
              title="Public Relations and Marketing"
              members={departments.prMarketing}
            />

            {/* Partnerships */}
            <DepartmentSection
              title="Partnerships and Collaborations"
              members={departments.partnerships}
            />

            {/* Hospitality */}
            <DepartmentSection
              title="Hospitality and Logistics"
              members={departments.hospitality}
            />
          </div>
        </section>

        {/* Gallery Section */}
        <GallerySection />

        {/* CTA Section */}
        <section className="py-20 lg:py-28 bg-gradient-to-br from-primary/10 via-background to-background">
          <div className="container mx-auto px-4 lg:px-8 text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="max-w-2xl mx-auto"
            >
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold text-foreground mb-6">
                Ready to Experience Pratibimb?
              </h2>
              <p className="text-lg text-muted-foreground mb-8">
                Join us for an unforgettable day of ideas, inspiration, and connection.
              </p>
              <div className="flex items-center justify-center">
                <Link to="/speakers">
                  <Button variant="heroOutline" size="xl">
                    View Speakers
                  </Button>
                </Link>
              </div>
            </motion.div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

// Department Section Component
const DepartmentSection = ({ title, members }: { title: string; members: { name: string; image: string }[] }) => {
  return (
    <div className="mb-16">
      <h3 className="text-xl md:text-2xl font-display font-semibold text-foreground mb-8 text-center">
        {title}
      </h3>
      <div className="grid grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6 max-w-5xl mx-auto">
        {members.map((member, index) => (
          <motion.div
            key={member.name}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: index * 0.03 }}
            className="text-center"
          >
            <div className="relative w-full aspect-square rounded-full overflow-hidden bg-muted mb-2">
              <img
                src={member.image}
                alt={member.name}
                className="w-full h-full object-cover"
              />
            </div>
            <h4 className="font-medium text-primary text-xs">{member.name}</h4>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default About;
