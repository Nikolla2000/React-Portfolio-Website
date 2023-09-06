import CvSection from "../../Components/CV/CvSection"
import PageHeaderComponent from "../../Components/PageHeader/PageHeaderComponent"
import SkillsSection from "./skills/SkillsSection"

const AboutPage = () => {
    return (
        <div className="about-page">
            <PageHeaderComponent heading={{title: 'About Me', breadcrumb: 'About'}}/>
            <CvSection/>
            <SkillsSection/>
        </div>
    )
}

export default AboutPage