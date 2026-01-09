import { motion } from "framer-motion";
import { Calendar, User, ChevronRight } from "lucide-react";
import { Link } from "react-router-dom";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { CustomerLayout } from "@/components/layout/CustomerLayout";

const blogPosts = [
  {
    id: 1,
    title: "10 Superfoods to Add to Your Diet in 2024",
    excerpt: "Discover the most nutritious foods that should be part of your daily meals.",
    image: "https://images.unsplash.com/photo-1490645935967-10de6ba17061?w=600&h=400&fit=crop",
    category: "Nutrition",
    author: "Dr. Meera Singh",
    date: "Jan 12, 2024",
    readTime: "5 min read",
  },
  {
    id: 2,
    title: "The Science Behind Meal Prep: Why It Works",
    excerpt: "Learn how planning your meals can transform your health and save time.",
    image: "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=600&h=400&fit=crop",
    category: "Lifestyle",
    author: "Chef Arjun Patel",
    date: "Jan 8, 2024",
    readTime: "7 min read",
  },
  {
    id: 3,
    title: "High-Protein Meals for Muscle Building",
    excerpt: "Our top picks for protein-rich meals that support your fitness goals.",
    image: "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=600&h=400&fit=crop",
    category: "Fitness",
    author: "Fitness Team",
    date: "Jan 5, 2024",
    readTime: "6 min read",
  },
  {
    id: 4,
    title: "Mindful Eating: A Guide to Conscious Consumption",
    excerpt: "How to develop a healthier relationship with food through mindfulness.",
    image: "https://images.unsplash.com/photo-1540189549336-e6e99c3679fe?w=600&h=400&fit=crop",
    category: "Wellness",
    author: "Dr. Meera Singh",
    date: "Dec 28, 2023",
    readTime: "8 min read",
  },
  {
    id: 5,
    title: "Seasonal Eating: Winter Edition",
    excerpt: "The best seasonal produce to enjoy during winter months.",
    image: "https://images.unsplash.com/photo-1547592180-85f173990554?w=600&h=400&fit=crop",
    category: "Nutrition",
    author: "Chef Arjun Patel",
    date: "Dec 20, 2023",
    readTime: "4 min read",
  },
  {
    id: 6,
    title: "Detox Diets: Facts vs Fiction",
    excerpt: "What science says about detox diets and what really works.",
    image: "https://images.unsplash.com/photo-1610970881699-44a5587cabec?w=600&h=400&fit=crop",
    category: "Nutrition",
    author: "Dr. Meera Singh",
    date: "Dec 15, 2023",
    readTime: "10 min read",
  },
];

const categories = ["All", "Nutrition", "Fitness", "Lifestyle", "Wellness"];

export default function BlogPage() {
  return (
    <CustomerLayout>
      {/* Hero */}
      <section className="bg-gradient-to-br from-primary/10 to-secondary py-16">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center max-w-3xl mx-auto"
          >
            <h1 className="text-4xl md:text-5xl font-display font-bold text-foreground mb-4">
              Healthy Living Blog
            </h1>
            <p className="text-lg text-muted-foreground">
              Tips, recipes, and insights for a healthier lifestyle
            </p>
          </motion.div>
        </div>
      </section>

      {/* Categories */}
      <section className="py-8 border-b border-border">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap justify-center gap-2">
            {categories.map((cat) => (
              <Badge
                key={cat}
                variant={cat === "All" ? "default" : "secondary"}
                className="cursor-pointer px-4 py-2"
              >
                {cat}
              </Badge>
            ))}
          </div>
        </div>
      </section>

      {/* Blog Grid */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.map((post, index) => (
              <motion.div
                key={post.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
              >
                <Card className="overflow-hidden h-full hover:shadow-lg transition-shadow cursor-pointer group">
                  <div className="aspect-[16/10] overflow-hidden">
                    <img
                      src={post.image}
                      alt={post.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <CardContent className="p-6">
                    <Badge variant="secondary" className="mb-3">{post.category}</Badge>
                    <h3 className="text-lg font-semibold text-foreground mb-2 group-hover:text-primary transition-colors">
                      {post.title}
                    </h3>
                    <p className="text-sm text-muted-foreground mb-4 line-clamp-2">
                      {post.excerpt}
                    </p>
                    <div className="flex items-center justify-between text-xs text-muted-foreground">
                      <div className="flex items-center gap-4">
                        <span className="flex items-center gap-1">
                          <User className="w-3 h-3" />
                          {post.author}
                        </span>
                        <span className="flex items-center gap-1">
                          <Calendar className="w-3 h-3" />
                          {post.date}
                        </span>
                      </div>
                      <span>{post.readTime}</span>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </CustomerLayout>
  );
}
