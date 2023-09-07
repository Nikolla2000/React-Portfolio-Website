
const ProjectComponent = ( {data} ) => {
    return (
        <div className="project-wrapper">
            <img src={data.alternateImgPath ? 
            data.alternateImgPath : data.imgPath} alt="Project image"/>
        </div>
    );
};

export default ProjectComponent;