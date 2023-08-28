import AboutSection from "../../Components/About/AboutSection"
import ContactSection from "../../Components/Contact/ContactSection"
import Header from "../../Components/Header/Header"

const HomePage = () => {
    return (
        <div className="homepage-wrapper">
            <Header/>
            <AboutSection/>
            <ContactSection/>
        </div>
    )
}

export default HomePage