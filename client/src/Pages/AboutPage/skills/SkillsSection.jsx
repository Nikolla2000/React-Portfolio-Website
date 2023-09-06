import Carousel from 'react-bootstrap/Carousel';
import { dividedSkillsData } from '../../../Components/About/Tabs/skills/skillsData';
import { CarouselItem } from 'react-bootstrap';
import "./SkillsSectionStyles.scss"


const SkillsSection = () => {
    return (
        <section className="skills-section-about about-page-section">
            <h2 className="about-header">My Skills</h2>
            <Carousel>
            {dividedSkillsData.map((dataSet, index) => (
                <CarouselItem key={index + 1}>
                    <div className="all-skills-wrapper">
                        {dataSet.map((skill, index) => (
                            <div className="skill-wrapper" key={index + 1}>
                                <img src={skill.skillImg} alt='Skill Image'/>
                                <span className='skill-name'>{skill.skillName}</span>
                            </div>
                        ))}
                    </div>
                </CarouselItem>
            ))}
            </Carousel>
        </section>
    );
};

export default SkillsSection;