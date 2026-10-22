import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import type { Product } from "@/lib/data";
import { MockImage } from "./mock-image";

const money = (n: number) =>
  new Intl.NumberFormat("en-US", { style: "currency", currency: "USD" }).format(n);

export function ProductCard({ p }: { p: Product }) {
  return (
    <Card className="group gap-0 overflow-hidden py-0">
      <div className="relative aspect-square overflow-hidden">
        <MockImage
          kind={p.kind}
          hue={p.hue}
          label={p.name}
          className="transition-transform duration-500 group-hover:scale-105"
        />
        {p.tag && (
          <Badge variant={p.tag === "Oferta" ? "default" : "secondary"} className="absolute left-3 top-3 uppercase">
            {p.tag}
          </Badge>
        )}
      </div>
      <CardContent className="space-y-1 p-4">
        <h3 className="line-clamp-2 min-h-10 text-sm font-bold uppercase leading-snug">{p.name}</h3>
        <p className="flex items-baseline gap-2">
          <span className="text-lg font-bold">{money(p.price)}</span>
          {p.was && <span className="text-sm text-muted-foreground line-through">{money(p.was)}</span>}
        </p>
      </CardContent>
      <CardFooter className="px-4 pb-4">
        <Button className="w-full font-bold uppercase" size="sm">
          Agregar al carrito
        </Button>
      </CardFooter>
    </Card>
  );
}
