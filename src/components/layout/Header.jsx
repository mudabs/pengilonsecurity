import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, Phone, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import { COMPANY_CONFIG } from "@/config/constants";
import logo from "@/assets/logo.png"; // ✅ Import logo

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const navItems = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "Services", href: "/services" },
    { name: "Fleet", href: "/fleet" },
    { name: "Blog", href: "/blog" },
    { name: "Contact", href: "/contact" },
  ];

  const isActive = (href) => location.pathname === href;

  return (
    <header className="sticky top-0 z-50 w-full bg-white shadow-sm border-b border-border">
      {/* Top Contact Bar */}
      <div className="hidden md:block bg-secondary py-2">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center text-sm text-muted-foreground">
            <div className="flex items-center space-x-6">
              <div className="flex items-center space-x-2">
                <Phone className="h-4 w-4" />
                <span>{COMPANY_CONFIG.contact.phone}</span>
              </div>
              <div className="flex items-center space-x-2">
                <Mail className="h-4 w-4" />
                <span>{COMPANY_CONFIG.contact.email}</span>
              </div>
            </div>
            <div className="text-sm font-medium">
              24/7 Emergency Response Available
            </div>
          </div>
        </div>
      </div>

      {/* Main Navigation */}
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center py-4">
          {/* ✅ Logo + Brand */}
          <Link to="/" className="flex items-center space-x-2">
            <img
              src={logo}
              alt="Company Logo"
              className="h-10 w-auto" // height = 40px
            />
            <span className="text-2xl font-bold text-primary hidden sm:inline">
              {COMPANY_CONFIG.name}
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.name}
                to={item.href}
                className={`font-medium transition-colors hover:text-primary ${
                  isActive(item.href) ? "text-primary" : "text-foreground"
                }`}
              >
                {item.name}
              </Link>
            ))}
          </nav>

          {/* CTA Button */}
          <div className="hidden md:flex items-center space-x-4">
            <Button
              variant="outline"
              size="sm"
              asChild
              className="rounded-full px-4"
            >
              <Link to="/contact">Get Quote</Link>
            </Button>
            <Button size="sm" asChild className="rounded-full px-4">
              <Link to="/contact">Contact Us</Link>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <Menu className="h-6 w-6" />
            )}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav className="md:hidden border-t border-border py-4">
            <div className="flex flex-col space-y-4">
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  to={item.href}
                  className={`font-medium px-4 py-2 transition-colors hover:text-primary ${
                    isActive(item.href) ? "text-primary" : "text-foreground"
                  }`}
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
              <div className="flex flex-col space-y-2 px-4 pt-4 border-t border-border">
                <Button
                  size="lg"
                  asChild
                  className="inline-flex items-center h-14 px-8 rounded-xl text-white font-semibold bg-primary-green hover:bg-primary-green/90 transition-colors"
                >
                  <Link to="/contact" onClick={() => setIsMenuOpen(false)}>
                    Get Quote
                  </Link>
                </Button>
                <Button
                  size="lg"
                  asChild
                  className="inline-flex items-center h-14 px-8 rounded-xl text-white font-semibold bg-primary-white hover:bg-primary-white/90 transition-colors"
                >
                  <Link to="/contact">Contact Us</Link>
                </Button>
              </div>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;
