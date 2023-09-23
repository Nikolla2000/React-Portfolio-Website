import React, { useState, useEffect } from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import SkillComponent from './SkillComponent';
import skillsData from './skillsData';
import 'animate.css';
import TextShpere from './TextSphere';

const SkillsTab = () => {
  const [fadeInLeftVisible, setFadeInLeftVisible] = useState(false);
  const [fadeInRightVisible, setFadeInRightVisible] = useState(false);

  useEffect(() => {
    const fadeInLeftTimer = setTimeout(() => {
      setFadeInLeftVisible(true);
    }, 2000); 


    const fadeInRightTimer = setTimeout(() => {
      setFadeInRightVisible(true);
    }, 2000); 

    return () => {
      clearTimeout(fadeInLeftTimer);
      clearTimeout(fadeInRightTimer);
    };
  }, []);

  return (
    <div className="skills-wrapper">
      <Container>
        {/* <h2>Basic Frontend Technologies</h2>
        <Row className={`justify-content-center ${fadeInLeftVisible && 'animate__animated animate__fadeInLeft'}`}>
          {skillsData.map((skill, index) => {
            if (skill.upperRow) {
              return (
                <Col md={4} key={index + 1}>
                  <SkillComponent data={skill} />
                </Col>
              );
            }
            return null; 
          })}
        </Row>

        <h2>Frameworks / Libraries</h2>
        <Row className={`${fadeInRightVisible && 'animate__animated animate__fadeInRight'}`}>
          {skillsData.map((skill, index) => {
            if (!skill.upperRow) {
              return (
                <Col md={3} key={index + 1}>
                  <SkillComponent data={skill} />
                </Col>
              );
            }
            return null; // Return null for upperRow skills
          })}
        </Row> */}
        <TextShpere/>
      </Container>
    </div>
  );
};

export default SkillsTab;