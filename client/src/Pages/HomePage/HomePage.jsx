import AboutSection from "../../Components/About/AboutSection"
import ContactSection from "../../Components/Contact/ContactSection"
import Header from "../../Components/Header/Header"
import PortfolioSection from "../../Components/Portfolio/PortfolioSection"

const HomePage = () => {
    return (
        <div className="homepage-wrapper">
            <Header/>
            <AboutSection/>
            <PortfolioSection/>
            <ContactSection/>
        </div>
    )
}

export default HomePage