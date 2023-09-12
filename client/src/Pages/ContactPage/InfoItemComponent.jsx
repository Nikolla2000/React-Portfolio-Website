const InfoItemComponent = ({ infoName, infoDetail, infoIcon }) => {
    return (
        <div className="info-item">
            <h2>{infoDetail}</h2>
            <div className="info-wrap">
                <div className="info-icon">
                    <img src={infoIcon} alt="Info icon"/>
                </div>
                <div className="info-text">
                    <span>{infoName}</span>
                </div>
            </div>
        </div>
    );
};

export default InfoItemComponent;