import Carousel from 'react-bootstrap/Carousel';
import { dividedSkillsData } from '../../../Components/About/Tabs/skills/skillsData';
import { CarouselItem } from 'react-bootstrap';


const SkillsSection = () => {
    return (
        <section className="skills-section-about">
            <h2>My Skills</h2>
            <Carousel>
            {dividedSkillsData.map((dataSet, index) => (
                <CarouselItem key={index + 1}>
                    {dataSet.map((skill, index) => (
                        <div className="skill-wrapper" key={index + 1}>
                            <img src={skill.skillImg} alt='Skill Image'/>
                        </div>
                    ))}
                </CarouselItem>
            ))}
            </Carousel>
        </section>
    );
};

export default SkillsSection;