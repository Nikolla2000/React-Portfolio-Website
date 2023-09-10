import { useParams } from "react-router-dom";
import portfolioData from "../../../Components/Portfolio/portfolioData";
import { useEffect, useState } from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import { faAngleRight } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import "./SingleProjectStyles.scss";
import VideoPreviewModal from "./VideoPreviewModal";

const SingleProjectPage = () => {
    const { projectId } = useParams();
    const [projectData, setProjectData] = useState(undefined);
    const [isHovered, setIsHovered] = useState(false);
    const [showVideoModal, setShowVideoModal] = useState(false)

    useEffect(() => {
        setProjectData(portfolioData.find((project) => projectId == project.id))
    }, [projectId])
    
    return (
        <>
            {projectData && (
                <div className="single-project-page-wrapper">
                    <div className="single-project-header">
                        <h1>{projectData.title}</h1>
                        <div 
                            className="project-img-wrapper"
                            onMouseEnter={() => setIsHovered(true)}
                            onMouseLeave={() => setIsHovered(false)}>
                            {projectData.alternateImgPath ?
                                <img src={projectData.alternateImgPath} alt={`${projectData.title} image`} /> 
                                : <img src={projectData.imgPath} alt={`${projectData.title} image`} />}
                                {isHovered && 
                                    <Button onClick={() => setShowVideoModal(true)}>
                                    Watch Video Preview
                                    </Button>}
                                    {showVideoModal && <VideoPreviewModal video={projectData.videoPath}/>}
                        </div>
                    </div>   
                    <Container>
                        <Row>
                            <Col lg={6} xs={12}>
                                <h4 className="mb-5">Description</h4>
                                <p>{projectData.detailedDescription}</p>
                                <p className="mt-5">{projectData.skillsDemonstrated}</p>
                                <div className="view-github-button">
                                    <a href={projectData.link} target="_blank">
                                        <div className="icon">
                                            <FontAwesomeIcon icon={faAngleRight} style={{color: "#f1f4f8",}} />
                                        </div>
                                        <span>View on GitHub</span>
                                    </a>
                                </div>
                            </Col>
                            <Col lg={6} xs={12}>
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
