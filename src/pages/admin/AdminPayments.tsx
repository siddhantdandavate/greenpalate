import { CreditCard, TrendingUp, AlertCircle, RefreshCcw, Search, Download } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { AdminLayout } from "@/components/layout/AdminLayout";

const mockTransactions = [
  { id: "TXN-001", orderId: "ORD-2024-001", customer: "Priya Sharma", amount: 698, method: "UPI", status: "Success", date: "Jan 15, 2024" },
  { id: "TXN-002", orderId: "ORD-2024-002", customer: "Rahul Mehta", amount: 449, method: "Card", status: "Success", date: "Jan 15, 2024" },
  { id: "TXN-003", orderId: "ORD-2024-003", customer: "Vikram Kumar", amount: 599, method: "UPI", status: "Failed", date: "Jan 15, 2024" },
  { id: "TXN-004", orderId: "ORD-2024-004", customer: "Sneha Reddy", amount: 1197, method: "Card", status: "Refunded", date: "Jan 14, 2024" },
];

export default function AdminPayments() {
  return (
    <AdminLayout>
      <div className="space-y-6">
        <div className="flex justify-between items-center"><div><h1 className="text-2xl font-display font-bold">Payments</h1><p className="text-muted-foreground">Track all transactions</p></div><Button variant="outline"><Download className="w-4 h-4 mr-2" />Export</Button></div>
        
        <div className="grid grid-cols-4 gap-4">
          {[
            { label: "Today's Revenue", value: "₹1.24L", icon: TrendingUp, color: "text-success" },
            { label: "Successful", value: "124", icon: CreditCard, color: "text-success" },
            { label: "Failed", value: "12", icon: AlertCircle, color: "text-destructive" },
            { label: "Refunds", value: "₹8,420", icon: RefreshCcw, color: "text-warning" },
          ].map((stat) => (
            <Card key={stat.label}><CardContent className="p-4"><div className="flex items-center gap-3"><stat.icon className={`w-8 h-8 ${stat.color}`} /><div><p className={`text-2xl font-bold ${stat.color}`}>{stat.value}</p><p className="text-xs text-muted-foreground">{stat.label}</p></div></div></CardContent></Card>
          ))}
        </div>

        <Card><CardContent className="p-0">
          <Table>
            <TableHeader><TableRow><TableHead>Transaction ID</TableHead><TableHead>Order</TableHead><TableHead>Customer</TableHead><TableHead>Amount</TableHead><TableHead>Method</TableHead><TableHead>Status</TableHead><TableHead>Date</TableHead></TableRow></TableHeader>
            <TableBody>
              {mockTransactions.map((txn) => (
                <TableRow key={txn.id}>
                  <TableCell className="font-medium">{txn.id}</TableCell>
                  <TableCell>{txn.orderId}</TableCell>
                  <TableCell>{txn.customer}</TableCell>
                  <TableCell className="font-medium">₹{txn.amount}</TableCell>
                  <TableCell>{txn.method}</TableCell>
                  <TableCell><Badge variant="outline" className={txn.status === "Success" ? "bg-success/10 text-success" : txn.status === "Failed" ? "bg-destructive/10 text-destructive" : "bg-warning/10 text-warning"}>{txn.status}</Badge></TableCell>
                  <TableCell>{txn.date}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent></Card>
      </div>
    </AdminLayout>
  );
}
