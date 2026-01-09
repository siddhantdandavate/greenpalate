import { motion } from "framer-motion";
import { MapPin, Clock, Briefcase, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { CustomerLayout } from "@/components/layout/CustomerLayout";

const openings = [
  {
    id: 1,
    title: "Senior Chef",
    department: "Kitchen",
    location: "Mumbai",
    type: "Full-time",
    description: "Lead our culinary team in creating innovative healthy dishes.",
  },
  {
    id: 2,
    title: "Delivery Operations Manager",
    department: "Operations",
    location: "Mumbai",
    type: "Full-time",
    description: "Oversee our delivery network and optimize logistics.",
  },
  {
    id: 3,
    title: "Marketing Specialist",
    department: "Marketing",
    location: "Remote",
    type: "Full-time",
    description: "Drive our digital marketing campaigns and brand awareness.",
  },
  {
    id: 4,
    title: "Customer Support Executive",
    department: "Support",
    location: "Mumbai",
    type: "Full-time",
    description: "Provide exceptional support to our customers.",
  },
  {
    id: 5,
    title: "Nutritionist",
    department: "R&D",
    location: "Mumbai",
    type: "Part-time",
    description: "Design and validate nutritional content of our meals.",
  },
];

const benefits = [
  "Competitive salary & bonuses",
  "Health insurance coverage",
  "Flexible work hours",
  "Free healthy meals daily",
  "Learning & development budget",
  "Team outings & events",
];

export default function CareersPage() {
  return (
    <CustomerLayout>
      {/* Hero */}
      <section className="bg-gradient-to-br from-primary/10 to-secondary py-20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center max-w-3xl mx-auto"
          >
            <h1 className="text-4xl md:text-5xl font-display font-bold text-foreground mb-6">
              Join Our Team
            </h1>
            <p className="text-lg text-muted-foreground">
              Be part of a mission to make healthy eating accessible to everyone. 
              We're looking for passionate individuals to join our growing team.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-16 bg-muted/50">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl font-display font-bold text-foreground text-center mb-8">
            Why Work With Us?
          </h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 max-w-3xl mx-auto">
            {benefits.map((benefit, index) => (
              <motion.div
                key={benefit}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
                className="flex items-center gap-3 bg-background p-4 rounded-lg"
              >
                <div className="w-2 h-2 rounded-full bg-primary" />
                <span className="text-foreground">{benefit}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Openings */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl font-display font-bold text-foreground text-center mb-8">
            Open Positions
          </h2>
          <div className="max-w-3xl mx-auto space-y-4">
            {openings.map((job, index) => (
              <motion.div
                key={job.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
              >
                <Card className="hover:shadow-md transition-shadow">
                  <CardContent className="p-6">
                    <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                      <div>
                        <h3 className="text-lg font-semibold text-foreground mb-2">{job.title}</h3>
                        <p className="text-sm text-muted-foreground mb-3">{job.description}</p>
                        <div className="flex flex-wrap gap-2">
                          <Badge variant="secondary" className="gap-1">
                            <Briefcase className="w-3 h-3" />
                            {job.department}
                          </Badge>
                          <Badge variant="secondary" className="gap-1">
                            <MapPin className="w-3 h-3" />
                            {job.location}
                          </Badge>
                          <Badge variant="secondary" className="gap-1">
                            <Clock className="w-3 h-3" />
                            {job.type}
                          </Badge>
                        </div>
                      </div>
                      <Button className="shrink-0">
                        Apply Now
                        <ChevronRight className="w-4 h-4 ml-1" />
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-2xl font-display font-bold mb-4">
            Don't see the right role?
          </h2>
          <p className="text-primary-foreground/70 mb-6 max-w-xl mx-auto">
            We're always looking for talented people. Send us your resume and we'll 
            keep you in mind for future opportunities.
          </p>
          <Button variant="secondary">
            Send Your Resume
          </Button>
        </div>
      </section>
    </CustomerLayout>
  );
}
