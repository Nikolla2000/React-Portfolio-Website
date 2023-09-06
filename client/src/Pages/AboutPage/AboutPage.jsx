import CvSection from "../../Components/CV/CvSection"
import PageHeaderComponent from "../../Components/PageHeader/PageHeaderComponent"
import ServicesSection from "./services/ServicesSection"
import SkillsSection from "./skills/SkillsSection"
import Footer from "../../Components/Footer/Footer"

const AboutPage = () => {
    return (
        <div className="about-page">
            <PageHeaderComponent heading={{title: 'About Me', breadcrumb: 'About'}}/>
            <CvSection/>
            <SkillsSection/>
            <ServicesSection/>
            <Footer/>
        </div>
    )
}

export default AboutPage