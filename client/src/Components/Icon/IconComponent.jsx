import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./IconStyles.scss"

const IconComponent = ({ data }) => {
    return (
        <a href={data.link} 
        target="_blank" 
        className="icon-wrapper">
            <FontAwesomeIcon icon={ data.icon }/>
        </a>
    );
};

export default IconComponent;