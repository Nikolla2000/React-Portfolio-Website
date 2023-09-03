import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./IconStyles.scss"
import 'animate.css'
import { useState } from "react";

const IconComponent = ({ data, hover }) => {
    const [isHovered, setIsHovered] = useState(false)

    return (
        <a href={data.link} 
        target="_blank" 
        className="icon-wrapper">
            <FontAwesomeIcon 
                icon={ data.icon } 
                className={hover ? isHovered ? hover : '' : ''} 
                onMouseEnter={() => setIsHovered(true)} 
                onMouseLeave={() => setIsHovered(false)}/>
        </a>
    );
};

export default IconComponent;