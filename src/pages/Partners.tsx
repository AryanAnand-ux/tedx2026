import { motion } from "framer-motion";
import { ArrowLeft, Mail } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SEO from "@/components/SEO";

const partnerTiers = [
    {
        tier: "Platinum Partners",
        description: "Our premier partners making TEDxJUET 2025 possible",
        partners: [
            { name: "Partner 1", logo: "Platinum Partner Logo 1" },
            { name: "Partner 2", logo: "Platinum Partner Logo 2" },
        ],
    },
    {
        tier: "Gold Partners",
        description: "Strategic partners supporting our vision",
        partners: [
            { name: "Partner 3", logo: "Gold Partner Logo 1" },
            { name: "Partner 4", logo: "Gold Partner Logo 2" },
            { name: "Partner 5", logo: "Gold Partner Logo 3" },
        ],
    },
    {
        tier: "Silver Partners",
        description: "Valued partners contributing to our success",
        partners: [
            { name: "Partner 6", logo: "Silver Partner Logo 1" },
            { name: "Partner 7", logo: "Silver Partner Logo 2" },
            { name: "Partner 8", logo: "Silver Partner Logo 3" },
            { name: "Partner 9", logo: "Silver Partner Logo 4" },
        ],
    },
];

const Partners = () => {
    return (
        <div className="min-h-screen bg-background">
            <SEO
                title="Partners | TEDxJUET 2025"
                description="Meet our partners who make TEDxJUET possible. Join us in spreading ideas worth spreading."
                canonical="https://tedxjuet.com/partners"
            />
            <Navbar />

            <main className="pt-20">
                {/* Hero Banner */}
                <section className="relative py-20 lg:py-32 bg-gradient-to-br from-background via-muted/50 to-background overflow-hidden">
                    <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,hsl(var(--primary)/0.15),transparent_50%)]" />
                    <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,hsl(var(--primary)/0.1),transparent_50%)]" />

                    <div className="container mx-auto px-4 lg:px-8 relative z-10">
                        <Link to="/">
                            <Button variant="ghost" className="mb-8 gap-2">
                                <ArrowLeft className="w-4 h-4" />
                                Back to Home
                            </Button>
                        </Link>

                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6 }}
                            className="max-w-4xl"
                        >
                            <span className="text-primary font-semibold tracking-wider uppercase text-sm">
                                Our Partners
                            </span>
                            <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-foreground mt-4 mb-6">
                                Making Ideas Come to <span className="text-primary">Life</span>
                            </h1>
                            <p className="text-xl text-muted-foreground leading-relaxed">
                                We're grateful to our partners who believe in the power of ideas worth spreading and help make TEDxJUET possible.
                            </p>
                        </motion.div>
                    </div>
                </section>

                {/* Partners Tiers */}
                <section className="py-20 lg:py-28">
                    <div className="container mx-auto px-4 lg:px-8">
                        {partnerTiers.map((tierGroup, tierIndex) => (
                            <motion.div
                                key={tierGroup.tier}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.6, delay: tierIndex * 0.2 }}
                                className="mb-20 last:mb-0"
                            >
                                <div className="text-center mb-12">
                                    <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground mb-4">
                                        {tierGroup.tier}
                                    </h2>
                                    <p className="text-muted-foreground text-lg">
                                        {tierGroup.description}
                                    </p>
                                </div>

                                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                                    {tierGroup.partners.map((partner, index) => (
                                        <motion.div
                                            key={partner.name}
                                            initial={{ opacity: 0, scale: 0.9 }}
                                            whileInView={{ opacity: 1, scale: 1 }}
                                            viewport={{ once: true }}
                                            transition={{ duration: 0.4, delay: index * 0.1 }}
                                            className="bg-card border border-border rounded-xl p-8 hover:border-primary/50 transition-all duration-300 flex items-center justify-center aspect-square"
                                        >
                                            <div className="text-center text-muted-foreground/40 text-sm">
                                                {partner.logo}
                                            </div>
                                        </motion.div>
                                    ))}
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </section>

                {/* Become a Partner CTA */}
                <section className="py-20 lg:py-28 bg-gradient-to-br from-primary/10 via-background to-background">
                    <div className="container mx-auto px-4 lg:px-8">
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6 }}
                            className="max-w-3xl mx-auto text-center"
                        >
                            <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground mb-6">
                                Become a <span className="text-primary">Partner</span>
                            </h2>
                            <p className="text-muted-foreground text-lg mb-8">
                                Join us in spreading ideas worth spreading. Partner with TEDxJUET 2025 and be part of an inspiring movement that transforms minds and creates lasting impact.
                            </p>
                            <div className="flex flex-col sm:flex-row gap-4 justify-center">
                                <Button variant="hero" size="xl" className="gap-2">
                                    <Mail className="w-5 h-5" />
                                    Contact Us for Sponsorship
                                </Button>
                                <Link to="/">
                                    <Button variant="heroOutline" size="xl">
                                        Back to Home
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

export default Partners;
