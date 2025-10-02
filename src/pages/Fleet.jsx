import { Car, Shield, Smartphone, MapPin } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import fleetImage from "@/assets/security-fleet.jpg";

const Fleet = () => {
  const fleetAssets = [
    {
      category: "Patrol Vehicles",
      description: "Modern, well-maintained fleet for rapid response and regular patrols",
      items: [
        "GPS-enabled patrol cars",
        "Motorcycle units for quick response",
        "Marked security vehicles",
        "Emergency response vehicles"
      ]
    },
    {
      category: "Communication Equipment", 
      description: "Advanced communication systems for seamless coordination",
      items: [
        "Two-way radio systems",
        "Mobile communication units",
        "Emergency alert devices",
        "Real-time GPS tracking"
      ]
    },
    {
      category: "Uniforms & Gear",
      description: "Professional appearance and essential safety equipment",
      items: [
        "Official security uniforms",
        "Photo identification badges",
        "Safety equipment",
        "Protective gear"
      ]
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-primary/10 to-accent/10 py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Our Fleet & Equipment
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            State-of-the-art vehicles and equipment ensuring rapid response 
            and comprehensive security coverage.
          </p>
        </div>
      </section>

      {/* Main Fleet Image */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-20">
            <div className="space-y-6">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground">
                Professional Fleet Operations
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Our modern fleet of security vehicles is maintained to the highest 
                standards, equipped with cutting-edge technology, and operated by 
                trained professionals to ensure maximum efficiency and response capability.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="flex items-center space-x-3">
                  <div className="bg-primary/10 p-2 rounded-full">
                    <MapPin className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <div className="text-sm font-semibold text-foreground">GPS Tracking</div>
                    <div className="text-xs text-muted-foreground">Real-time location</div>
                  </div>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="bg-accent/10 p-2 rounded-full">
                    <Smartphone className="h-5 w-5 text-accent" />
                  </div>
                  <div>
                    <div className="text-sm font-semibold text-foreground">Connected</div>
                    <div className="text-xs text-muted-foreground">24/7 communication</div>
                  </div>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="bg-primary/10 p-2 rounded-full">
                    <Car className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <div className="text-sm font-semibold text-foreground">Rapid Response</div>
                    <div className="text-xs text-muted-foreground">Quick deployment</div>
                  </div>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="bg-accent/10 p-2 rounded-full">
                    <Shield className="h-5 w-5 text-accent" />
                  </div>
                  <div>
                    <div className="text-sm font-semibold text-foreground">Professional</div>
                    <div className="text-xs text-muted-foreground">Marked vehicles</div>
                  </div>
                </div>
              </div>
            </div>
            <div className="relative">
              <img
                src={fleetImage}
                alt="Security patrol fleet"
                className="rounded-2xl shadow-lg w-full h-auto"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Fleet Categories */}
      <section className="py-20 bg-secondary">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Fleet Assets & Equipment
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Comprehensive inventory of vehicles, equipment, and gear designed 
              to deliver professional security services efficiently.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {fleetAssets.map((asset, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardHeader className="text-center">
                  <div className="flex justify-center mb-4">
                    <div className="bg-primary/10 p-4 rounded-full">
                      {index === 0 && <Car className="h-8 w-8 text-primary" />}
                      {index === 1 && <Smartphone className="h-8 w-8 text-primary" />}
                      {index === 2 && <Shield className="h-8 w-8 text-primary" />}
                    </div>
                  </div>
                  <CardTitle className="text-xl">{asset.category}</CardTitle>
                  <CardDescription>{asset.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3">
                    {asset.items.map((item, itemIndex) => (
                      <li key={itemIndex} className="flex items-start">
                        <div className="w-2 h-2 bg-accent rounded-full mt-2 mr-3 flex-shrink-0"></div>
                        <span className="text-muted-foreground text-sm">{item}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Technology Features */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Advanced Technology Integration
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Our fleet incorporates the latest security technology to ensure 
              maximum efficiency and coverage.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                title: "GPS Tracking",
                description: "Real-time vehicle location and route optimization",
                icon: MapPin
              },
              {
                title: "Communication Systems",
                description: "Instant coordination between units and control center",
                icon: Smartphone
              },
              {
                title: "Emergency Response",
                description: "Rapid deployment capabilities for urgent situations",
                icon: Car
              },
              {
                title: "Professional Standards",
                description: "Maintained fleet meeting industry safety standards",
                icon: Shield
              }
            ].map((feature, index) => {
              const IconComponent = feature.icon;
              return (
                <div key={index} className="text-center">
                  <div className="bg-card p-8 rounded-xl shadow-sm hover:shadow-md transition-shadow">
                    <div className="flex justify-center mb-4">
                      <div className="bg-primary/10 p-4 rounded-full">
                        <IconComponent className="h-8 w-8 text-primary" />
                      </div>
                    </div>
                    <h3 className="text-lg font-semibold text-foreground mb-3">
                      {feature.title}
                    </h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {feature.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="py-20 bg-secondary">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Fleet Gallery
            </h2>
            <p className="text-lg text-muted-foreground">
              A closer look at our professional security fleet and equipment
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {Array.from({ length: 6 }, (_, index) => (
              <div key={index} className="relative group">
                <div className="bg-muted rounded-xl h-64 flex items-center justify-center hover:bg-muted/80 transition-colors cursor-pointer">
                  <div className="text-center text-muted-foreground">
                    <Car className="h-12 w-12 mx-auto mb-4" />
                    <p className="font-medium">Fleet Image {index + 1}</p>
                    <p className="text-sm">Professional security vehicle</p>
                  </div>
                </div>
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors rounded-xl"></div>
              </div>
            ))}
          </div>
          
          <div className="text-center mt-12">
            <p className="text-muted-foreground">
              * Interactive gallery would include high-resolution images of our patrol vehicles, 
              equipment, and uniformed personnel.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Fleet;