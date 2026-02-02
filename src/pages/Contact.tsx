import { motion } from "framer-motion";
import { ArrowLeft, Mail, Phone, MapPin } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SEO from "@/components/SEO";
import SectionHeading from "@/components/SectionHeading";

const Contact = () => {
    return (
        <div className="min-h-screen bg-background">
            <SEO
                title="Contact Us | TEDxJUET 2025"
                description="Get in touch with TEDxJUET. Questions, sponsorship inquiries, or just want to say hello? We'd love to hear from you!"
                canonical="https://tedxjuet.com/contact"
            />
            <Navbar />

            <main className="pt-20 bg-black min-h-screen">
                <section className="py-12 lg:py-16 bg-black">
                    <div className="container mx-auto px-4 lg:px-8">


                        {/* Title Section */}
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6 }}
                            className="text-center mb-16"
                        >
                            <SectionHeading className="mb-6">
                                <h1 className="text-4xl md:text-5xl font-display text-white whitespace-nowrap">
                                    Contact Us
                                </h1>
                            </SectionHeading>
                            <p className="text-xl text-muted-foreground leading-relaxed max-w-2xl mx-auto">
                                Have questions? Want to sponsor? <br />We'd love to hear from you!
                            </p>
                        </motion.div>

                        {/* Contact Info Cards */}
                        <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
                            {/* Phone */}
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5 }}
                                className="text-center group p-6 rounded-xl border border-white/10 hover:border-primary/50 transition-all duration-300"
                            >
                                <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                                    <Phone className="w-8 h-8 text-primary" />
                                </div>
                                <h3 className="font-display text-xl text-white mb-2">Phone</h3>
                                <p className="text-muted-foreground">+91 XXXXX XXXXX</p>
                            </motion.div>

                            {/* Email */}
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: 0.1 }}
                                className="text-center group p-6 rounded-xl border border-white/10 hover:border-primary/50 transition-all duration-300"
                            >
                                <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                                    <Mail className="w-8 h-8 text-primary" />
                                </div>
                                <h3 className="font-display text-xl text-white mb-2">Email</h3>
                                <p className="text-muted-foreground">tedx@juet.ac.in</p>
                            </motion.div>

                            {/* Location */}
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: 0.2 }}
                                className="text-center group p-6 rounded-xl border border-white/10 hover:border-primary/50 transition-all duration-300"
                            >
                                <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                                    <MapPin className="w-8 h-8 text-primary" />
                                </div>
                                <h3 className="font-display text-xl text-white mb-2">Location</h3>
                                <p className="text-muted-foreground">Jaypee University of Engineering and Technology, Guna, M.P.</p>
                            </motion.div>
                        </div>
                    </div>
                </section>
            </main>

            <Footer />
        </div>
    );
};

export default Contact;
