import { Col, Container, Row } from "react-bootstrap";
import portfolioData from "../../../Components/Portfolio/portfolioData";


const ProjectsSection = () => {
    return (
        <section className="all-projects-wrapper">
            <Container>
                <Row>
                    {portfolioData.map((project) => (
                        <p>{project.title}</p>
                    ))}
                </Row>
            </Container>
        </section>
    );
};

export default ProjectsSection;