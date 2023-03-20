import About from "./components/About/About";
import Contact from "./components/Contact/Contact";
import Header from "./components/Header/Header";
import Introduce from "./components/Introduce/Introduce";
import Portfolio from "./components/Portfolio/Portfolio";
import Skills from "./components/Skills/Skills";

function App() {
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
