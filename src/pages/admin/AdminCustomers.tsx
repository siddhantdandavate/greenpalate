import { useState } from "react";
import { Search, Users, Mail, Phone, ShoppingBag, MoreHorizontal } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu";
import { AdminLayout } from "@/components/layout/AdminLayout";

const mockCustomers = [
  { id: "1", name: "Priya Sharma", email: "priya@example.com", phone: "+91 98765 43211", orders: 12, totalSpent: 15420, status: "Active" },
  { id: "2", name: "Rahul Mehta", email: "rahul@example.com", phone: "+91 98765 43212", orders: 8, totalSpent: 9840, status: "Active" },
  { id: "3", name: "Ananya Patel", email: "ananya@example.com", phone: "+91 98765 43213", orders: 25, totalSpent: 32150, status: "VIP" },
  { id: "4", name: "Vikram Kumar", email: "vikram@example.com", phone: "+91 98765 43214", orders: 3, totalSpent: 2940, status: "New" },
];

export default function AdminCustomers() {
  const [searchQuery, setSearchQuery] = useState("");
  const filtered = mockCustomers.filter(c => c.name.toLowerCase().includes(searchQuery.toLowerCase()) || c.email.toLowerCase().includes(searchQuery.toLowerCase()));

  return (
    <AdminLayout>
      <div className="space-y-6">
        <div><h1 className="text-2xl font-display font-bold">Customers</h1><p className="text-muted-foreground">Manage your customer base</p></div>
        
        <div className="grid grid-cols-4 gap-4">
          {[
            { label: "Total Customers", value: "2,847", icon: Users },
            { label: "Active", value: "2,456", icon: Users },
            { label: "New This Month", value: "124", icon: Users },
            { label: "VIP Customers", value: "89", icon: Users },
          ].map((stat) => (
            <Card key={stat.label}><CardContent className="p-4"><div className="flex items-center gap-3"><stat.icon className="w-8 h-8 text-primary" /><div><p className="text-2xl font-bold">{stat.value}</p><p className="text-xs text-muted-foreground">{stat.label}</p></div></div></CardContent></Card>
          ))}
        </div>

        <Card><CardContent className="p-4"><div className="relative"><Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" /><Input placeholder="Search customers..." value={searchQuery} onChange={(e) => setSearchQuery(e.target.value)} className="pl-10 max-w-md" /></div></CardContent></Card>

        <Card><CardContent className="p-0">
          <Table>
            <TableHeader><TableRow><TableHead>Customer</TableHead><TableHead>Contact</TableHead><TableHead>Orders</TableHead><TableHead>Total Spent</TableHead><TableHead>Status</TableHead><TableHead className="text-right">Actions</TableHead></TableRow></TableHeader>
            <TableBody>
              {filtered.map((customer) => (
                <TableRow key={customer.id}>
                  <TableCell><p className="font-medium">{customer.name}</p></TableCell>
                  <TableCell><div className="text-sm"><p className="flex items-center gap-1"><Mail className="w-3 h-3" />{customer.email}</p><p className="flex items-center gap-1 text-muted-foreground"><Phone className="w-3 h-3" />{customer.phone}</p></div></TableCell>
                  <TableCell><span className="flex items-center gap-1"><ShoppingBag className="w-4 h-4" />{customer.orders}</span></TableCell>
                  <TableCell className="font-medium">₹{customer.totalSpent.toLocaleString()}</TableCell>
                  <TableCell><Badge variant="outline" className={customer.status === "VIP" ? "bg-accent/10 text-accent-foreground" : customer.status === "New" ? "bg-info/10 text-info" : "bg-success/10 text-success"}>{customer.status}</Badge></TableCell>
                  <TableCell className="text-right"><DropdownMenu><DropdownMenuTrigger asChild><Button variant="ghost" size="icon"><MoreHorizontal className="w-4 h-4" /></Button></DropdownMenuTrigger><DropdownMenuContent align="end"><DropdownMenuItem>View Profile</DropdownMenuItem><DropdownMenuItem>View Orders</DropdownMenuItem><DropdownMenuItem>Send Email</DropdownMenuItem></DropdownMenuContent></DropdownMenu></TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent></Card>
      </div>
    </AdminLayout>
  );
}
