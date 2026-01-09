import { motion } from "framer-motion";
import { Truck, Clock, MapPin, Package, Phone } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { CustomerLayout } from "@/components/layout/CustomerLayout";

const deliverySlots = [
  { time: "7:00 AM - 10:00 AM", label: "Morning", description: "Perfect for breakfast" },
  { time: "12:00 PM - 3:00 PM", label: "Afternoon", description: "Fresh lunch delivery" },
  { time: "6:00 PM - 9:00 PM", label: "Evening", description: "Dinner at your doorstep" },
];

const cities = [
  { name: "Mumbai", areas: "All major areas including Andheri, Bandra, Worli, Powai, BKC" },
  { name: "Pune", areas: "Koregaon Park, Viman Nagar, Hinjewadi, Kothrud, Aundh" },
  { name: "Bangalore", areas: "Koramangala, Indiranagar, HSR Layout, Whitefield" },
];

export default function DeliveryPage() {
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
              Delivery Information
            </h1>
            <p className="text-lg text-muted-foreground">
              Fast, reliable, and eco-friendly delivery right to your doorstep
            </p>
          </motion.div>
        </div>
      </section>

      {/* Delivery Slots */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl font-display font-bold text-foreground text-center mb-8">
            Delivery Slots
          </h2>
          <div className="grid sm:grid-cols-3 gap-6 max-w-3xl mx-auto">
            {deliverySlots.map((slot, index) => (
              <motion.div
                key={slot.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <Card className="text-center h-full">
                  <CardContent className="p-6">
                    <Clock className="w-10 h-10 text-primary mx-auto mb-4" />
                    <h3 className="font-semibold text-foreground mb-1">{slot.label}</h3>
                    <p className="text-lg font-bold text-primary mb-2">{slot.time}</p>
                    <p className="text-sm text-muted-foreground">{slot.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Delivery Areas */}
      <section className="py-16 bg-muted/50">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl font-display font-bold text-foreground text-center mb-8">
            Delivery Areas
          </h2>
          <div className="max-w-3xl mx-auto space-y-4">
            {cities.map((city, index) => (
              <motion.div
                key={city.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <Card>
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4">
                      <MapPin className="w-6 h-6 text-primary shrink-0 mt-1" />
                      <div>
                        <h3 className="font-semibold text-foreground mb-1">{city.name}</h3>
                        <p className="text-sm text-muted-foreground">{city.areas}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Delivery Info */}
      <section className="py-16">
        <div className="container mx-auto px-4 max-w-3xl">
          <div className="grid sm:grid-cols-2 gap-6">
            <Card>
              <CardContent className="p-6">
                <Truck className="w-10 h-10 text-primary mb-4" />
                <h3 className="font-semibold text-foreground mb-2">Free Delivery</h3>
                <p className="text-sm text-muted-foreground">
                  Orders above ₹500 qualify for free delivery. A flat ₹49 delivery fee applies to smaller orders.
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6">
                <Package className="w-10 h-10 text-primary mb-4" />
                <h3 className="font-semibold text-foreground mb-2">Eco-Friendly Packaging</h3>
                <p className="text-sm text-muted-foreground">
                  All our meals are packed in recyclable, insulated containers that keep food fresh.
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6">
                <Clock className="w-10 h-10 text-primary mb-4" />
                <h3 className="font-semibold text-foreground mb-2">On-Time Guarantee</h3>
                <p className="text-sm text-muted-foreground">
                  We guarantee delivery within your chosen slot. Late? Get 10% off your next order.
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6">
                <Phone className="w-10 h-10 text-primary mb-4" />
                <h3 className="font-semibold text-foreground mb-2">Real-Time Tracking</h3>
                <p className="text-sm text-muted-foreground">
                  Track your delivery in real-time with live location updates via SMS and app.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </CustomerLayout>
  );
}
