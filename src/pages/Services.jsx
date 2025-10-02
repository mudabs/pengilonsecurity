import { Shield, Car, Camera, Monitor, Clock, CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Link } from "react-router-dom";
import { COMPANY_CONFIG } from "@/config/constants";

const Services = () => {
  const serviceDetails = [
    {
      id: "manned-guarding",
      title: "Manned Guarding",
      icon: Shield,
      description: "Professional security personnel providing 24/7 protection for your premises with comprehensive training and expertise.",
      features: [
        "24/7 on-site security presence",
        "Trained and licensed security officers",
        "Access control and visitor management", 
        "Incident reporting and documentation",
        "Emergency response coordination",
        "Customer service orientation"
      ],
      benefits: "Ideal for office buildings, retail stores, construction sites, and residential complexes requiring constant security presence."
    },
    {
      id: "mobile-patrols", 
      title: "Mobile Patrols",
      icon: Car,
      description: "Regular patrol services with comprehensive reporting and immediate response capabilities across multiple locations.",
      features: [
        "Scheduled and random patrol visits",
        "GPS-tracked patrol routes",
        "Detailed written reports",
        "Key holding services",
        "Alarm response services",
        "Rapid emergency response"
      ],
      benefits: "Perfect for multiple locations, large properties, or businesses requiring flexible security coverage without full-time guards."
    },
    {
      id: "cctv-alarms",
      title: "CCTV & Alarm Systems", 
      icon: Camera,
      description: "Advanced surveillance and alarm systems providing complete security coverage with modern technology solutions.",
      features: [
        "High-definition camera installation",
        "Remote monitoring capabilities",
        "Motion detection technology",
        "Burglar and fire alarm systems",
        "Integration with mobile apps",
        "Cloud storage and backup"
      ],
      benefits: "Comprehensive protection with evidence recording, remote access, and automated alerts for proactive security management."
    },
    {
      id: "electronic-security",
      title: "Electronic Security & Monitoring",
      icon: Monitor,
      description: "Cutting-edge electronic security solutions with 24/7 monitoring services and immediate response protocols.",
      features: [
        "24/7 monitoring center",
        "Instant alert notifications",
        "Integration with existing systems",
        "Access control systems", 
        "Biometric authentication",
        "Central station monitoring"
      ],
      benefits: "Advanced technology solutions providing real-time security monitoring with professional response team coordination."
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-primary/10 to-accent/10 py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Our Security Services
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Comprehensive security solutions tailored to protect your assets, 
            personnel, and peace of mind with professional excellence.
          </p>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            {COMPANY_CONFIG.services.map((service) => {
              const iconMap = { Shield, Car, Camera, Monitor };
              const IconComponent = iconMap[service.icon];
              
              return (
                <Card key={service.id} className="text-center hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <div className="flex justify-center mb-4">
                      <div className="bg-primary/10 p-4 rounded-full">
                        <IconComponent className="h-8 w-8 text-primary" />
                      </div>
                    </div>
                    <CardTitle className="text-lg">{service.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-sm">
                      {service.description}
                    </CardDescription>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Detailed Services */}
      <section className="py-20 bg-secondary">
        <div className="container mx-auto px-4">
          <div className="space-y-20">
            {serviceDetails.map((service, index) => {
              const IconComponent = service.icon;
              const isEven = index % 2 === 0;
              
              return (
                <div key={service.id} id={service.id} className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${!isEven ? 'lg:grid-flow-dense' : ''}`}>
                  {/* Content */}
                  <div className={`space-y-6 ${!isEven ? 'lg:col-start-2' : ''}`}>
                    <div className="flex items-center space-x-4">
                      <div className="bg-primary/10 p-3 rounded-full">
                        <IconComponent className="h-8 w-8 text-primary" />
                      </div>
                      <h2 className="text-3xl md:text-4xl font-bold text-foreground">
                        {service.title}
                      </h2>
                    </div>
                    
                    <p className="text-lg text-muted-foreground leading-relaxed">
                      {service.description}
                    </p>
                    
                    <div className="bg-background p-6 rounded-xl">
                      <h3 className="text-xl font-semibold text-foreground mb-4 flex items-center">
                        <CheckCircle className="h-5 w-5 text-accent mr-2" />
                        Key Features
                      </h3>
                      <ul className="space-y-3">
                        {service.features.map((feature, featureIndex) => (
                          <li key={featureIndex} className="flex items-start">
                            <div className="w-2 h-2 bg-primary rounded-full mt-2 mr-3 flex-shrink-0"></div>
                            <span className="text-muted-foreground">{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    
                    <div className="bg-accent/10 p-4 rounded-lg">
                      <p className="text-foreground font-medium">
                        <span className="text-accent font-semibold">Best For:</span> {service.benefits}
                      </p>
                    </div>
                  </div>
                  
                  {/* Visual Element */}
                  <div className={`${!isEven ? 'lg:col-start-1 lg:row-start-1' : ''}`}>
                    <div className="bg-gradient-to-br from-primary/20 to-accent/20 rounded-2xl p-8 h-80 flex items-center justify-center">
                      <div className="text-center">
                        <div className="bg-background/80 p-8 rounded-xl">
                          <IconComponent className="h-16 w-16 text-primary mx-auto mb-4" />
                          <div className="text-2xl font-bold text-foreground mb-2">
                            {service.title}
                          </div>
                          <div className="flex items-center justify-center text-accent">
                            <Clock className="h-4 w-4 mr-2" />
                            <span className="text-sm font-medium">24/7 Available</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
              Ready to Secure Your Property?
            </h2>
            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
              Contact us today for a free security consultation and customized 
              protection plan tailored to your specific needs.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" asChild>
                <Link to="/contact">
                  Get Free Quote
                </Link>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <Link to="/contact">
                  Schedule Consultation
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;