import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import { Link, useLocation } from "react-router-dom";
const navItems = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Speakers", href: "/speakers" },
  { label: "Contact", href: "/contact" },
];

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavClick = () => {
    setIsMobileMenuOpen(false);
  };

  const NavLink = ({ item }: { item: typeof navItems[0] }) => {
    const isActive = location.pathname === item.href;

    return (
      <Link
        to={item.href}
        className="relative group py-2"
      >
        <span className={`text-sm tracking-widest uppercase font-medium transition-colors duration-300 ${isActive ? "text-primary" : "text-white/80 group-hover:text-white"}`}>
          {item.label}
        </span>
        {/* Animated Underline */}
        <span className={`absolute bottom-0 left-0 w-full h-[1px] bg-primary transform origin-center transition-transform duration-300 ${isActive ? "scale-x-100" : "scale-x-0 group-hover:scale-x-100"}`} />

        {/* Glow Effect on Hover */}
        <span className="absolute inset-0 bg-primary/20 blur-xl rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10" />
      </Link>
    );
  };

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${isScrolled || isMobileMenuOpen
        ? "bg-black/80 backdrop-blur-md border-b border-white/10 py-2"
        : "bg-transparent py-6"
        }`}
    >
      <nav className="container mx-auto px-4 lg:px-8 flex items-center justify-between">
        {/* Logo */}
        <Link
          to="/"
          onClick={(e) => {
            if (location.pathname === "/") {
              e.preventDefault();
              window.scrollTo({ top: 0, behavior: "smooth" });
            }
          }}
          className="flex items-center group select-none -ml-2 lg:-ml-3"
        >
          <span className="text-2xl lg:text-3xl font-black font-body tracking-tighter flex items-baseline">
            <span className="text-[#e62b1e]">TED</span>
            <span className="text-[#e62b1e] text-lg lg:text-xl -translate-y-1 mx-px">x</span>
            <span className="text-white font-bold ml-1">JUET</span>
          </span>
        </Link>

        {/* Desktop Navigation - Centered with Decorative Separators */}
        <div className="hidden lg:flex items-center justify-center gap-8 bg-black/40 backdrop-blur-sm px-8 py-3 rounded-full border border-white/5">
          {navItems.map((item, index) => (
            <div key={item.label} className="flex items-center gap-8">
              <NavLink item={item} />
              {/* Add separation dot except for the last item */}
              {index < navItems.length - 1 && (
                <div className="w-1 h-1 bg-white/20 rounded-full rotate-45" />
              )}
            </div>
          ))}
        </div>

        {/* Empty div for balancing flex justify-between if needed, or CTA button */}
        <div className="hidden lg:block w-[100px]">
          {/* Optional: Add a small CTA or keep empty to center nav */}
        </div>

        {/* Mobile Menu Toggle */}
        <button
          className="lg:hidden text-white p-2 hover:bg-white/10 rounded-full transition-colors"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label="Toggle menu"
        >
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden bg-black/95 backdrop-blur-xl border-b border-white/10 overflow-hidden"
          >
            <div className="container mx-auto px-4 py-8 flex flex-col gap-6 items-center">
              {navItems.map((item) => (
                <Link
                  key={item.label}
                  to={item.href}
                  onClick={handleNavClick}
                  className={`text-lg tracking-widest uppercase font-medium transition-colors ${location.pathname === item.href
                    ? "text-primary"
                    : "text-white/70 hover:text-white"
                    }`}
                >
                  {item.label}
                </Link>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
};

export default Navbar;
