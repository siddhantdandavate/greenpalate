import { Package, AlertTriangle, TrendingDown, Plus, Search } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { AdminLayout } from "@/components/layout/AdminLayout";

const ingredients = [
  { id: 1, name: "Quinoa", stock: 25, unit: "kg", minStock: 10, status: "Good" },
  { id: 2, name: "Chicken Breast", stock: 8, unit: "kg", minStock: 15, status: "Low" },
  { id: 3, name: "Salmon", stock: 3, unit: "kg", minStock: 5, status: "Critical" },
  { id: 4, name: "Mixed Greens", stock: 18, unit: "kg", minStock: 8, status: "Good" },
  { id: 5, name: "Avocado", stock: 45, unit: "pcs", minStock: 20, status: "Good" },
];

export default function AdminInventory() {
  return (
    <AdminLayout>
      <div className="space-y-6">
        <div className="flex justify-between items-center"><div><h1 className="text-2xl font-display font-bold">Inventory</h1><p className="text-muted-foreground">Track ingredient stock levels</p></div><Button><Plus className="w-4 h-4 mr-2" />Add Item</Button></div>
        
        <div className="grid grid-cols-3 gap-4">
          {[
            { label: "Total Items", value: "124", icon: Package, color: "text-primary" },
            { label: "Low Stock", value: "8", icon: TrendingDown, color: "text-warning" },
            { label: "Out of Stock", value: "2", icon: AlertTriangle, color: "text-destructive" },
          ].map((stat) => (
            <Card key={stat.label}><CardContent className="p-4"><div className="flex items-center gap-3"><stat.icon className={`w-8 h-8 ${stat.color}`} /><div><p className={`text-2xl font-bold ${stat.color}`}>{stat.value}</p><p className="text-xs text-muted-foreground">{stat.label}</p></div></div></CardContent></Card>
          ))}
        </div>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between"><CardTitle>Inventory Items</CardTitle><div className="relative w-64"><Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" /><Input placeholder="Search items..." className="pl-10" /></div></CardHeader>
          <CardContent className="space-y-4">
            {ingredients.map((item) => (
              <div key={item.id} className="flex items-center justify-between p-4 border rounded-lg">
                <div><p className="font-medium">{item.name}</p><p className="text-sm text-muted-foreground">{item.stock} {item.unit} in stock</p></div>
                <div className="flex items-center gap-6 w-1/2">
                  <div className="flex-1"><Progress value={(item.stock / (item.minStock * 3)) * 100} className="h-2" /></div>
                  <Badge variant="outline" className={item.status === "Good" ? "bg-success/10 text-success" : item.status === "Low" ? "bg-warning/10 text-warning" : "bg-destructive/10 text-destructive"}>{item.status}</Badge>
                  <Button variant="outline" size="sm">Restock</Button>
                </div>
              </div>
            ))}
          </CardContent>
        </Card>
      </div>
    </AdminLayout>
  );
}
