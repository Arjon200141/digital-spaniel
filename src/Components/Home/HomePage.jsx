import About from "./About";
import Banner from "./Banner";
import Capability from "./Capability";
import CaseStudy from "./CaseStudy";
import Footer from "./Footer";
import Navbar from "./Navbar";
import Projects from "./Projects";

const HomePage = () => {
    return (
        <div>
            <Navbar></Navbar>
            <Banner></Banner>
            <div className='lg:h-0 h-[80vh]'></div>
            <Capability></Capability>
            <Projects></Projects>
            <CaseStudy></CaseStudy>
            <About></About>
            <Footer></Footer>
        </div>
    );
};

export default HomePage;