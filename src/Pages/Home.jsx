import FinalSection from "../Components/FinalSection.jsx";
import HomeHeader from "../Components/HomeHeader.jsx";
import IntroductorySectionWelcomepage from "../Components/introductorySection.jsx";
import NavBar from "../Components/NavBar.jsx";
import SectionFive from "../Components/SecionFive.jsx";
import SectionFour from "../Components/SectionFour.jsx";
import SectionOne from "../Components/SectionOne.jsx";
import SectionThree from "../Components/SectionThree.jsx";
import SectionTwo from "../Components/SectionTwo.jsx";

const Home = () => {

    return<>
        <HomeHeader/>
        <NavBar />
        <IntroductorySectionWelcomepage />
        <SectionOne />
        <SectionTwo />
        <SectionThree />
        <SectionFour />
        <SectionFive />
        <FinalSection />
    </>
}

export default Home;