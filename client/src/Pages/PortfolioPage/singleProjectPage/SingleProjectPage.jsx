import { useParams } from "react-router-dom";
import portfolioData from "../../../Components/Portfolio/portfolioData";
import { useEffect, useState } from "react";

const SingleProjectPage = () => {
    const { projectId } = useParams()
    const [projectData, setProjectData] = useState(undefined)

    useEffect(() => {
        setProjectData(() =>  portfolioData.find((project) => projectId == project.id))
    }, [projectId])
    
    return (
        <div className="single-project-page-wrapper">
            {projectData && (
                <h1>{projectData.title}</h1>
            )}
        </div>
    );
};

export default SingleProjectPage;