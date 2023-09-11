const InfoItemComponent = ({ infoName, infoDetail }) => {
    return (
        <div className="info-item">
            <h2>{infoDetail}</h2>
            {infoName}
        </div>
    );
};

export default InfoItemComponent;