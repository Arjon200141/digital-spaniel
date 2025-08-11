import Banner from "./Banner";
import Capability from "./Capability";
import CaseStudy from "./CaseStudy";
import Footer from "./Footer";
import Navbar from "./Navbar";

const HomePage = () => {
    return (
        <div>
            <Navbar></Navbar>
            <Banner></Banner>
            <Capability></Capability>
            <CaseStudy></CaseStudy>
            <Footer></Footer>
        </div>
    );
};

export default HomePage;