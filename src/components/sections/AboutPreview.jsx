import { Link } from "react-router-dom";
import { ArrowRight, Award, Users, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";
import { COMPANY_CONFIG } from "@/config/constants";

const AboutPreview = () => {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="space-y-6">
            <div className="space-y-4">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground">
                Trusted Security Excellence Since 2008
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                {COMPANY_CONFIG.name} has been at the forefront of professional
                security services, providing comprehensive protection solutions
                to businesses and residential properties throughout the region.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Our commitment to excellence, cutting-edge technology, and
                highly trained personnel ensures your security needs are met
                with the highest standards of professionalism and reliability.
              </p>
            </div>

            {/* Key Points */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              <div className="text-center">
                <div className="bg-accent/10 p-3 rounded-full w-fit mx-auto mb-3">
                  <Award className="h-6 w-6 text-accent" />
                </div>
                <div className="text-sm font-semibold text-foreground">
                  Licensed & Insured
                </div>
              </div>
              <div className="text-center">
                <div className="bg-primary/10 p-3 rounded-full w-fit mx-auto mb-3">
                  <Users className="h-6 w-6 text-primary" />
                </div>
                <div className="text-sm font-semibold text-foreground">
                  Expert Team
                </div>
              </div>
              <div className="text-center">
                <div className="bg-accent/10 p-3 rounded-full w-fit mx-auto mb-3">
                  <Clock className="h-6 w-6 text-accent" />
                </div>
                <div className="text-sm font-semibold text-foreground">
                  24/7 Support
                </div>
              </div>
            </div>

            <div className="pt-4">
              <Button
                size="lg"
                variant="outline"
                asChild
                className="group
                  bg-brand-white                  
                  text-accent
                  border-accent
                  hover:bg-accent 
                  hover:text-accent-foreground 
                  rounded-xl
                  h-12 px-8
                "
              >
                <Link to="/about">
                  Learn More About Us
                  <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </Link>
              </Button>
            </div>
          </div>

          {/* Image */}
          <div className="relative">
            <div className="bg-gradient-to-br from-primary/20 to-accent/20 rounded-2xl p-8">
              <div className="bg-white rounded-xl p-8 shadow-lg">
                <div className="space-y-6">
                  <div className="text-center">
                    <div className="text-3xl font-bold text-primary mb-2">
                      Mission
                    </div>
                    <p className="text-sm text-muted-foreground">
                      To provide unparalleled security services that protect our
                      clients' assets and ensure their peace of mind through
                      professional excellence.
                    </p>
                  </div>

                  <div className="border-t pt-6 text-center">
                    <div className="text-3xl font-bold text-accent mb-2">
                      Vision
                    </div>
                    <p className="text-sm text-muted-foreground">
                      To be the leading security services provider, setting
                      industry standards for reliability, innovation, and
                      customer satisfaction.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutPreview;
