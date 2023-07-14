import { React, useEffect, useState } from "react";
import { About, Footer, Header, Skills, Testimonial, Work } from "./container";
import { Navbar, NavbarMobile } from "./components";
import "./App.scss";

const App = () => {
  const [isLoaded, setIsLoaded] = useState(false);
  useEffect(() => {
    const checkDocumentLoaded = () => {
      setTimeout(() => {
        setIsLoaded(true);
      }, 200);
    };
    if (
      document.readyState === "complete" ||
      document.readyState === "interactive"
    ) {
      checkDocumentLoaded();
    } else {
      document.addEventListener("DOMContentLoaded", checkDocumentLoaded);
    }
    return () => {
      document.removeEventListener("DOMContentLoaded", checkDocumentLoaded);
    };
  }, []);
  return (
    <div className={`app ${isLoaded ? "loaded" : ""}`}>
      {isLoaded && (
        <>
          <Navbar />
          <NavbarMobile />
          <Header />
          <About />
          <Work />
          <Skills />
          <Testimonial />
          <Footer />
        </>
      )}
    </div>
  );
};

export default App;
