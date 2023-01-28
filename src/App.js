import React from "react";
import About from "./components/about";
import Banner from "./components/banner";
import Blog from "./components/blog";
import Company from "./components/company";
import Concerns from "./components/concerns";
import Contact from "./components/contact";
import Footer from "./components/footer";
import Header from "./components/header";
import Maps from "./components/map";
import Navbar from "./components/navbar";
import Services from "./components/services";

function App() {
  return (
    <>
      <Header />
      <Navbar />
      <Banner />
      <About />
      <Services />
      <Company />
      <Concerns />
      <Blog />
      <Maps />
      <Contact />
      <Footer />
    </>
  );
}

export default App;
