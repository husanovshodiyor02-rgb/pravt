import Header from "./components/Header";
import Hero from "./components/Hero";
import Categories from "./components/Categories";
import About from "./components/About";
import CatalogBanner from "./components/CatalogBanner";
import News from "./components/News";
import InfoFooter from "./components/InfoFooter";

function App() {
  return (
    <>
      <Header />
      <Hero />
      <Categories />
      <CatalogBanner/>
      <About/>
      <News/>
      <InfoFooter/>
    </>
  );
}

export default App;
