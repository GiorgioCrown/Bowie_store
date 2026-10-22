import Link from "next/link";
import { Separator } from "@/components/ui/separator";
import { footerColumns } from "@/lib/data";
import { Logo } from "./header";

const socials = ["Instagram", "Facebook", "YouTube", "TikTok", "X"];

export function Footer() {
  return (
    <footer className="border-t border-white/10 bg-black">
      <div className="mx-auto grid max-w-7xl gap-10 px-4 py-14 md:grid-cols-5">
        <div className="space-y-4 md:col-span-2">
          <Logo />
          <p className="max-w-xs text-sm text-muted-foreground">
            Guitarras, bajos y ropa para quienes viven el metal. Tienda de demostración.
          </p>
          <ul className="flex flex-wrap gap-3 text-sm">
            {socials.map((s) => (
              <li key={s}>
                <Link href="#" className="text-muted-foreground hover:text-primary">
                  {s}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        {footerColumns.map((c) => (
          <div key={c.title}>
            <h4 className="mb-3 font-bold uppercase tracking-wide">{c.title}</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              {c.links.map((l) => (
                <li key={l}>
                  <Link href="#" className="hover:text-foreground">
                    {l}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
      <Separator className="bg-white/10" />
      <p className="px-4 py-6 text-center text-xs text-muted-foreground">
        © 2026 Bowie Store. Todos los derechos reservados. Proyecto de demostración con imágenes ficticias.
      </p>
    </footer>
  );
}
