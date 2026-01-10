import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { 
  Minus, Plus, Trash2, ShoppingBag, ArrowRight, 
  Tag, Truck, Clock, ChevronRight 
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Separator } from "@/components/ui/separator";
import { Badge } from "@/components/ui/badge";
import { CustomerLayout } from "@/components/layout/CustomerLayout";
import { useToast } from "@/hooks/use-toast";
import { useApp } from "@/contexts/AppContext";
import { useState } from "react";

const suggestedAddons = [
  { id: "addon-1", name: "Detox Green Juice", price: 149, image: "https://images.unsplash.com/photo-1610970881699-44a5587cabec?w=80&h=80&fit=crop", calories: 85 },
  { id: "addon-2", name: "Extra Protein (Chicken)", price: 99, image: "https://images.unsplash.com/photo-1604908176997-125f25cc6f3d?w=80&h=80&fit=crop", calories: 120 },
  { id: "addon-3", name: "Fresh Fruit Bowl", price: 129, image: "https://images.unsplash.com/photo-1564093497595-593b96d80180?w=80&h=80&fit=crop", calories: 95 },
];

export default function CartPage() {
  const { cart, updateCartQuantity, removeFromCart, addToCart } = useApp();
  const [couponCode, setCouponCode] = useState("");
  const [appliedCoupon, setAppliedCoupon] = useState<string | null>(null);
  const { toast } = useToast();

  const addAddon = (addon: { id: string; name: string; price: number; image: string; calories: number }) => {
    addToCart({
      id: addon.id,
      name: addon.name,
      price: addon.price,
      image: addon.image,
      calories: addon.calories,
    });
    toast({
      title: "Added to cart",
      description: `${addon.name} has been added`,
    });
  };

  const applyCoupon = () => {
    if (couponCode.toUpperCase() === "FIRST20") {
      setAppliedCoupon("FIRST20");
      toast({
        title: "Coupon applied!",
        description: "20% discount has been applied to your order",
      });
    } else {
      toast({
        title: "Invalid coupon",
        description: "Please check the coupon code and try again",
        variant: "destructive",
      });
    }
    setCouponCode("");
  };

  const subtotal = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);
  const discount = appliedCoupon === "FIRST20" ? subtotal * 0.2 : 0;
  const deliveryFee = subtotal >= 500 ? 0 : 49;
  const total = subtotal - discount + deliveryFee;

  if (cart.length === 0) {
    return (
      <CustomerLayout>
        <div className="min-h-[60vh] flex items-center justify-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center"
          >
            <ShoppingBag className="w-16 h-16 mx-auto text-muted-foreground mb-4" />
            <h2 className="text-2xl font-display font-bold text-foreground mb-2">
              Your cart is empty
            </h2>
            <p className="text-muted-foreground mb-6">
              Looks like you haven't added anything yet
            </p>
            <Button asChild>
              <Link to="/menu">Browse Menu</Link>
            </Button>
          </motion.div>
        </div>
      </CustomerLayout>
    );
  }

  return (
    <CustomerLayout>
      <div className="bg-muted/30 min-h-screen py-8">
        <div className="container mx-auto px-4">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-3xl font-display font-bold text-foreground mb-8"
          >
            Your Cart
          </motion.h1>

          <div className="grid lg:grid-cols-3 gap-8">
            {/* Cart Items */}
            <div className="lg:col-span-2 space-y-4">
              {cart.map((item, index) => (
                <motion.div
                  key={item.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.05 }}
                >
                  <Card>
                    <CardContent className="p-4">
                      <div className="flex gap-4">
                        <img
                          src={item.image || "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=100&h=100&fit=crop"}
                          alt={item.name}
                          className="w-20 h-20 rounded-lg object-cover"
                        />
                        <div className="flex-1">
                          <h3 className="font-semibold text-foreground">{item.name}</h3>
                          <p className="text-sm text-muted-foreground">{item.calories} kcal</p>
                          <p className="text-lg font-bold text-foreground mt-1">
                            ₹{item.price * item.quantity}
                          </p>
                        </div>
                        <div className="flex flex-col items-end justify-between">
                          <Button
                            variant="ghost"
                            size="icon"
                            className="h-8 w-8 text-muted-foreground hover:text-destructive"
                            onClick={() => removeFromCart(item.id)}
                          >
                            <Trash2 className="w-4 h-4" />
                          </Button>
                          <div className="flex items-center gap-2">
                            <Button
                              variant="outline"
                              size="icon"
                              className="h-8 w-8"
                              onClick={() => updateCartQuantity(item.id, item.quantity - 1)}
                            >
                              <Minus className="w-4 h-4" />
                            </Button>
                            <span className="w-8 text-center font-medium">{item.quantity}</span>
                            <Button
                              size="icon"
                              className="h-8 w-8"
                              onClick={() => updateCartQuantity(item.id, item.quantity + 1)}
                            >
                              <Plus className="w-4 h-4" />
                            </Button>
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}

              {/* Suggested Add-ons */}
              <Card className="mt-6">
                <CardHeader>
                  <CardTitle className="text-lg">Complete Your Meal</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex gap-4 overflow-x-auto pb-2">
                    {suggestedAddons.map((addon) => (
                      <div
                        key={addon.id}
                        className="flex-shrink-0 w-40 p-3 border border-border rounded-lg hover:border-primary/50 transition-colors"
                      >
                        <img
                          src={addon.image}
                          alt={addon.name}
                          className="w-full h-20 rounded-lg object-cover mb-2"
                        />
                        <p className="text-sm font-medium text-foreground line-clamp-1">
                          {addon.name}
                        </p>
                        <div className="flex items-center justify-between mt-2">
                          <span className="text-sm font-bold">₹{addon.price}</span>
                          <Button size="sm" variant="outline" onClick={() => addAddon(addon)}>
                            <Plus className="w-4 h-4" />
                          </Button>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Order Summary */}
            <div>
              <Card className="sticky top-24">
                <CardHeader>
                  <CardTitle>Order Summary</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  {/* Coupon */}
                  <div className="flex gap-2">
                    <Input
                      placeholder="Coupon code"
                      value={couponCode}
                      onChange={(e) => setCouponCode(e.target.value)}
                    />
                    <Button variant="outline" onClick={applyCoupon}>
                      Apply
                    </Button>
                  </div>
                  {appliedCoupon && (
                    <Badge variant="secondary" className="gap-1">
                      <Tag className="w-3 h-3" />
                      {appliedCoupon} applied
                    </Badge>
                  )}

                  <Separator />

                  {/* Price Breakdown */}
                  <div className="space-y-2 text-sm">
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Subtotal</span>
                      <span>₹{subtotal}</span>
                    </div>
                    {discount > 0 && (
                      <div className="flex justify-between text-success">
                        <span>Discount (20%)</span>
                        <span>-₹{discount.toFixed(0)}</span>
                      </div>
                    )}
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Delivery</span>
                      <span>{deliveryFee === 0 ? "FREE" : `₹${deliveryFee}`}</span>
                    </div>
                  </div>

                  <Separator />

                  <div className="flex justify-between text-lg font-bold">
                    <span>Total</span>
                    <span>₹{total.toFixed(0)}</span>
                  </div>

                  {/* Delivery Info */}
                  <div className="bg-muted/50 rounded-lg p-3 space-y-2">
                    <div className="flex items-center gap-2 text-sm">
                      <Truck className="w-4 h-4 text-success" />
                      <span>Free delivery on orders above ₹500</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm">
                      <Clock className="w-4 h-4 text-primary" />
                      <span>Estimated delivery: Tomorrow</span>
                    </div>
                  </div>

                  <Button asChild className="w-full" size="lg">
                    <Link to="/checkout">
                      Proceed to Checkout
                      <ArrowRight className="ml-2 w-4 h-4" />
                    </Link>
                  </Button>

                  <Button asChild variant="ghost" className="w-full">
                    <Link to="/menu">
                      <ChevronRight className="mr-2 w-4 h-4 rotate-180" />
                      Continue Shopping
                    </Link>
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </CustomerLayout>
  );
}
