// src/app/page.tsx
import Header from "@/components/layout/Header";
import Banner from "@/components/Banner";
import PromoStrip from "@/components/PromoStrip";
import WineSelection from "@/components/WineSelection";
import BestSelling from "@/components/BestSelling";
import Footer from "@/components/layout/Footer";

export default function HomePage() {
  return (
    <div>
      <Header />
      <main className="mt-20">
        <Banner />
        <PromoStrip />
        <WineSelection />
        <BestSelling />
      </main>
      <Footer />
    </div>
  );
}