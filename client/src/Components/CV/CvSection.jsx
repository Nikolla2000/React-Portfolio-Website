import { Container, Row, Col, Button } from "react-bootstrap";

const CvSection = () => {
    return (
        <section className="cv-section-wrapper">
            <Container>
                <Row>
                    <Col lg={6} md={6}>
                        <div className="cv-image-wrapper">
                            <img src="../../../src/assets/images/cv.png" alt="My Resume"/>
                        </div>
                    </Col>
                    <Col lg={6} md={6}>
                        <div className="about-details-wrapper">
                            <h2>I Code Experiences, Not Just Websites</h2>
                            <p>My name is Nikola Uzunov and I'm 23 years-old based in Varna, Bulgaria.
                                I'm taking my first steps as a web developer. My primary focus is into frontend development.
                                 My appetite for growth and improvement drives me to explore this field further. 
                                 Let's connect and create amazing digital experiences together!</p>
                                 <ul>
                                    <li>Passionate and Aspiring Web Developer</li>
                                    <li>Crafting Digital Solutions</li>
                                    <li>Commitment to Excellence</li>
                                 </ul>
                                 <Button variant="danger">
                                    <a
                                        href="/Nikola'sResume.pdf"
                                        download="Nikola'sResume.pdf"  
                                        className="download-button">
                                        Download PDF
                                    </a>
                                 </Button>
                        </div>
                    </Col>
                </Row>
            </Container>
            
        </section>
    );
};

export default CvSection;