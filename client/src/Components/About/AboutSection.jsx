import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import AboutTab from './Tabs/AboutTab';
import SkillsTab from './Tabs/skills/SkillsTab';
import "./AboutStyles.scss"
import ServicesTab from './Tabs/services/ServicesTab';
import SocialMediaTab from './Tabs/socialMedia/SocialMediaTab';
import CertificatesTab from './Tabs/certificates/CertificatesTab';

const AboutSection = () => {
    return (
        <section className="about-section">
            <h1 className="main-about-heading">
                About Me
            </h1>
            <Tabs
            defaultActiveKey="about"
            id="justify-tab-example"
            className="mb-3"
            justify
            >
            <Tab eventKey="about" title="About">
                <AboutTab/>
            </Tab>
            <Tab eventKey="skill" title="Skill">
                <SkillsTab/>
            </Tab>
            <Tab eventKey="services" title="Services">
                <ServicesTab/>
            </Tab>
            <Tab eventKey="social-media" title="Social Media">
                <SocialMediaTab/>
            </Tab>
            <Tab eventKey="certificates" title="Certificates">
                <CertificatesTab/>
            </Tab>
            </Tabs>
        </section>
    )
}

export default AboutSection