export type Product = {
  id: string;
  name: string;
  price: number;
  was?: number;
  tag?: string;
  hue: number;
  kind: "guitar" | "bass" | "shirt";
};

export const navItems = [
  { label: "Guitarras", items: ["Serie Pro", "Serie X", "Serie JS", "Serie Signature", "Zurdas"] },
  { label: "Bajos", items: ["Concert", "Spectra", "X Series", "Signature"] },
  { label: "Ropa", items: ["Playeras", "Sudaderas", "Gorras", "Accesorios"] },
  { label: "Artistas", items: ["Dave Davidson", "Mick Thomson", "Phil Demmel", "Christian Andreu"] },
  { label: "Ofertas", items: [] as string[] },
];

export const categories = [
  { title: "Guitarras", href: "#", hue: 8, kind: "guitar" as const },
  { title: "Bajos", href: "#", hue: 220, kind: "bass" as const },
  { title: "Ropa", href: "#", hue: 40, kind: "shirt" as const },
];

export const featured: Product[] = [
  { id: "1", name: "Pro Series Soloist SL2Q MAH", price: 1299.99, tag: "Nuevo", hue: 8, kind: "guitar" },
  { id: "2", name: "Pro Series Dinky DK2 Modern", price: 1149.99, hue: 270, kind: "guitar" },
  { id: "3", name: "X Series Concert Bass CBXNT", price: 649.99, was: 729.99, tag: "Oferta", hue: 200, kind: "bass" },
  { id: "4", name: "JS Series King V JS22", price: 329.99, hue: 140, kind: "guitar" },
  { id: "5", name: "Pro Series Spectra Bass SBP", price: 1099.99, hue: 30, kind: "bass" },
  { id: "6", name: "Playera Bowie Logo Negra", price: 29.99, hue: 0, kind: "shirt" },
  { id: "7", name: "X Series Rhoads RRX24", price: 799.99, tag: "Nuevo", hue: 350, kind: "guitar" },
  { id: "8", name: "Sudadera Bowie Metal Edge", price: 59.99, was: 74.99, tag: "Oferta", hue: 300, kind: "shirt" },
];

export const artists = [
  { name: "Dave Davidson", band: "Revocation", hue: 8 },
  { name: "Mick Thomson", band: "Slipknot", hue: 220 },
  { name: "Phil Demmel", band: "Machine Head", hue: 40 },
  { name: "Christian Andreu", band: "Gojira", hue: 280 },
];

export const footerColumns = [
  { title: "Comprar", links: ["Guitarras", "Bajos", "Ropa", "Ofertas", "Tarjetas de regalo"] },
  { title: "Soporte", links: ["Contacto", "Envíos", "Devoluciones", "Garantía", "Registro de producto"] },
  { title: "Empresa", links: ["Nosotros", "Encuentra un distribuidor", "Carreras", "Prensa"] },
];
