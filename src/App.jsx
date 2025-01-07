import { ReactLenis,  } from "lenis/react";

/*  Components*/
import About from "./components/About";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Header from "./components/Header";
import { Hero } from "./components/Hero";
import Review from "./components/Review";
import Skill from "./components/Skill";
import Work from "./components/Work";

function App() {
  return (
      <ReactLenis root>
        <Header />{" "}
        <main>
          <Hero />
          <About />
          <Skill />
          <Work />
          <Review />
          <Contact />
        </main>
        <Footer />{" "}
      </ReactLenis>
  );
}

export default App;
