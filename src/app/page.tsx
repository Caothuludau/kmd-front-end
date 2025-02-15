import Link from "next/link";
import Card from "@/components/Card";
import Typography from "@/components/Typography";
import wines from "@/data/wines";
import BannerCarousel from '../components/BannerCarousel';

export default function HomePage() {
  return (
    <div className="container mx-auto p-6">
      <Typography variant="h1">Welcome to Khu Mo Distillery</Typography>
      <Typography variant="p">Discover our finest selection of wines.</Typography>

      <main className="pt-16">
        <BannerCarousel />
        {/* Other sections will go here */}
      </main>

      {/* Featured Wines */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {wines.slice(0, 2).map((wine) => (
          <Card key={wine.id} title={wine.title} description={wine.category} image={wine.image} price={wine.price} />
        ))}
      </div>

      {/* See All Wines Button */}
      <div className="mt-6">
        <Link href="/wine">
          <button className="bg-red-600 text-white px-4 py-2 rounded-md hover:bg-red-700">
            View All Wines
          </button>
        </Link>
      </div>
    </div>
  );
}
