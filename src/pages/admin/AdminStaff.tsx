import { UserCog, Shield, Users, Plus } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { AdminLayout } from "@/components/layout/AdminLayout";

const staff = [
  { id: 1, name: "Admin User", email: "admin@healthygreens.com", role: "Super Admin", status: "Active" },
  { id: 2, name: "Rajesh Kumar", email: "rajesh@healthygreens.com", role: "Operations", status: "Active" },
  { id: 3, name: "Meera Patel", email: "meera@healthygreens.com", role: "Marketing", status: "Active" },
  { id: 4, name: "Amit Shah", email: "amit@healthygreens.com", role: "Support", status: "Inactive" },
];

const roles = [
  { name: "Super Admin", permissions: "Full access to all features", count: 1 },
  { name: "Operations", permissions: "Orders, Delivery, Inventory", count: 3 },
  { name: "Marketing", permissions: "Campaigns, Analytics, Reviews", count: 2 },
  { name: "Support", permissions: "Tickets, Customer profiles", count: 4 },
];

export default function AdminStaff() {
  return (
    <AdminLayout>
      <div className="space-y-6">
        <div className="flex justify-between items-center"><div><h1 className="text-2xl font-display font-bold">Staff & Roles</h1><p className="text-muted-foreground">Manage team access</p></div><Button><Plus className="w-4 h-4 mr-2" />Add Staff</Button></div>
        
        <div className="grid lg:grid-cols-2 gap-6">
          <Card>
            <CardHeader><CardTitle>Team Members</CardTitle></CardHeader>
            <CardContent className="space-y-4">
              {staff.map((member) => (
                <div key={member.id} className="flex items-center justify-between p-3 border rounded-lg">
                  <div className="flex items-center gap-3"><Avatar><AvatarFallback>{member.name.charAt(0)}</AvatarFallback></Avatar><div><p className="font-medium">{member.name}</p><p className="text-sm text-muted-foreground">{member.email}</p></div></div>
                  <div className="flex items-center gap-2"><Badge variant="secondary">{member.role}</Badge><Badge variant="outline" className={member.status === "Active" ? "bg-success/10 text-success" : "bg-muted"}>{member.status}</Badge></div>
                </div>
              ))}
            </CardContent>
          </Card>

          <Card>
            <CardHeader><CardTitle>Roles & Permissions</CardTitle></CardHeader>
            <CardContent className="space-y-4">
              {roles.map((role) => (
                <div key={role.name} className="p-3 border rounded-lg">
                  <div className="flex items-center justify-between mb-2"><div className="flex items-center gap-2"><Shield className="w-4 h-4 text-primary" /><span className="font-medium">{role.name}</span></div><Badge variant="secondary">{role.count} members</Badge></div>
                  <p className="text-sm text-muted-foreground">{role.permissions}</p>
                </div>
              ))}
            </CardContent>
          </Card>
        </div>
      </div>
    </AdminLayout>
  );
}
