import {Link} from "react-router-dom"
import { faAngleRight } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useState } from "react";

const ProjectComponent = ({ data }) => {
    const [isImgHovered, setIsImgHovered] = useState(false)

    return (
        <>
        <h4 className="project-title mb-3">{data.title}</h4>
        <div 
        className="project-wrapper" 
        onMouseEnter={() => setIsImgHovered(true)} 
        onMouseLeave={() => setIsImgHovered(false)}>
            <img src={data.alternateImgPath ? 
                data.alternateImgPath 
                : data.imgPath} alt="Project image"/>
            {isImgHovered && (
                <Link to="/">
                    <div className="icon">
                        <FontAwesomeIcon icon={faAngleRight} style={{color: "#f1f4f8",}} />
                    </div>
                    <span>Learn More</span>
                </Link>

            )}
        </div>
        </>
    );
};

export default ProjectComponent;