import { AnnouncementBar } from "@/components/store/announcement-bar";
import { Header } from "@/components/store/header";
import { Hero } from "@/components/store/hero";
import { Categories } from "@/components/store/categories";
import { FeaturedProducts } from "@/components/store/featured-products";
import { PromoBanner } from "@/components/store/promo-banner";
import { Artists } from "@/components/store/artists";
import { Newsletter } from "@/components/store/newsletter";
import { Footer } from "@/components/store/footer";

export default function Home() {
  return (
    <>
      <AnnouncementBar />
      <Header />
      <main>
        <Hero />
        <Categories />
        <FeaturedProducts />
        <PromoBanner />
        <Artists />
        <Newsletter />
      </main>
      <Footer />
    </>
  );
}
