import {Link} from "react-router-dom"

const ProjectComponent = ( {data} ) => {
    return (
        <div className="project-wrapper">
            <img src={data.alternateImgPath ? 
            data.alternateImgPath : data.imgPath} alt="Project image"/>
            <Link to="/">
                <span>Learn More</span>
            </Link>
        </div>
    );
};

export default ProjectComponent;