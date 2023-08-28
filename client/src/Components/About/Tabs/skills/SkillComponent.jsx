const SkillComponent = ({ data }) => {
    return (
        <div className="skill-wrapper">
            <img src={data.skillImg}/>
            <span className="skill-name">{data.skillName}</span>
        </div>
    );
};

export default SkillComponent;