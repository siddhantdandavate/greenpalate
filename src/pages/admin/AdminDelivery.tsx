import { Truck, Clock, Calendar, MapPin, Plus } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Switch } from "@/components/ui/switch";
import { AdminLayout } from "@/components/layout/AdminLayout";

const deliverySlots = [
  { id: 1, name: "Morning", time: "7:00 AM - 10:00 AM", capacity: 50, booked: 42, enabled: true },
  { id: 2, name: "Afternoon", time: "12:00 PM - 3:00 PM", capacity: 50, booked: 38, enabled: true },
  { id: 3, name: "Evening", time: "6:00 PM - 9:00 PM", capacity: 50, booked: 50, enabled: false },
];

export default function AdminDelivery() {
  return (
    <AdminLayout>
      <div className="space-y-6">
        <div className="flex justify-between items-center"><div><h1 className="text-2xl font-display font-bold">Delivery & Slots</h1><p className="text-muted-foreground">Manage delivery slots and schedules</p></div><Button><Plus className="w-4 h-4 mr-2" />Add Slot</Button></div>
        
        <div className="grid grid-cols-4 gap-4">
          {[
            { label: "Today's Deliveries", value: "127", icon: Truck },
            { label: "On-Time Rate", value: "94%", icon: Clock },
            { label: "Available Slots", value: "12", icon: Calendar },
            { label: "Coverage Areas", value: "8", icon: MapPin },
          ].map((stat) => (
            <Card key={stat.label}><CardContent className="p-4"><div className="flex items-center gap-3"><stat.icon className="w-8 h-8 text-primary" /><div><p className="text-2xl font-bold">{stat.value}</p><p className="text-xs text-muted-foreground">{stat.label}</p></div></div></CardContent></Card>
          ))}
        </div>

        <Card>
          <CardHeader><CardTitle>Delivery Slots - Today</CardTitle></CardHeader>
          <CardContent className="space-y-4">
            {deliverySlots.map((slot) => (
              <div key={slot.id} className="flex items-center justify-between p-4 border rounded-lg">
                <div className="flex items-center gap-4">
                  <Clock className="w-5 h-5 text-primary" />
                  <div><p className="font-medium">{slot.name}</p><p className="text-sm text-muted-foreground">{slot.time}</p></div>
                </div>
                <div className="flex items-center gap-6">
                  <div className="text-right"><p className="font-medium">{slot.booked}/{slot.capacity}</p><p className="text-xs text-muted-foreground">Booked</p></div>
                  <Badge variant="outline" className={slot.booked >= slot.capacity ? "bg-destructive/10 text-destructive" : "bg-success/10 text-success"}>{slot.booked >= slot.capacity ? "Full" : "Available"}</Badge>
                  <Switch checked={slot.enabled} />
                </div>
              </div>
            ))}
          </CardContent>
        </Card>
      </div>
    </AdminLayout>
  );
}
