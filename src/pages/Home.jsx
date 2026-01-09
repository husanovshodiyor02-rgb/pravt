import Hero from "../components/Hero";
import Categories from "../components/Categories";
import About from "../components/About";
import CatalogBanner from "../components/CatalogBanner";
import News from "../components/News";

export default function Home() {
  return (
    <>
      <Hero />
      <Categories />
      <CatalogBanner />
      <About />
      <News />
    </>
  );
}
