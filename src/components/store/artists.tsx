import { Card } from "@/components/ui/card";
import { artists } from "@/lib/data";
import { MockImage } from "./mock-image";

export function Artists() {
  return (
    <section className="bg-card/40 py-16">
      <div className="mx-auto max-w-7xl px-4">
        <h2 className="mb-8 text-3xl font-black uppercase italic tracking-tighter">Artistas Bowie</h2>
        <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
          {artists.map((a) => (
            <Card key={a.name} className="group relative aspect-[3/4] gap-0 overflow-hidden py-0">
              <MockImage kind="person" hue={a.hue} className="transition-transform duration-500 group-hover:scale-105" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 to-transparent" />
              <div className="absolute bottom-4 left-4">
                <p className="font-black uppercase italic">{a.name}</p>
                <p className="text-sm text-primary">{a.band}</p>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
