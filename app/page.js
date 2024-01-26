import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Image from "next/image";
import Products from "@/components/Products";
import Partner from "@/components/Partner";
import About from "@/components/About";

export default function Home() {
  return (
    <main className="flex flex-col">
      <Navbar />

      <Hero />

      <Products />
      <Partner />

      <About />
      <Footer />
    </main>
  );
}
