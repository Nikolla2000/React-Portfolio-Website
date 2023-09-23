import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import 'animate.css';
import { useState } from 'react';

const SocialMediaComponent = ( {data} ) => {
    const [isHovered, setIsHovered] = useState(false);
    return (
        <div 
            className={`sm-wrapper ${isHovered && 'animate__animated animate__heartBeat'}`}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}>
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