import Navbar from "./components/Navbar"
import "./assets/app.css"

//pages 
import {Dashboard} from "./pages/Dashboard"
import AboutMe from "./pages/AboutMe";
import Experience from "./pages/Experience"
import Projects from "./pages/Projects"
import SocialLinks from "./pages/SocialLinks"
import Email from "./pages/Email"
import Footer from "./pages/Footer"
import TechStack from "./pages/TechStack"
function App() {
    return (
        <main>
            <div className="main">
                <Navbar/>

                <div className="container">
                    <div className="right">
                        <Email />
                    </div>
                    <div className="contents">
                        <Dashboard/>
                        <AboutMe />
                        <TechStack/>
                        <Experience/>
                        <Projects/>
                    </div>
                    <div className="links">
                        <SocialLinks/>
                    </div>
                </div>
                <Footer/>
            </div>
        </main>
    );
}

export default App;
