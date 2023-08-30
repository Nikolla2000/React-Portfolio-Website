import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const SocialMediaComponent = ( {data} ) => {
    return (
        <div className="sm-wrapper">
              <FontAwesomeIcon 
                icon={data.icon}  
                style={data.name === "GitHub" ? {borderColor: "#fff"} : {color: data.color, borderColor: data.color}}/>
            <span>{data.name}</span>
        </div>
    );
};

export default SocialMediaComponent;