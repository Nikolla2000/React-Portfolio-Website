import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./IconStyles.scss"
import TrackVisibility from "react-on-screen";
import 'animate.css'
import { useState } from "react";

const IconComponent = ({ data, hover, footer }) => {
    const [isHovered, setIsHovered] = useState(false)

    return (
        <TrackVisibility>
            {({ isVisible }) => 
            <a href={data.link} 
            target="_blank" 
            className="icon-wrapper">
                <FontAwesomeIcon 
                    icon={ data.icon } 
                    className={`${hover ? isHovered ? hover : '' : ''} ${footer && isVisible ? 'animate__animated animate__rotateIn' : ''}`} 
                    onMouseEnter={() => setIsHovered(true)} 
                    onMouseLeave={() => setIsHovered(false)}/>
            </a>
            }
        </TrackVisibility>
    );
};

export default IconComponent;