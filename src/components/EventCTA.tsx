import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const EventCTA = () => {
    const schedule = [
        { time: "10:00", event: "Opening Ceremony", description: "" },
        { time: "10:15", event: "Lamp Lighting and Performance", description: "" },
        { time: "10:45", event: "Rahul Verma", description: "Rahul Verma is a public speaker and social activist" },
        { time: "11:30", event: "Capt. Varsha Harvest Tyagi", description: "Captain Varsha Harvest Tyagi is a pilot and motivational speaker" },
        { time: "12:15", event: "Swapko Qperqlus", description: "Swapko Qperqlus is a renowned artist and cultural ambassador" },
        { time: "1 - 2", event: "Lunch Break", description: "" },
        { time: "02:15", event: "Jaraj Singh Sachor", description: "Jaraj Singh Sachor is an entrepreneur and technology innovator" },
        { time: "03:00", event: "Sumant Panek", description: "Sumant Panek is a wildlife conservationist and environmentalist" },
        { time: "03:45", event: "Preeti Aunganj", description: "Preeti Aunganj is a social worker and women's rights advocate" },
        { time: "04:30", event: "Pratap Sinh Serial Rao Bhaode", description: "Pratap Sinh is a heritage conservation expert and historian" },
        { time: "05:30", event: "Closing Ceremony", description: "" },
    ];

    return (
        <section className="relative py-12 lg:py-16 bg-black">
            <div className="container mx-auto px-4 lg:px-8 relative z-10 max-w-6xl">
                {/* Top Section - Theme + Date + CTA */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="border border-border/50 p-6 mb-8 flex items-center justify-between gap-6 flex-wrap"
                >
                    {/* Left - Theme with decorative image placeholder */}
                    <div className="flex items-center gap-6 flex-1">
                        {/* Decorative pattern/image placeholder */}
                        <div className="w-32 h-20 bg-gradient-to-br from-primary/20 to-red-900/10 rounded flex items-center justify-center border border-primary/30">
                            <div className="text-xs text-primary/50 text-center">
                                Theme<br />Pattern
                            </div>
                        </div>

                        {/* Theme Name and Date */}
                        <div>
                            <h2 className="text-3xl md:text-4xl font-serif font-bold text-foreground mb-1">
                                Pratibimb
                            </h2>
                            <p className="text-xs text-muted-foreground">
                                22nd March 2025
                            </p>
                        </div>
                    </div>

                    {/* Right - Book Tickets Button */}
                    <div>
                        <Button
                            variant="outline"
                            size="default"
                            className="border-foreground/30 text-foreground hover:bg-foreground/10 hover:border-foreground/50 transition-all duration-300 text-sm px-6"
                        >
                            Book your Tickets
                        </Button>
                    </div>
                </motion.div>

                {/* Event Schedule Section */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    className="border border-border/50 p-8 md:p-12 relative"
                >
                    {/* TEDx Logo Top Left */}
                    <div className="absolute top-4 left-4">
                        <p className="text-xs font-semibold">
                            <span className="text-primary">TED</span>
                            <span className="text-xs align-super text-primary">x</span>
                            <span className="text-foreground">JUET</span>
                        </p>
                    </div>

                    {/* Tatv Top Right - Theme name */}
                    <div className="absolute top-4 right-4">
                        <p className="text-base font-serif text-foreground">Pratibimb</p>
                    </div>

                    {/* Event Schedule Heading */}
                    <h3 className="text-2xl md:text-3xl font-serif text-foreground mb-8 mt-4">
                        Event Schedule
                    </h3>

                    {/* Schedule List */}
                    <div className="space-y-8 md:space-y-12 pl-4">
                        {schedule.map((item, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, x: -20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.4, delay: index * 0.05 }}
                                className="flex flex-col md:flex-row md:items-baseline gap-2 md:gap-12 group relative"
                            >
                                {/* Dotted Line Connector */}
                                <div className="absolute left-[-21px] top-2 bottom-[-48px] w-px border-l-2 border-dashed border-white/20 last:bottom-0 last:border-0 md:block hidden" />
                                <div className="absolute left-[-26px] top-2 w-3 h-3 rounded-full bg-red-600 shadow-[0_0_10px_rgba(220,38,38,0.5)] md:block hidden group-hover:scale-125 transition-transform" />

                                {/* Time */}
                                <div className="min-w-[140px] shrink-0">
                                    <span className="text-3xl md:text-5xl font-display font-bold text-red-600 drop-shadow-sm">
                                        {item.time}
                                    </span>
                                </div>

                                {/* Event Details - Colon Separator for Desktop */}
                                <div className="hidden md:block text-2xl text-white/50 font-serif">:</div>

                                <div className="flex-1">
                                    <h4 className="text-xl md:text-3xl font-serif font-bold text-white mb-2 tracking-wide group-hover:text-red-500 transition-colors">
                                        {item.event}
                                    </h4>
                                    {item.description && (
                                        <p className="text-sm md:text-base text-gray-400 font-serif leading-relaxed max-w-2xl">
                                            {item.description}
                                        </p>
                                    )}
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </motion.div>

                {/* Show Speakers Button Below */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.4 }}
                    className="flex justify-center mt-8"
                >
                    <Link to="/speakers">
                        <Button
                            variant="outline"
                            size="default"
                            className="border-foreground/30 text-foreground hover:bg-foreground/10 hover:border-foreground/50 transition-all duration-300 text-sm px-6"
                        >
                            Show Speakers
                        </Button>
                    </Link>
                </motion.div>
            </div>
        </section>
    );
};

export default EventCTA;
