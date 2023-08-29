import Container from "react-bootstrap/esm/Container";
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import SkillComponent from "./SkillComponent";
import skillsData from "./skillsData";
import "animate.css"
import TrackVisibility from "react-on-screen"

const SkillsTab = () => {
    return (
        <div className='skills-wrapper'>
            <Container>
                <h2>Basic Frontend Techonologies</h2>
                <TrackVisibility>
                {({ isVisible }) =>
                <Row className={`justify-content-center ${isVisible && "animate__animated animate__fadeInLeft"}`}>
                {skillsData.map((skill, index) => {
                    if (skill.upperRow) {
                        return (
                            <Col md={4} key={index + 1}>
                                <SkillComponent 
                                    data={skill}
                                />
                            </Col>
                        );
                    }
                })}
                </Row>}
                </TrackVisibility>
                <h2>Frameworks / Libraries</h2>
                <TrackVisibility>
                {({ isVisible }) =>
                <Row className={`${isVisible && "animate__animated animate__fadeInRight"}`}>
                    {skillsData.map((skill, index) => {
                        if(!skill.upperRow) {
                            return (
                                <Col md={3} key={index + 1}>
                                    <SkillComponent
                                        data={skill}
                                    />
                                </Col>
                            )
                        }
                    })}
                </Row>}
                </TrackVisibility>
            </Container>
        </div>
    );
};

export default SkillsTab;