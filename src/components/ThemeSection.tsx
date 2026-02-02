import { motion } from "framer-motion";
import { Sparkles } from "lucide-react";

const ThemeSection = () => {
    return (
        <section className="relative py-12 lg:py-16 bg-black overflow-hidden">
            {/* Subtle background effects */}
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,hsl(var(--primary)/0.05),transparent_50%)]" />
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,hsl(var(--primary)/0.08),transparent_50%)]" />

            <div className="container mx-auto px-4 lg:px-8 relative z-10">
                <div className="max-w-6xl mx-auto">
                    {/* Two Column Layout */}
                    <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start">
                        {/* Left Column - Theme Name */}
                        <motion.div
                            initial={{ opacity: 0, x: -30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6 }}
                        >
                            {/* Theme 2025 with Icon */}
                            <div className="flex items-center gap-2 mb-6">
                                <Sparkles className="w-3 h-3 text-primary" />
                                <p className="text-xs font-medium tracking-wider uppercase text-primary">
                                    Theme 2025
                                </p>
                            </div>

                            {/* Theme Name with Decorative Lines */}
                            <div className="mb-6">
                                {/* Theme Name Container */}
                                <div className="relative inline-block">
                                    {/* Top decorative line */}
                                    <div className="absolute -top-2 left-0 right-0 flex items-center gap-2">
                                        <div className="w-12 h-px bg-border" />
                                        <div className="w-1.5 h-1.5 rounded-full bg-primary/50" />
                                        <div className="flex-1 h-px bg-border" />
                                    </div>

                                    <h2 className="text-4xl md:text-5xl font-serif text-foreground font-bold">
                                        Pratibimb
                                    </h2>

                                    {/* Bottom decorative line */}
                                    <div className="absolute -bottom-2 left-0 right-0 flex items-center gap-2">
                                        <div className="flex-1 h-px bg-border" />
                                        <div className="w-1.5 h-1.5 rounded-full bg-primary/50" />
                                        <div className="w-12 h-px bg-border" />
                                    </div>
                                </div>

                                {/* Devanagari Script */}
                                <p className="text-xl text-primary font-light mt-6">
                                    (प्रतिबिम्ब)
                                </p>
                            </div>
                        </motion.div>

                        {/* Right Column - Description */}
                        <motion.div
                            initial={{ opacity: 0, x: 30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: 0.1 }}
                            className="space-y-3 text-xs md:text-sm text-muted-foreground/80 leading-relaxed"
                        >
                            {/* Poetic Lines */}
                            <p className="flex items-start gap-2">
                                <span className="w-1 h-1 rounded-full bg-primary/60 mt-1.5 flex-shrink-0" />
                                <span>In the mirror of existence, we find our truth</span>
                            </p>
                            <p className="flex items-start gap-2">
                                <span className="w-1 h-1 rounded-full bg-primary/60 mt-1.5 flex-shrink-0" />
                                <span>In the reflections that dance between reality and perception</span>
                            </p>
                            <p className="flex items-start gap-2">
                                <span className="w-1 h-1 rounded-full bg-primary/60 mt-1.5 flex-shrink-0" />
                                <span>In the echoes of actions that ripple through time</span>
                            </p>
                            <p className="flex items-start gap-2">
                                <span className="w-1 h-1 rounded-full bg-primary/60 mt-1.5 flex-shrink-0" />
                                <span>The harmony withing the chaos of energies, the unseen element binding us all</span>
                            </p>
                            <p className="flex items-start gap-2">
                                <span className="w-1 h-1 rounded-full bg-primary/60 mt-1.5 flex-shrink-0" />
                                <span className="text-foreground font-medium">The image that mirrors wisdom, the reflection that reveals purpose.</span>
                            </p>
                            <p className="flex items-start gap-2">
                                <span className="w-1 h-1 rounded-full bg-primary/60 mt-1.5 flex-shrink-0" />
                                <span className="text-foreground font-medium">Pratibimb — unveiling the reflections of life.</span>
                            </p>
                        </motion.div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ThemeSection;
