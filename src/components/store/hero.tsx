import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { MockImage } from "./mock-image";

export function Hero() {
  return (
    <section className="relative isolate overflow-hidden">
      <div className="absolute inset-0 -z-10">
        <MockImage kind="banner" hue={8} className="opacity-80" />
        <div className="absolute inset-0 bg-gradient-to-r from-black via-black/70 to-transparent" />
      </div>
      <div className="mx-auto flex min-h-[70vh] max-w-7xl flex-col justify-center gap-6 px-4 py-20">
        <Badge className="w-fit uppercase tracking-widest">Nueva colección 2026</Badge>
        <h1 className="max-w-2xl text-5xl font-black uppercase italic leading-[0.95] tracking-tighter md:text-7xl">
          Forjadas para el <span className="text-primary">caos</span>
        </h1>
        <p className="max-w-lg text-lg text-white/80">
          Descubre la nueva Pro Series Soloist: velocidad extrema, acabados espejo y un tono que
          arrasa con todo.
        </p>
        <div className="flex flex-wrap gap-3">
          <Button size="lg" className="font-bold uppercase">
            Comprar ahora
          </Button>
          <Button size="lg" variant="outline" className="font-bold uppercase">
            Ver colección
          </Button>
        </div>
      </div>
    </section>
  );
}
