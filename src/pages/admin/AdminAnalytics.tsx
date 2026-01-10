import { TrendingUp, Users, ShoppingBag, RefreshCcw, Download } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { AdminLayout } from "@/components/layout/AdminLayout";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, BarChart, Bar } from "recharts";

const revenueData = [
  { name: "Jan", revenue: 125000 }, { name: "Feb", revenue: 142000 }, { name: "Mar", revenue: 158000 },
  { name: "Apr", revenue: 175000 }, { name: "May", revenue: 192000 }, { name: "Jun", revenue: 218000 },
];

const ordersData = [
  { name: "Mon", orders: 145 }, { name: "Tue", orders: 132 }, { name: "Wed", orders: 167 },
  { name: "Thu", orders: 156 }, { name: "Fri", orders: 189 }, { name: "Sat", orders: 234 }, { name: "Sun", orders: 198 },
];

export default function AdminAnalytics() {
  return (
    <AdminLayout>
      <div className="space-y-6">
        <div className="flex justify-between items-center"><div><h1 className="text-2xl font-display font-bold">Analytics</h1><p className="text-muted-foreground">Business performance insights</p></div><Button variant="outline"><Download className="w-4 h-4 mr-2" />Export Report</Button></div>
        
        <div className="grid grid-cols-4 gap-4">
          {[
            { label: "Total Revenue", value: "₹21.8L", change: "+18%", icon: TrendingUp },
            { label: "Total Orders", value: "4,521", change: "+12%", icon: ShoppingBag },
            { label: "Active Customers", value: "2,847", change: "+8%", icon: Users },
            { label: "Retention Rate", value: "78%", change: "+5%", icon: RefreshCcw },
          ].map((stat) => (
            <Card key={stat.label}><CardContent className="p-4"><div className="flex items-center justify-between"><stat.icon className="w-8 h-8 text-primary" /><span className="text-xs text-success">{stat.change}</span></div><p className="text-2xl font-bold mt-2">{stat.value}</p><p className="text-xs text-muted-foreground">{stat.label}</p></CardContent></Card>
          ))}
        </div>

        <div className="grid lg:grid-cols-2 gap-6">
          <Card><CardHeader><CardTitle>Revenue Trend</CardTitle></CardHeader><CardContent><div className="h-64"><ResponsiveContainer width="100%" height="100%"><LineChart data={revenueData}><CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" /><XAxis dataKey="name" stroke="hsl(var(--muted-foreground))" fontSize={12} /><YAxis stroke="hsl(var(--muted-foreground))" fontSize={12} /><Tooltip contentStyle={{ backgroundColor: "hsl(var(--card))", border: "1px solid hsl(var(--border))", borderRadius: "8px" }} /><Line type="monotone" dataKey="revenue" stroke="hsl(var(--primary))" strokeWidth={3} /></LineChart></ResponsiveContainer></div></CardContent></Card>
          <Card><CardHeader><CardTitle>Orders This Week</CardTitle></CardHeader><CardContent><div className="h-64"><ResponsiveContainer width="100%" height="100%"><BarChart data={ordersData}><CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" /><XAxis dataKey="name" stroke="hsl(var(--muted-foreground))" fontSize={12} /><YAxis stroke="hsl(var(--muted-foreground))" fontSize={12} /><Tooltip contentStyle={{ backgroundColor: "hsl(var(--card))", border: "1px solid hsl(var(--border))", borderRadius: "8px" }} /><Bar dataKey="orders" fill="hsl(var(--primary))" radius={[4, 4, 0, 0]} /></BarChart></ResponsiveContainer></div></CardContent></Card>
        </div>
      </div>
    </AdminLayout>
  );
}
