import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLaptop} from '@fortawesome/free-solid-svg-icons'

const SocialMediaComponent = ( {data} ) => {
    return (
        <div className="sm-wrapper">
              <FontAwesomeIcon icon="fa-brands fa-facebook-f" />
            <span>{data.name}</span>
        </div>
    );
};

export default SocialMediaComponent;