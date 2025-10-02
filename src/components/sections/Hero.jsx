import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight, Shield } from "lucide-react";
import { COMPANY_CONFIG } from "@/config/constants";
import heroBanner from "@/assets/hero-security-banner.jpg";
import logo from "@/assets/logo.png"; // ✅ Import logo
import { motion } from "framer-motion";

const Hero = () => {
  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src={heroBanner}
          alt="Professional security services"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/60" />
      </div>

      {/* Content */}
      <div className="relative z-10 text-center max-w-4xl mx-auto px-4">
        {/* Company Logo */}
        <div className="flex justify-center mb-6">
          <img
            src={logo}
            alt="Company Logo"
            className="h-32 w-auto" // ~80px tall
          />
        </div>

        {/* Shield Icon */}
        {/* <div className="flex justify-center mb-6">
          <div className="bg-primary-red/20 p-4 rounded-full backdrop-blur-sm">
            <Shield className="h-12 w-12 text-white" />
          </div>
        </div> */}

        <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">
          <motion.span
            initial={{ opacity: 0, x: -100 }} // start left & invisible
            whileInView={{ opacity: 1, x: 0 }} // slide into place
            exit={{ opacity: 0, x: 100 }} // slide out to the right
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ once: false, amount: 0.3 }} // animate on every scroll
          >
            {COMPANY_CONFIG.tagline}
          </motion.span>
        </h1>

        <p className="text-xl md:text-2xl text-gray-200 mb-8 max-w-2xl mx-auto leading-relaxed">
          Professional security services protecting what matters most to you.
          Available 24/7 with rapid response capabilities.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Button
            size="lg"
            className="bg-primary-red hover:bg-primary-red/90 text-white h-14 px-8 text-lg font-semibold rounded-xl group"
            asChild
          >
            <Link to="/contact" className="flex items-center">
              <span>Request Quote</span>
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Link>
          </Button>

          <Button
            size="lg"
            variant="outline"
            className="bg-primary-green hover:bg-primary-green/90 text-white border-primary-green h-14 px-8 text-lg font-semibold rounded-xl"
            asChild
          >
            <Link to="/contact" className="flex items-center">
              <span>Contact Us</span>
            </Link>
          </Button>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 mt-16">
          <div className="text-center">
            <div className="text-3xl md:text-4xl font-bold text-primary-red mb-2">
              24/7
            </div>
            <div className="text-white/80">Emergency Response</div>
          </div>
          <div className="text-center">
            <div className="text-3xl md:text-4xl font-bold text-primary-green mb-2">
              15+
            </div>
            <div className="text-white/80">Years Experience</div>
          </div>
          <div className="text-center">
            <div className="text-3xl md:text-4xl font-bold text-primary-red mb-2">
              500+
            </div>
            <div className="text-white/80">Satisfied Clients</div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white/70 rounded-full mt-2"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
