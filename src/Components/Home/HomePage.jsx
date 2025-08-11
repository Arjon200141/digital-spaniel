import About from "./About";
import Banner from "./Banner";
import Capability from "./Capability";
import CaseStudy from "./CaseStudy";
import Footer from "./Footer";
import Navbar from "./Navbar";
import Projects from "./Projects";
import TestimonialsCarousel from "./TestimonialsCarousel";

const HomePage = () => {
    return (
        <div>
            <Navbar></Navbar>
            <Banner></Banner>
            <div className='lg:h-0 h-[88vh]'></div>
            <Capability></Capability>
            <Projects></Projects>
            <CaseStudy></CaseStudy>
            <About></About>
            <TestimonialsCarousel></TestimonialsCarousel>
            <Footer></Footer>
        </div>
    );
};

export default HomePage;