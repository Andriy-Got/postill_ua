import TopBar from "@/components/TopBar";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Features from "@/components/Features";
import Categories from "@/components/Categories";
import FeaturedProducts from "@/components/FeaturedProducts";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <TopBar />
      <Header />
      <main className="flex flex-col flex-1">
        <Hero />
        <Features />
        <Categories />
        <FeaturedProducts />
      </main>
      <Footer />
    </>
  );
}
