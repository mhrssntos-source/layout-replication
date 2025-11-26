import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const posts = [
  {
    image: "https://images.unsplash.com/photo-1574258495973-f010dfbb5371?w=400&h=300&fit=crop",
    caption: '"Proteja seus olhos com estilo! 😎 Nossa nova coleção de óculos de sol chegou..."',
    platform: "Instagram",
    date: "2 dias atrás",
  },
  {
    image: "https://images.unsplash.com/photo-1614013184541-6295d2f59471?w=400&h=300&fit=crop",
    caption: '"5 dicas para cuidar da saúde dos seus olhos 👁️ Você sabia que piscar..."',
    platform: "Instagram",
    date: "5 dias atrás",
  },
];

export function RecentPosts() {
  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        <h3 className="text-lg font-bold text-foreground">Posts Recentes</h3>
        <Button variant="ghost" size="sm" className="text-primary hover:text-primary">
          Ver Todos
        </Button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {posts.map((post, index) => (
          <Card key={index} className="overflow-hidden hover:shadow-lg transition-shadow">
            <img
              src={post.image}
              alt="Post preview"
              className="w-full h-48 object-cover"
            />
            <div className="p-4">
              <p className="text-sm text-foreground mb-3 line-clamp-2">
                {post.caption}
              </p>
              <div className="flex items-center justify-between text-xs text-muted-foreground">
                <span>{post.platform}</span>
                <span>{post.date}</span>
              </div>
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
}
