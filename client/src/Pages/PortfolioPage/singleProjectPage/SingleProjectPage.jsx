import { useParams } from "react-router-dom";
import portfolioData from "../../../Components/Portfolio/portfolioData";
import { useEffect, useState } from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import "./SingleProjectStyles.scss";

const SingleProjectPage = () => {
    const { projectId } = useParams()
    const [projectData, setProjectData] = useState(undefined)

    useEffect(() => {
        setProjectData(portfolioData.find((project) => projectId == project.id))
    }, [projectId])
    
    return (
        <>
            {projectData && (
                <div className="single-project-page-wrapper">
                    <div className="single-project-header">
                        <h1>{projectData.title}</h1>
                        <div className="project-img-wrapper">
                            {projectData.alternateImgPath ?
                                <img src={projectData.alternateImgPath} alt={`${projectData.title} image`} /> 
                                : <img src={projectData.imgPath} alt={`${projectData.title} image`} />}
                        </div>
                    </div>   
                    <Container>
                        <Row>
                            <Col>
                                <h4 className="mb-5">Description</h4>
                                <p>{projectData.detailedDescription}</p>
                                <p className="mt-5">{projectData.skillsDemonstrated}</p>
                                <Button>Github</Button>
                            </Col>
                            <Col>
                                <h4 className="mb-5">Key Features</h4>
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
                </div>
            )}
        </>
    );
};

export default SingleProjectPage;
