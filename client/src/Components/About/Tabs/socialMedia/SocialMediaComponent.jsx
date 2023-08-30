import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const SocialMediaComponent = ( {data} ) => {
    return (
        <div className="sm-wrapper">
            <a href={data.link}
            target='_blank'
            rel="noopener noreferrer">
                <FontAwesomeIcon 
                icon={data.icon}  
                style={data.name === "GitHub" ? {borderColor: "#fff"} 
                    : {color: data.color, borderColor: data.color}}/>
                <span>{data.name}</span>
            </a>
        </div>
    );
};

export default SocialMediaComponent;