import { Link } from "react-router-dom";
import { Facebook, Instagram, Linkedin, MapPin, Phone, Mail } from "lucide-react";
import { COMPANY_CONFIG } from "@/config/constants";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-dark-gray text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <div className="text-2xl font-bold text-primary-red">
              {COMPANY_CONFIG.name}
            </div>
            <p className="text-gray-300 text-sm leading-relaxed">
              Professional security services providing comprehensive protection
              solutions for businesses and residential properties across the region.
            </p>
            <div className="flex space-x-4">
              <a
                href={COMPANY_CONFIG.social.linkedin}
                className="text-gray-400 hover:text-primary-red transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin className="h-5 w-5" />
              </a>
              <a
                href={COMPANY_CONFIG.social.facebook}
                className="text-gray-400 hover:text-primary-red transition-colors"
                aria-label="Facebook"
              >
                <Facebook className="h-5 w-5" />
              </a>
              <a
                href={COMPANY_CONFIG.social.instagram}
                className="text-gray-400 hover:text-primary-red transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Contact Information */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-primary-green">Contact Info</h3>
            <div className="space-y-3 text-sm">
              <div className="flex items-start space-x-3">
                <MapPin className="h-4 w-4 mt-1 text-primary-red flex-shrink-0" />
                <span className="text-gray-300">{COMPANY_CONFIG.contact.address.full}</span>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="h-4 w-4 text-primary-red flex-shrink-0" />
                <span className="text-gray-300">{COMPANY_CONFIG.contact.phone}</span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="h-4 w-4 text-primary-red flex-shrink-0" />
                <span className="text-gray-300">{COMPANY_CONFIG.contact.email}</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-primary-green">Quick Links</h3>
            <nav className="space-y-2 text-sm">
              <Link
                to="/about"
                className="block text-gray-300 hover:text-primary-red transition-colors"
              >
                About Us
              </Link>
              <Link
                to="/services"
                className="block text-gray-300 hover:text-primary-red transition-colors"
              >
                Our Services
              </Link>
              <Link
                to="/fleet"
                className="block text-gray-300 hover:text-primary-red transition-colors"
              >
                Fleet & Equipment
              </Link>
              <Link
                to="/blog"
                className="block text-gray-300 hover:text-primary-red transition-colors"
              >
                Security Blog
              </Link>
              <Link
                to="/contact"
                className="block text-gray-300 hover:text-primary-red transition-colors"
              >
                Contact Us
              </Link>
            </nav>
          </div>

          {/* Services */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-primary-green">Our Services</h3>
            <nav className="space-y-2 text-sm">
              {COMPANY_CONFIG.services.map((service) => (
                <Link
                  key={service.id}
                  to={`/services#${service.id}`}
                  className="block text-gray-300 hover:text-primary-red transition-colors"
                >
                  {service.title}
                </Link>
              ))}
            </nav>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-700 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm text-gray-400">
            © {currentYear} {COMPANY_CONFIG.name}. All rights reserved.
          </p>
          <div className="flex space-x-6 mt-4 md:mt-0 text-sm">
            <Link to="/privacy" className="text-gray-400 hover:text-primary-red transition-colors">
              Privacy Policy
            </Link>
            <Link to="/terms" className="text-gray-400 hover:text-primary-red transition-colors">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;