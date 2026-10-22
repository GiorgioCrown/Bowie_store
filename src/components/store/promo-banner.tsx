import { Button } from "@/components/ui/button";
import { MockImage } from "./mock-image";

const banners = [
  { t: "Serie X", d: "Rendimiento profesional a un precio accesible.", hue: 220, kind: "guitar" as const },
  { t: "Serie Signature", d: "Los instrumentos de tus guitarristas favoritos.", hue: 280, kind: "person" as const },
];

export function PromoBanner() {
  return (
    <section className="mx-auto grid max-w-7xl gap-4 px-4 py-16 md:grid-cols-2">
      {banners.map((b) => (
        <div key={b.t} className="relative flex min-h-80 items-end overflow-hidden rounded-lg">
          <div className="absolute inset-0">
            <MockImage kind={b.kind} hue={b.hue} />
            <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/30 to-transparent" />
          </div>
          <div className="relative space-y-3 p-6">
            <h3 className="text-3xl font-black uppercase italic">{b.t}</h3>
            <p className="max-w-sm text-white/80">{b.d}</p>
            <Button className="font-bold uppercase">Explorar</Button>
          </div>
        </div>
      ))}
    </section>
  );
}
