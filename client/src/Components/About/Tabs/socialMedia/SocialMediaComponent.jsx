const SocialMediaComponent = ( {data} ) => {
    return (
        <div className="sm-wrapper">
            <p>Icon</p>
            <span>{data.name}</span>
        </div>
    );
};

export default SocialMediaComponent;