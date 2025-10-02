import { Link } from "react-router-dom";
import { Calendar, Clock, ArrowRight, User } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

const Blog = () => {
  const blogPosts = [
    {
      id: 1,
      title: "Best Practices for Commercial Security",
      excerpt:
        "Essential security measures every business should implement to protect assets, employees, and customers. Learn about access control, surveillance systems, and emergency protocols.",
      author: "John Mitchell",
      date: "March 15, 2024",
      readTime: "5 min read",
      category: "Commercial Security",
      featured: true,
    },
    {
      id: 2,
      title: "Technology Trends in Security Services",
      excerpt:
        "How modern technology is revolutionizing the security industry. From AI-powered surveillance to mobile patrol apps, discover the latest innovations.",
      author: "Sarah Chen",
      date: "March 10, 2024",
      readTime: "4 min read",
      category: "Technology",
      featured: true,
    },
    {
      id: 3,
      title: "Emergency Response Protocols",
      excerpt:
        "Understanding proper emergency response procedures and their importance in comprehensive security planning. Guidelines for various emergency scenarios.",
      author: "Mike Rodriguez",
      date: "March 5, 2024",
      readTime: "6 min read",
      category: "Emergency Response",
      featured: true,
    },
    {
      id: 4,
      title: "Residential Security: Home Protection Tips",
      excerpt:
        "Comprehensive guide to protecting your home and family with effective security measures, from basic precautions to advanced systems.",
      author: "Lisa Thompson",
      date: "February 28, 2024",
      readTime: "4 min read",
      category: "Residential Security",
      featured: false,
    },
    {
      id: 5,
      title: "The Importance of Security Personnel Training",
      excerpt:
        "Why continuous training and certification are crucial for effective security services. Standards, requirements, and best practices.",
      author: "John Mitchell",
      date: "February 22, 2024",
      readTime: "5 min read",
      category: "Training",
      featured: false,
    },
    {
      id: 6,
      title: "CCTV Systems: Choosing the Right Solution",
      excerpt:
        "A comprehensive guide to selecting and implementing CCTV surveillance systems for different types of properties and security needs.",
      author: "Sarah Chen",
      date: "February 18, 2024",
      readTime: "7 min read",
      category: "Technology",
      featured: false,
    },
  ];

  const categories = [
    "All Posts",
    "Commercial Security",
    "Technology",
    "Emergency Response",
    "Residential Security",
    "Training",
  ];

  const featuredPosts = blogPosts.filter((post) => post.featured);
  const regularPosts = blogPosts.filter((post) => !post.featured);

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-primary/10 to-accent/10 py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Security Insights & Updates
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Stay informed with the latest security trends, expert tips, and
            industry insights from our professional team.
          </p>
        </div>
      </section>

      {/* Categories */}
      <section className="py-8 bg-background border-b border-border">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap justify-center gap-2">
            {categories.map((category, index) => (
              <Button
                key={index}
                variant={index === 0 ? "default" : "outline"}
                size="lg" // bigger preset
                className="rounded-full"
              >
                {category}
              </Button>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Posts */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Featured Articles
            </h2>
            <p className="text-lg text-muted-foreground">
              Our most popular and informative security insights
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-20">
            {featuredPosts.map((post, index) => (
              <Card
                key={post.id}
                className={`hover:shadow-lg transition-all duration-300 hover:-translate-y-1 ${
                  index === 0 ? "lg:col-span-2 lg:row-span-2" : ""
                }`}
              >
                <div
                  className={`bg-gradient-to-br from-primary/10 to-accent/10 ${
                    index === 0 ? "h-64" : "h-32"
                  } rounded-t-lg flex items-center justify-center`}
                >
                  <div className="text-center text-muted-foreground">
                    <div
                      className={`${
                        index === 0 ? "text-6xl" : "text-4xl"
                      } mb-4`}
                    >
                      📄
                    </div>
                    <p className="font-medium">Featured Article</p>
                  </div>
                </div>
                <CardHeader className={index === 0 ? "pb-4" : "pb-2"}>
                  <div className="flex items-center justify-between text-sm text-muted-foreground mb-2">
                    <span className="bg-primary/10 text-primary px-2 py-1 rounded-full text-xs font-medium">
                      {post.category}
                    </span>
                    <div className="flex items-center space-x-2">
                      <Clock className="h-3 w-3" />
                      <span>{post.readTime}</span>
                    </div>
                  </div>
                  <CardTitle
                    className={`hover:text-primary cursor-pointer transition-colors ${
                      index === 0 ? "text-2xl" : "text-lg"
                    }`}
                  >
                    {post.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription
                    className={`mb-4 ${
                      index === 0 ? "text-base" : "text-sm"
                    } leading-relaxed`}
                  >
                    {post.excerpt}
                  </CardDescription>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center text-sm text-muted-foreground">
                      <User className="h-4 w-4 mr-2" />
                      <span>{post.author}</span>
                      <Calendar className="h-4 w-4 ml-4 mr-2" />
                      <span>{post.date}</span>
                    </div>
                    {/* MODIFIED: Outline, rounded-full, and green accent styling */}

                    <Button
                      variant="outline"
                      className="
    rounded-full 
    text-accent border-accent
    hover:bg-accent hover:text-accent-foreground
    font-semibold
    px-6 py-2 text-sm
    flex items-center gap-2 // 👈 keeps text & arrow aligned
  "
                    >
                      <span>Read More</span>
                      <span>→</span>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* All Posts */}
      <section className="py-20 bg-secondary">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Latest Articles
            </h2>
            <p className="text-lg text-muted-foreground">
              Explore our complete collection of security insights
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {regularPosts.map((post) => (
              <Card
                key={post.id}
                className="hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
              >
                <div className="bg-gradient-to-br from-primary/5 to-accent/5 h-32 rounded-t-lg flex items-center justify-center">
                  <div className="text-center text-muted-foreground">
                    <div className="text-4xl mb-2">📄</div>
                    <p className="text-sm font-medium">Article</p>
                  </div>
                </div>
                <CardHeader className="pb-2">
                  <div className="flex items-center justify-between text-sm text-muted-foreground mb-2">
                    <span className="bg-primary/10 text-primary px-2 py-1 rounded-full text-xs font-medium">
                      {post.category}
                    </span>
                    <div className="flex items-center space-x-2">
                      <Clock className="h-3 w-3" />
                      <span>{post.readTime}</span>
                    </div>
                  </div>
                  <CardTitle className="text-lg hover:text-primary cursor-pointer transition-colors">
                    {post.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-sm leading-relaxed mb-4">
                    {post.excerpt}
                  </CardDescription>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center text-xs text-muted-foreground">
                      <User className="h-3 w-3 mr-1" />
                      <span>{post.author}</span>
                      <Calendar className="h-3 w-3 ml-3 mr-1" />
                      <span>{post.date}</span>
                    </div>
                    {/* MODIFIED: Outline, rounded-full, and green accent styling */}
                    <Button
                      variant="outline"
                      className="
    rounded-full 
    text-accent border-accent
    hover:bg-accent hover:text-accent-foreground
    font-semibold
    px-6 py-3         // bigger padding
    text-sm            // slightly bigger font than text-xs
    flex items-center gap-2
  "
                    >
                      <span>Read More</span>
                      <span>→</span>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter Signup */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
              Stay Updated
            </h2>
            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
              Subscribe to our newsletter for the latest security tips, industry
              updates, and company news delivered to your inbox.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 rounded-lg border border-border bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary"
              />
              <Button
                size="lg"
                className="
    group
    rounded-full        // makes it pill-shaped
    px-6 py-3           // extra padding for bigger size
    flex items-center gap-2  // keeps text and arrow on same line
  "
              >
                <span>Subscribe</span>
                <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Button>
            </div>
            <p className="text-sm text-muted-foreground mt-4">
              No spam, unsubscribe at any time.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Blog;
