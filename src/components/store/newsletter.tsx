import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export function Newsletter() {
  return (
    <section className="bg-primary text-primary-foreground">
      <div className="mx-auto flex max-w-7xl flex-col items-center gap-6 px-4 py-16 text-center">
        <h2 className="text-4xl font-black uppercase italic tracking-tighter">Gana el filo metalero</h2>
        <p className="max-w-xl">
          Recibe en tu correo los últimos lanzamientos y promociones imperdibles de Bowie Store.
        </p>
        <form className="flex w-full max-w-md flex-col gap-2 sm:flex-row">
          <Input
            type="email"
            placeholder="tu@correo.com"
            aria-label="Correo electrónico"
            className="border-white/40 bg-black/30 text-white placeholder:text-white/60"
          />
          <Button type="button" className="bg-black font-bold uppercase text-white hover:bg-black/80">
            Suscribirme
          </Button>
        </form>
      </div>
    </section>
  );
}
