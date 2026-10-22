import Link from "next/link";
import { MapPin, Menu, Search, ShoppingCart, User } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTitle, SheetTrigger } from "@/components/ui/sheet";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import { navItems } from "@/lib/data";

export function Logo() {
  return (
    <Link href="/" className="flex items-center gap-1 text-2xl font-black uppercase italic tracking-tighter md:text-3xl">
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img src="/guitar.svg" alt="" className="size-9" />
      <span>
        Bowie<span className="text-primary">Store</span>
      </span>
    </Link>
  );
}

export function Header() {
  return (
    <header className="sticky top-0 z-40 border-b border-white/10 bg-background/95 backdrop-blur">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between gap-4 px-4">
        <div className="flex items-center gap-2">
          <Sheet>
            <SheetTrigger
              render={<Button variant="ghost" size="icon" className="lg:hidden" aria-label="Menú" />}
            >
              <Menu />
            </SheetTrigger>
            <SheetContent side="left" className="w-72 overflow-y-auto">
              <SheetTitle className="px-4 pt-4">
                <Logo />
              </SheetTitle>
              <nav className="flex flex-col gap-4 p-4">
                {navItems.map((n) => (
                  <div key={n.label}>
                    <p className="font-bold uppercase tracking-wide">{n.label}</p>
                    <ul className="mt-1 space-y-1 text-sm text-muted-foreground">
                      {n.items.map((i) => (
                        <li key={i}>
                          <Link href="#" className="hover:text-foreground">
                            {i}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </nav>
            </SheetContent>
          </Sheet>
          <Logo />
        </div>

        <NavigationMenu className="hidden lg:flex">
          <NavigationMenuList>
            {navItems.map((n) => (
              <NavigationMenuItem key={n.label}>
                {n.items.length ? (
                  <>
                    <NavigationMenuTrigger className="bg-transparent text-sm font-bold uppercase tracking-wide">
                      {n.label}
                    </NavigationMenuTrigger>
                    <NavigationMenuContent>
                      <ul className="grid w-56 gap-1 p-2">
                        {n.items.map((i) => (
                          <li key={i}>
                            <NavigationMenuLink render={<Link href="#" />}>{i}</NavigationMenuLink>
                          </li>
                        ))}
                      </ul>
                    </NavigationMenuContent>
                  </>
                ) : (
                  <NavigationMenuLink
                    render={<Link href="#" />}
                    className="px-4 py-2 text-sm font-bold uppercase tracking-wide text-primary"
                  >
                    {n.label}
                  </NavigationMenuLink>
                )}
              </NavigationMenuItem>
            ))}
          </NavigationMenuList>
        </NavigationMenu>

        <div className="flex items-center gap-1">
          <Button variant="ghost" size="sm" className="hidden xl:inline-flex">
            <MapPin /> Encuentra un distribuidor
          </Button>
          <Button variant="ghost" size="icon" aria-label="Buscar">
            <Search />
          </Button>
          <Button variant="ghost" size="icon" aria-label="Iniciar sesión">
            <User />
          </Button>
          <Button variant="ghost" size="icon" aria-label="Carrito">
            <ShoppingCart />
          </Button>
        </div>
      </div>
    </header>
  );
}
