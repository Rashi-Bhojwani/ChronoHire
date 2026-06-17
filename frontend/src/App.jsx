import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

import Home from "./pages/Home";
import About from "./pages/About";
import Services from "./pages/Services";
import Jobs from "./pages/Jobs";
import Contact from "./pages/Contact";
import Apply from "./pages/Apply";

import { useState } from "react";

function App() {
  const [page, setPage] = useState("home");

  const renderPage = () => {
    switch (page) {
      case "home":
        return <Home setPage={setPage} />;

      case "about":
        return <About setPage={setPage} />;

      case "services":
        return <Services setPage={setPage} />;

      case "jobs":
        return <Jobs setPage={setPage} />;

      case "contact":
        return <Contact setPage={setPage} />;

      case "apply":
        return <Apply setPage={setPage} />;

      default:
        return <Home setPage={setPage} />;
    }
  };

  return (
    <>
    console.log("Sending to Navbar:", page, setPage);
      <Navbar page={page} setPage={setPage} />

      {renderPage()}

      <Footer setPage={setPage} />
    </>
  );
}

export default App;