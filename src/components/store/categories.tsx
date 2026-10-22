import Link from "next/link";
import { categories } from "@/lib/data";
import { MockImage } from "./mock-image";

export function Categories() {
  return (
    <section className="mx-auto max-w-7xl px-4 py-16">
      <h2 className="mb-8 text-3xl font-black uppercase italic tracking-tighter">Compra por categoría</h2>
      <div className="grid gap-4 md:grid-cols-3">
        {categories.map((c) => (
          <Link key={c.title} href={c.href} className="group relative aspect-[4/3] overflow-hidden rounded-lg">
            <MockImage kind={c.kind} hue={c.hue} className="transition-transform duration-500 group-hover:scale-105" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
            <span className="absolute bottom-4 left-4 text-2xl font-black uppercase italic">
              {c.title}
              <span className="ml-2 inline-block text-primary transition-transform group-hover:translate-x-1">→</span>
            </span>
          </Link>
        ))}
      </div>
    </section>
  );
}
