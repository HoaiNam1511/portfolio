import About from "./components/About/About";
import Contact from "./components/Contact/Contact";
import Header from "./components/Header/Header";
import Introduce from "./components/Introduce/Introduce";
import Portfolio from "./components/Portfolio/Portfolio";
import Skills from "./components/Skills/Skills";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

function App() {
    useEffect(() => {
        AOS.init({ duration: 2000, once: true });
    }, []);
    return (
        <div>
            <Header />
            <Introduce />
            <About />
            <Skills />
            <Portfolio />
            <Contact />
        </div>
    );
}

export default App;
