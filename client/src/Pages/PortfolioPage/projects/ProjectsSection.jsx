import { Col, Container, Row } from "react-bootstrap";
import portfolioData from "../../../Components/Portfolio/portfolioData";
import ProjectComponent from "./ProjectComponent";
import "./ProjectsSection.scss"


const ProjectsSection = () => {
    return (
        <section className="all-projects-wrapper">
            <Container>
                <Row>
                    {portfolioData.map((project) => (
                        <Col key={project.imgPath}>
                            <ProjectComponent data={project} />
                        </Col>
                    ))}
                </Row>
            </Container>
        </section>
    );
};

export default ProjectsSection;