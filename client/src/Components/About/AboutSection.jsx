import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import AboutTab from './Tabs/AboutTab';
import SkillsTab from './Tabs/skills/SkillsTab';
import "./AboutStyles.scss"

const AboutSection = () => {
    return (
        <section className="about-section">
            <h1 className="about-heading">
                About Me
            </h1>
            <Tabs
            defaultActiveKey="profile"
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
                Tab content for Loooonger Tab
            </Tab>
            <Tab eventKey="contact" title="Contact">
                Tab content for Contact
            </Tab>
            </Tabs>
        </section>
    )
}

export default AboutSection