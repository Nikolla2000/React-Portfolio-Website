import Container from "react-bootstrap/esm/Container";
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import SkillComponent from "./SkillComponent";
import skillsData from "./skillsData";

const SkillsTab = () => {
    return (
        <div className='skills-wrapper'>
            <Container>
                <Row className="justify-content-center">
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
                </Row>
                <Row>
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
                </Row>
            </Container>
        </div>
    );
};

export default SkillsTab;