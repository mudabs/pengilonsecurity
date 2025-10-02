import Hero from "@/components/sections/Hero";
import ServicesPreview from "@/components/sections/ServicesPreview";
import AboutPreview from "@/components/sections/AboutPreview";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import fleetImage from "@/assets/security-fleet.jpg";

const Home = () => {
  return (
    <div className="min-h-screen">
      <Hero />
      <ServicesPreview />
      <AboutPreview />

      {/* Fleet Preview Section */}
      <section className="py-20 bg-secondary">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground">
                Professional Fleet & Equipment
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Our modern fleet of patrol vehicles and state-of-the-art
                security equipment ensures rapid response times and
                comprehensive coverage for all your security needs.
              </p>
              <ul className="space-y-3 text-muted-foreground">
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-primary rounded-full mr-3"></div>
                  GPS-enabled patrol vehicles for real-time tracking
                </li>
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-accent rounded-full mr-3"></div>
                  Advanced communication systems for instant coordination
                </li>
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-primary rounded-full mr-3"></div>
                  Professional uniforms and identification for all personnel
                </li>
              </ul>
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
                <Link to="/fleet">
                  View Our Fleet
                  <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </Link>
              </Button>
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

      {/* Blog Preview */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Security Insights & Updates
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Stay informed with the latest security trends, tips, and industry
              insights from our expert team.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            {[
              {
                title: "Best Practices for Commercial Security",
                excerpt:
                  "Essential security measures every business should implement to protect assets and personnel.",
                date: "March 15, 2024",
                category: "Commercial Security",
              },
              {
                title: "Technology Trends in Security Services",
                excerpt:
                  "How modern technology is revolutionizing the security industry and improving protection.",
                date: "March 10, 2024",
                category: "Technology",
              },
              {
                title: "Emergency Response Protocols",
                excerpt:
                  "Understanding proper emergency response procedures and their importance in security planning.",
                date: "March 5, 2024",
                category: "Emergency Response",
              },
            ].map((post, index) => (
              <article
                key={index}
                className="bg-card rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow"
              >
                <div className="space-y-4">
                  <div className="flex items-center justify-between text-sm">
                    <span className="bg-primary/10 text-primary px-2 py-1 rounded-full text-xs font-medium">
                      {post.category}
                    </span>
                    <span className="text-muted-foreground">{post.date}</span>
                  </div>
                  <h3 className="text-xl font-semibold text-foreground hover:text-primary cursor-pointer transition-colors">
                    {post.title}
                  </h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {post.excerpt}
                  </p>
                  <Button
                    variant="ghost"
                    className="
    font-semibold
    text-primary
    hover:text-primary/80
    px-6 py-3        // wider and taller button
    text-lg           // bigger font
    rounded-full
    flex items-center gap-2
  "
                  >
                    <span>Read More</span>
                    <span>→</span>
                  </Button>
                </div>
              </article>
            ))}
          </div>

          <div className="text-center">
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
              <Link to="/blog">
                View All Posts
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
