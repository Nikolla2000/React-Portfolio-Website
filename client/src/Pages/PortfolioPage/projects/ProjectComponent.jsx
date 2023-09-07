
const ProjectComponent = ( {data} ) => {
    return (
        <div className="project-wrapper">
            <img src={data.alternateImgPath ? 
            data.alternateImgPath : data.imgPath} alt="Project image"/>
            <div id="container">
            <button class="learn-more">
                <span class="circle" aria-hidden="true">
                <span class="icon arrow"></span>
                </span>
                <span class="button-text">Learn More</span>
            </button>
            </div>
        </div>
    );
};

export default ProjectComponent;