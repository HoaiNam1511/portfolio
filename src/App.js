import About from "./components/About/About";
import Header from "./components/Header/Header";
import Introduce from "./components/Introduce/Introduce";
import Project from "./components/Project/Project";
import Skills from "./components/Skills/Skills";
function App() {
    return (
        <div>
            <Header />
            <Introduce />
            <About />
            <Skills />
            <Project />
        </div>
    );
}

export default App;
