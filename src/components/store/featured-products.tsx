import { Button } from "@/components/ui/button";
import { featured } from "@/lib/data";
import { ProductCard } from "./product-card";

export function FeaturedProducts() {
  return (
    <section className="bg-card/40 py-16">
      <div className="mx-auto max-w-7xl px-4">
        <div className="mb-8 flex items-end justify-between">
          <h2 className="text-3xl font-black uppercase italic tracking-tighter">Lo más buscado</h2>
          <Button variant="link" className="font-bold uppercase">
            Ver todo
          </Button>
        </div>
        <div className="grid grid-cols-2 gap-4 lg:grid-cols-4">
          {featured.map((p) => (
            <ProductCard key={p.id} p={p} />
          ))}
        </div>
      </div>
    </section>
  );
}
