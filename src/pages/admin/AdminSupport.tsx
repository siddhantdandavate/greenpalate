import { HeadphonesIcon, MessageSquare, Clock, CheckCircle, AlertCircle } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { AdminLayout } from "@/components/layout/AdminLayout";

const tickets = [
  { id: "TKT-001", customer: "Priya Sharma", subject: "Order not received", status: "Open", priority: "High", date: "Jan 15, 2024" },
  { id: "TKT-002", customer: "Rahul Mehta", subject: "Wrong item delivered", status: "In Progress", priority: "Medium", date: "Jan 15, 2024" },
  { id: "TKT-003", customer: "Ananya Patel", subject: "Refund request", status: "Resolved", priority: "Low", date: "Jan 14, 2024" },
];

export default function AdminSupport() {
  return (
    <AdminLayout>
      <div className="space-y-6">
        <div><h1 className="text-2xl font-display font-bold">Support</h1><p className="text-muted-foreground">Manage customer support tickets</p></div>
        
        <div className="grid grid-cols-4 gap-4">
          {[
            { label: "Open Tickets", value: "23", icon: MessageSquare, color: "text-warning" },
            { label: "In Progress", value: "12", icon: Clock, color: "text-info" },
            { label: "Resolved Today", value: "34", icon: CheckCircle, color: "text-success" },
            { label: "Avg Response", value: "2.4h", icon: HeadphonesIcon, color: "text-primary" },
          ].map((stat) => (
            <Card key={stat.label}><CardContent className="p-4"><div className="flex items-center gap-3"><stat.icon className={`w-8 h-8 ${stat.color}`} /><div><p className={`text-2xl font-bold ${stat.color}`}>{stat.value}</p><p className="text-xs text-muted-foreground">{stat.label}</p></div></div></CardContent></Card>
          ))}
        </div>

        <Card>
          <CardHeader><CardTitle>Recent Tickets</CardTitle></CardHeader>
          <CardContent className="space-y-4">
            {tickets.map((ticket) => (
              <div key={ticket.id} className="flex items-center justify-between p-4 border rounded-lg hover:bg-muted/50 transition-colors">
                <div><div className="flex items-center gap-2 mb-1"><span className="font-medium">{ticket.id}</span><Badge variant="outline" className={ticket.priority === "High" ? "bg-destructive/10 text-destructive" : ticket.priority === "Medium" ? "bg-warning/10 text-warning" : "bg-muted"}>{ticket.priority}</Badge></div><p className="text-sm">{ticket.subject}</p><p className="text-xs text-muted-foreground">{ticket.customer} • {ticket.date}</p></div>
                <div className="flex items-center gap-3"><Badge variant="outline" className={ticket.status === "Open" ? "bg-warning/10 text-warning" : ticket.status === "In Progress" ? "bg-info/10 text-info" : "bg-success/10 text-success"}>{ticket.status}</Badge><Button variant="outline" size="sm">View</Button></div>
              </div>
            ))}
          </CardContent>
        </Card>
      </div>
    </AdminLayout>
  );
}
