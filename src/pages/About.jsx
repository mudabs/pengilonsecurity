import { Award, Users, Clock, Shield, Target, Eye } from "lucide-react";
import { COMPANY_CONFIG } from "@/config/constants";

const About = () => {
  const stats = [
    { label: "Years of Experience", value: "15+", icon: Clock },
    { label: "Satisfied Clients", value: "500+", icon: Users },
    { label: "Security Personnel", value: "50+", icon: Shield },
    { label: "Coverage Areas", value: "10+", icon: Target },
  ];

  const teamMembers = [
    {
      name: "Samuel Mudabura",
      role: "CEO & Founder",
      experience: "20+ years in security management",
      avatar: "👨‍💼",
    },
    {
      name: "Munashe Mudabura",
      role: "Technology Director",
      experience: "10+ years in security technology",
      avatar: "👩‍💻",
    },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-primary/10 to-accent/10 py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            About {COMPANY_CONFIG.name}
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Providing professional security services with integrity,
            reliability, and excellence for over 15 years.
          </p>
        </div>
      </section>

      {/* Company Story */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground">
                Our Story
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Founded in 2008, {COMPANY_CONFIG.name} began with a simple
                mission: to provide reliable, professional security services
                that businesses and homeowners could trust completely.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Over the years, we've grown from a small local operation to a
                comprehensive security services provider, serving hundreds of
                clients across the region. Our success is built on unwavering
                commitment to excellence, continuous training, and investment in
                the latest security technologies.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Today, we're proud to be recognized as one of the leading
                security companies in our area, known for our professionalism,
                reliability, and customer-first approach.
              </p>
            </div>

            <div className="space-y-8">
              <div className="bg-card p-6 rounded-xl shadow-sm border border-border">
                <div className="flex items-center mb-4">
                  <Target className="h-8 w-8 text-primary mr-3" />
                  <h3 className="text-2xl font-bold text-foreground">
                    Mission
                  </h3>
                </div>
                <p className="text-muted-foreground leading-relaxed">
                  To provide unparalleled security services that protect our
                  clients' assets and ensure their peace of mind through
                  professional excellence, cutting-edge technology, and
                  unwavering commitment to safety.
                </p>
              </div>

              <div className="bg-card p-6 rounded-xl shadow-sm border border-border">
                <div className="flex items-center mb-4">
                  <Eye className="h-8 w-8 text-accent mr-3" />
                  <h3 className="text-2xl font-bold text-foreground">Vision</h3>
                </div>
                <p className="text-muted-foreground leading-relaxed">
                  To be the leading security services provider in our region,
                  setting industry standards for reliability, innovation, and
                  customer satisfaction while fostering a safer community.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-secondary">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Our Track Record
            </h2>
            <p className="text-lg text-muted-foreground">
              Numbers that speak to our commitment and experience
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => {
              const IconComponent = stat.icon;
              return (
                <div key={index} className="text-center">
                  <div className="bg-background p-6 rounded-xl shadow-sm">
                    <div className="flex justify-center mb-4">
                      <div className="bg-primary/10 p-4 rounded-full">
                        <IconComponent className="h-8 w-8 text-primary" />
                      </div>
                    </div>
                    <div className="text-3xl md:text-4xl font-bold text-primary mb-2">
                      {stat.value}
                    </div>
                    <div className="text-muted-foreground font-medium">
                      {stat.label}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Our Leadership Team
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Meet the experienced professionals who lead our security
              operations and ensure excellence in every service we provide.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 justify-center">
            {teamMembers.map((member, index) => (
              <div
                key={index}
                className="bg-card p-6 rounded-xl shadow-sm text-center hover:shadow-md transition-shadow"
              >
                <div className="text-6xl mb-4">{member.avatar}</div>
                <h3 className="text-xl font-semibold text-foreground mb-2">
                  {member.name}
                </h3>
                <div className="text-primary font-medium mb-3">
                  {member.role}
                </div>
                <p className="text-sm text-muted-foreground">
                  {member.experience}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Accreditation Section */}
      <section className="py-20 bg-secondary">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Accreditations & Partnerships
            </h2>
            <p className="text-lg text-muted-foreground">
              Certified and trusted by leading industry organizations
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 items-center">
            {[
              "Licensed Security Provider",
              "Insurance Certified",
              "Industry Association Member",
              "Background Check Verified",
            ].map((cert, index) => (
              <div key={index} className="text-center">
                <div className="bg-background p-6 rounded-xl shadow-sm">
                  <Award className="h-12 w-12 text-primary mx-auto mb-4" />
                  <div className="text-sm font-medium text-foreground">
                    {cert}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
