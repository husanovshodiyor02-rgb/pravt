import { Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import InfoFooter from "./components/InfoFooter";

import Home from "./pages/Home";
import About from "./pages/About";
import News from "./pages/News";
import Contacts from "./pages/Contacts";
import Partners from "./pages/Partners";

function App() {
  return (
    <>
      <Header />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/partners" element={<Partners />} />
        <Route path="/news" element={<News />} />
        <Route path="/contacts" element={<Contacts />} />
      </Routes>

      <InfoFooter />
    </>
  );
}

export default App;
