import { motion } from "framer-motion";
import SectionHeading from "@/components/SectionHeading";

const partnersData = [
    { name: "Partner 1", logo: "https://via.placeholder.com/150x80?text=Partner+1" },
    { name: "Partner 2", logo: "https://via.placeholder.com/150x80?text=Partner+2" },
    { name: "Partner 3", logo: "https://via.placeholder.com/150x80?text=Partner+3" },
    { name: "Partner 4", logo: "https://via.placeholder.com/150x80?text=Partner+4" },
    { name: "Partner 5", logo: "https://via.placeholder.com/150x80?text=Partner+5" },
    { name: "Partner 6", logo: "https://via.placeholder.com/150x80?text=Partner+6" },
];

const PartnersPreview = () => {
    return (
        <section className="py-12 lg:py-16 bg-muted/30">
            <div className="container mx-auto px-4 lg:px-8">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                >
                    {/* Partners Heading */}
                    <div className="text-center mb-12">
                        <SectionHeading>
                            <h2 className="text-4xl md:text-5xl font-serif text-foreground whitespace-nowrap">
                                Partners
                            </h2>
                        </SectionHeading>
                    </div>

                    {/* Partners Grid */}
                    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 max-w-6xl mx-auto">
                        {partnersData.map((partner, index) => (
                            <motion.div
                                key={partner.name}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                                className="flex items-center justify-center"
                            >
                                <div className="bg-card border border-border rounded-lg p-6 hover:border-primary/50 transition-colors duration-300 w-full aspect-video flex items-center justify-center">
                                    <img
                                        src={partner.logo}
                                        alt={partner.name}
                                        className="w-full h-full object-contain grayscale hover:grayscale-0 transition-all duration-300"
                                    />
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default PartnersPreview;
