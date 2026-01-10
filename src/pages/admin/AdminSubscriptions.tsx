import { useState } from "react";
import { Search, Filter, MoreHorizontal, Pause, Play, X, Edit2 } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuSeparator, DropdownMenuTrigger } from "@/components/ui/dropdown-menu";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { AdminLayout } from "@/components/layout/AdminLayout";
import { useApp } from "@/contexts/AppContext";

export default function AdminSubscriptions() {
  const { subscriptions, updateSubscriptionStatus } = useApp();
  const [statusFilter, setStatusFilter] = useState("all");
  const [searchQuery, setSearchQuery] = useState("");

  const filteredSubs = subscriptions.filter((sub) => {
    if (statusFilter !== "all" && sub.status.toLowerCase() !== statusFilter) return false;
    if (searchQuery && !sub.customerName.toLowerCase().includes(searchQuery.toLowerCase())) return false;
    return true;
  });

  return (
    <AdminLayout>
      <div className="space-y-6">
        <div className="flex justify-between items-center">
          <div>
            <h1 className="text-2xl font-display font-bold">Subscriptions</h1>
            <p className="text-muted-foreground">Manage all customer subscriptions</p>
          </div>
        </div>

        <div className="grid grid-cols-3 gap-4">
          {[
            { label: "Active", value: subscriptions.filter(s => s.status === "Active").length, color: "text-success" },
            { label: "Paused", value: subscriptions.filter(s => s.status === "Paused").length, color: "text-warning" },
            { label: "Cancelled", value: subscriptions.filter(s => s.status === "Cancelled").length, color: "text-destructive" },
          ].map((stat) => (
            <Card key={stat.label}>
              <CardContent className="p-4 text-center">
                <p className={`text-2xl font-bold ${stat.color}`}>{stat.value}</p>
                <p className="text-xs text-muted-foreground">{stat.label}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        <Card>
          <CardContent className="p-4">
            <div className="flex gap-4">
              <div className="relative flex-1">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                <Input placeholder="Search by customer..." value={searchQuery} onChange={(e) => setSearchQuery(e.target.value)} className="pl-10" />
              </div>
              <Select value={statusFilter} onValueChange={setStatusFilter}>
                <SelectTrigger className="w-40"><SelectValue placeholder="Status" /></SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All</SelectItem>
                  <SelectItem value="active">Active</SelectItem>
                  <SelectItem value="paused">Paused</SelectItem>
                  <SelectItem value="cancelled">Cancelled</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-0">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>ID</TableHead>
                  <TableHead>Customer</TableHead>
                  <TableHead>Plan</TableHead>
                  <TableHead>Price</TableHead>
                  <TableHead>Status</TableHead>
                  <TableHead>Next Delivery</TableHead>
                  <TableHead className="text-right">Actions</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {filteredSubs.map((sub) => (
                  <TableRow key={sub.id}>
                    <TableCell className="font-medium">{sub.id}</TableCell>
                    <TableCell>{sub.customerName}</TableCell>
                    <TableCell>{sub.plan}</TableCell>
                    <TableCell>₹{sub.price}</TableCell>
                    <TableCell>
                      <Badge variant="outline" className={
                        sub.status === "Active" ? "bg-success/10 text-success" :
                        sub.status === "Paused" ? "bg-warning/10 text-warning" :
                        "bg-destructive/10 text-destructive"
                      }>{sub.status}</Badge>
                    </TableCell>
                    <TableCell>{sub.nextDelivery}</TableCell>
                    <TableCell className="text-right">
                      <DropdownMenu>
                        <DropdownMenuTrigger asChild><Button variant="ghost" size="icon"><MoreHorizontal className="w-4 h-4" /></Button></DropdownMenuTrigger>
                        <DropdownMenuContent align="end">
                          <DropdownMenuItem onClick={() => updateSubscriptionStatus(sub.id, "Active")}><Play className="w-4 h-4 mr-2" />Activate</DropdownMenuItem>
                          <DropdownMenuItem onClick={() => updateSubscriptionStatus(sub.id, "Paused")}><Pause className="w-4 h-4 mr-2" />Pause</DropdownMenuItem>
                          <DropdownMenuSeparator />
                          <DropdownMenuItem onClick={() => updateSubscriptionStatus(sub.id, "Cancelled")} className="text-destructive"><X className="w-4 h-4 mr-2" />Cancel</DropdownMenuItem>
                        </DropdownMenuContent>
                      </DropdownMenu>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </CardContent>
        </Card>
      </div>
    </AdminLayout>
  );
}
