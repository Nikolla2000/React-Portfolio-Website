import AboutSection from "../../Components/About/AboutSection"
import Chatbot from "../../Components/Chatbot/Chatbot"
import ContactSection from "../../Components/Contact/ContactSection"
import Footer from "../../Components/Footer/Footer"
import Header from "../../Components/Header/Header"
import PortfolioSection from "../../Components/Portfolio/PortfolioSection"

const HomePage = () => {
    return (
        <div className="homepage-wrapper">
            <Header/>
            <AboutSection/>
            {/* <PortfolioSection/> */}
            <ContactSection/>
            <Footer/>
            <Chatbot/>
        </div>
    )
}

export default HomePage