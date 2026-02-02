import { motion } from "framer-motion";
import { Sparkles } from "lucide-react";

interface ReasonCard {
    number: number;
    title: string;
    description: string;
}

const reasons: ReasonCard[] = [
    {
        number: 1,
        title: "Diverse Ideas",
        description:
            "A day filled with speakers from different walks of life who have left their mark opening up with their stories.",
    },
    {
        number: 2,
        title: "Networking",
        description:
            "Opportunity to engage in dialogue and connect with diverse individuals, promoting a collaborative exchange of ideas.",
    },
    {
        number: 3,
        title: "Performances",
        description:
            "TEDx, the E for entertainment will not be overlooked! Find a day filled with brilliant performances ranging from art to singing to stand up comedy.",
    },
    {
        number: 4,
        title: "Cherished Tales",
        description:
            "Stories that inspire, real-life heroes showing their true superpowers. Not just a lecture, but a moving session with brilliant performances.",
    },
];

const ReasonsToAttend = () => {
    return (
        <section id="why-attend" className="py-12 lg:py-16 bg-black">
            <div className="container mx-auto px-4 lg:px-8">
                {/* Event Heading with Decorative Lines (like About Us) */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="relative mb-16"
                >
                    {/* Centered heading with lines */}
                    <div className="flex items-center justify-center gap-6 mb-12">
                        <div className="flex-1 h-px bg-gradient-to-r from-transparent via-border to-border" />

                        {/* Left vertical decoration */}
                        <div className="flex flex-col items-center gap-2">
                            <div className="w-px h-4 bg-border" />
                            <div className="w-2 h-2 rotate-45 bg-border" />
                            <div className="w-px h-4 bg-border" />
                        </div>

                        <h3 className="text-4xl md:text-5xl font-serif text-foreground whitespace-nowrap">
                            Event
                        </h3>

                        {/* Right vertical decoration */}
                        <div className="flex flex-col items-center gap-2">
                            <div className="w-px h-4 bg-border" />
                            <div className="w-2 h-2 rotate-45 bg-border" />
                            <div className="w-px h-4 bg-border" />
                        </div>

                        <div className="flex-1 h-px bg-gradient-to-l from-transparent via-border to-border" />
                    </div>

                    {/* Reasons to Attend with Sparkles */}
                    <div className="text-center">
                        <div className="flex items-center justify-center gap-3 mb-4">
                            <Sparkles className="w-4 h-4 text-foreground" />
                            <h2 className="text-3xl md:text-4xl font-serif font-bold text-foreground">
                                Reasons to Attend
                            </h2>
                            <Sparkles className="w-4 h-4 text-foreground" />
                        </div>
                        <p className="text-muted-foreground/70 max-w-2xl mx-auto text-sm">
                            Opportunity to meet the heroes you have followed for your life and
                            interact with pioneers of the fields you are interested in.
                        </p>
                    </div>
                </motion.div>

                {/* Cards Grid */}
                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
                    {reasons.map((reason, index) => (
                        <motion.div
                            key={reason.number}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: index * 0.1 }}
                            className="relative"
                        >
                            {/* Pentagon/Shield Shape Card */}
                            <div className="relative group">
                                {/* Card with clip-path for pentagon shape */}
                                <div
                                    className="bg-card/50 border border-border/50 p-6 pb-10 hover:border-primary/50 transition-all duration-300"
                                    style={{
                                        clipPath: 'polygon(0 0, 100% 0, 100% calc(100% - 20px), 50% 100%, 0 calc(100% - 20px))',
                                    }}
                                >
                                    {/* Number Badge */}
                                    <div className="flex justify-center mb-4">
                                        <div className="w-8 h-8 rounded-sm bg-background border border-border flex items-center justify-center relative">
                                            <span className="text-sm font-bold text-primary">
                                                {reason.number}
                                            </span>
                                            {/* Diamond corners */}
                                            <div className="absolute -top-1 left-1/2 -translate-x-1/2 w-2 h-2 rotate-45 bg-background border-t border-l border-border" />
                                            <div className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-2 h-2 rotate-45 bg-background border-b border-r border-border" />
                                        </div>
                                    </div>

                                    {/* Title */}
                                    <h3 className="text-base font-serif font-semibold text-foreground mb-3 text-center">
                                        {reason.title}
                                    </h3>

                                    {/* Description */}
                                    <p className="text-muted-foreground/80 leading-relaxed text-center" style={{ fontSize: '18px' }}>
                                        {reason.description}
                                    </p>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default ReasonsToAttend;
