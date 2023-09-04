import CvSection from "../../Components/CV/CvSection"
import PageHeaderComponent from "../../Components/PageHeader/PageHeaderComponent"

const AboutPage = () => {
    return (
        <div className="about-page">
            <PageHeaderComponent heading={{title: 'About Me', breadcrumb: 'About'}}/>
            <CvSection/>
        </div>
    )
}

export default AboutPage