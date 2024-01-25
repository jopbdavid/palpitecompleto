import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Image from "next/image";
import Products from "@/components/Products";

export default function Home() {
  return (
    <main className="flex flex-col">
      <Navbar />
      <div className="h-32">Placeholder</div>
      <Hero />
      <div className="h-32">Placeholder</div>
      <Products />
      <div className="h-32">Placeholder</div>
      <Footer />
    </main>
  );
}
