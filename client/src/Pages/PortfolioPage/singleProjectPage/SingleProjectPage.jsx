import { useParams } from "react-router-dom";
import portfolioData from "../../../Components/Portfolio/portfolioData";
import { useEffect, useState } from "react";
import { Container, Row, Col, Button } from "react-bootstrap";

const SingleProjectPage = () => {
    const { projectId } = useParams()
    const [projectData, setProjectData] = useState(undefined)

    useEffect(() => {
        setProjectData(() =>  portfolioData.find((project) => projectId == project.id))
    }, [projectId])
    
    return (
        <div className="single-project-page-wrapper">
            {projectData && (
                
                <Container>
                    <Row>
                        <Col>
                            <div className="project-img-wrapper">
                                {projectData.alternateImgPath ?
                                <img src={projectData.alternateImgPath} alt={`${projectData.title} image`}/> 
                                : <img src={projectData.imgPath} alt={`${projectData.title} image`}/>}
                            </div>
                        </Col>
                        <Col>
                            <h1>{projectData.title}</h1>
                            <h4>Description</h4>
                            <p>{projectData.detailedDescription}</p>
                            <Button>Github</Button>
                            <p>{projectData.skillsDemonstrated}</p>
                            <h4>Key Features</h4>
                            {projectData.keyFeatures && (
                                <ul>
                                    {Object.entries(projectData.keyFeatures).map(([name, feature], index) => (
                                    <li key={index}>
                                        <strong>{name}:</strong> {feature}
                                    </li>
                                    ))}
                                </ul>
                            )}
                        </Col>
                    </Row>
                </Container>
            )}
        </div>
    );
};

export default SingleProjectPage;