import { Star, MessageSquare, ThumbsUp, Flag } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { AdminLayout } from "@/components/layout/AdminLayout";

const reviews = [
  { id: 1, customer: "Priya S.", rating: 5, comment: "Amazing bowls! Fresh ingredients and great taste.", product: "Mediterranean Quinoa Bowl", date: "Jan 15, 2024", replied: true },
  { id: 2, customer: "Rahul M.", rating: 4, comment: "Good portion size, delivery was on time.", product: "Grilled Chicken Power Bowl", date: "Jan 14, 2024", replied: false },
  { id: 3, customer: "Ananya P.", rating: 2, comment: "Bowl was cold when delivered. Disappointed.", product: "Salmon Poke Bowl", date: "Jan 14, 2024", replied: true },
];

export default function AdminReviews() {
  return (
    <AdminLayout>
      <div className="space-y-6">
        <div><h1 className="text-2xl font-display font-bold">Reviews</h1><p className="text-muted-foreground">Monitor customer feedback</p></div>
        
        <div className="grid grid-cols-4 gap-4">
          {[
            { label: "Average Rating", value: "4.6", icon: Star, color: "text-accent" },
            { label: "Total Reviews", value: "1,247", icon: MessageSquare, color: "text-primary" },
            { label: "Positive", value: "89%", icon: ThumbsUp, color: "text-success" },
            { label: "Needs Attention", value: "12", icon: Flag, color: "text-destructive" },
          ].map((stat) => (
            <Card key={stat.label}><CardContent className="p-4"><div className="flex items-center gap-3"><stat.icon className={`w-8 h-8 ${stat.color}`} /><div><p className={`text-2xl font-bold ${stat.color}`}>{stat.value}</p><p className="text-xs text-muted-foreground">{stat.label}</p></div></div></CardContent></Card>
          ))}
        </div>

        <Card>
          <CardHeader><CardTitle>Recent Reviews</CardTitle></CardHeader>
          <CardContent className="space-y-4">
            {reviews.map((review) => (
              <div key={review.id} className="p-4 border rounded-lg">
                <div className="flex items-start justify-between mb-3">
                  <div className="flex items-center gap-3">
                    <Avatar><AvatarFallback>{review.customer.charAt(0)}</AvatarFallback></Avatar>
                    <div><p className="font-medium">{review.customer}</p><p className="text-sm text-muted-foreground">{review.product} • {review.date}</p></div>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="flex">{[...Array(5)].map((_, i) => (<Star key={i} className={`w-4 h-4 ${i < review.rating ? "fill-accent text-accent" : "text-muted"}`} />))}</div>
                    {review.replied && <Badge variant="secondary">Replied</Badge>}
                  </div>
                </div>
                <p className="text-sm text-muted-foreground mb-3">{review.comment}</p>
                <div className="flex gap-2"><Button variant="outline" size="sm">Reply</Button>{review.rating <= 2 && <Button variant="outline" size="sm" className="text-destructive">Flag</Button>}</div>
              </div>
            ))}
          </CardContent>
        </Card>
      </div>
    </AdminLayout>
  );
}
